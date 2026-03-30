#Requires -Version 5.1
<#
.SYNOPSIS
  Start, stop, restart, or show status of the VerbaSense Next.js dev server (port 3010 only).

.DESCRIPTION
  Starts a hidden PowerShell child that runs scripts/run-dev.ps1 (npm run dev + Turbopack).
  PID is stored in .courtsense-dev.pid (gitignored). Logs: logs/dev-server.log

.EXAMPLE
  .\manage-frontend.ps1 start
  .\manage-frontend.ps1 status
  .\manage-frontend.ps1 stop
  .\manage-frontend.ps1 restart
#>
param(
  [Parameter(Position = 0)]
  [ValidateSet("start", "stop", "restart", "status")]
  [string]$DevCommand = "status",
  [switch]$VerboseStartup
)
# VerboseStartup: console progress every 5s while waiting for the port; details in logs/dev-server.log

$ErrorActionPreference = "Stop"

$ProjectRoot = if ($PSScriptRoot) { $PSScriptRoot } else { Get-Location }
Set-Location $ProjectRoot

$Port = 3010
$PidFile = Join-Path $ProjectRoot ".courtsense-dev.pid"
$RunDevScript = Join-Path $ProjectRoot "scripts\run-dev.ps1"
$LogDir = Join-Path $ProjectRoot "logs"
$DevLogFile = Join-Path $LogDir "dev-server.log"

function Write-ManageLog([string]$Message) {
  try {
    New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
    $ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss.fff"
    Add-Content -LiteralPath $DevLogFile -Value "$ts [manage] $Message" -Encoding UTF8
  }
  catch {
    Write-Warning "Could not write manage log: $($_.Exception.Message)"
  }
}

function Test-DevPortOpen {
  # Short timeout: synchronous TcpClient.Connect can block when the port is closed.
  $tcp = $null
  try {
    $tcp = New-Object System.Net.Sockets.TcpClient
    $iar = $tcp.BeginConnect("127.0.0.1", $Port, $null, $null)
    if (-not $iar.AsyncWaitHandle.WaitOne(600, $false)) {
      try { $tcp.Close() } catch {}
      return $false
    }
    try {
      $tcp.EndConnect($iar)
    }
    catch {
      try { $tcp.Close() } catch {}
      return $false
    }
    $tcp.Close()
    return $true
  }
  catch {
    try { if ($tcp) { $tcp.Close() } } catch {}
    try {
      $listeners = [System.Net.NetworkInformation.IPGlobalProperties]::GetIPGlobalProperties().GetActiveTcpListeners()
      foreach ($l in $listeners) {
        if ($l.Port -eq $Port) { return $true }
      }
    }
    catch {}
    return $false
  }
}

function Get-PidFromFile {
  if (-not (Test-Path -LiteralPath $PidFile)) { return $null }
  $raw = (Get-Content -LiteralPath $PidFile -Raw).Trim()
  $id = 0
  if ([int]::TryParse($raw, [ref]$id)) {
    return $id
  }
  return $null
}

function Save-Pid([int]$ProcessId) {
  [System.IO.File]::WriteAllText($PidFile, "$ProcessId")
}

function Remove-PidFile {
  if (Test-Path -LiteralPath $PidFile) {
    Remove-Item -LiteralPath $PidFile -Force
  }
}

function Test-ProcessAlive([int]$ProcessId) {
  try {
    $null = Get-Process -Id $ProcessId -ErrorAction Stop
    return $true
  }
  catch {
    return $false
  }
}

function Stop-ProcessTree([int]$ProcessId) {
  if ($ProcessId -le 0) { return }
  try {
    $null = & taskkill.exe /F /T /PID $ProcessId 2>&1
  }
  catch {}
  try {
    Stop-Process -Id $ProcessId -Force -ErrorAction SilentlyContinue
  }
  catch {}
}

function Get-PidsListeningOnPort {
  $set = [System.Collections.Generic.HashSet[int]]::new()
  try {
    $conns = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    foreach ($c in $conns) {
      $op = $c.OwningProcess
      if ($op -and $op -gt 0) { [void]$set.Add([int]$op) }
    }
  }
  catch {}
  return @($set)
}

function Stop-ByPort {
  foreach ($op in (Get-PidsListeningOnPort)) {
    Write-ManageLog "Stop-ByPort: taskkill /T /PID $op (port $Port)"
    Stop-ProcessTree $op
  }
}

# Kill listeners on another port (e.g. ad-hoc next dev -p 3011) so this repo standardizes on 3010.
function Stop-ListenersOnPort([int]$ListenPort) {
  if ($ListenPort -le 0) { return }
  try {
    $conns = Get-NetTCPConnection -LocalPort $ListenPort -State Listen -ErrorAction SilentlyContinue
    foreach ($c in $conns) {
      $op = $c.OwningProcess
      if ($op -and $op -gt 0) {
        Write-ManageLog "Stop-ListenersOnPort: taskkill /T /PID $op (port $ListenPort)"
        Stop-ProcessTree ([int]$op)
      }
    }
  }
  catch {}
}

# Stop stray PowerShell wrappers or Node processes tied to this repo and dev port. Returns count targeted.
function Stop-RelatedDevProcesses {
  $projLeaf = Split-Path $ProjectRoot -Leaf
  $n = 0
  try {
    $cimFilter = "Name = 'node.exe' OR Name = 'powershell.exe' OR Name = 'pwsh.exe'"
    $raw = @(Get-CimInstance Win32_Process -Filter $cimFilter -ErrorAction SilentlyContinue)
    $matched = $raw | Where-Object {
      $cl = $_.CommandLine
      if (-not $cl) {
        $false
      }
      else {
        $here = $cl -like "*${projLeaf}*"
        $runDev = $cl -match 'run-dev\.ps1'
        $nextHere = $here -and ($cl -match 'next') -and ($cl -match 'dev') -and ($cl -match [string]$Port)
        [bool]($runDev -or $nextHere)
      }
    }
    foreach ($p in $matched) {
      $n++
      Write-ManageLog "Stop-RelatedDevProcesses: ending PID $($p.ProcessId) ($($p.Name))"
      Stop-ProcessTree ([int]$p.ProcessId)
    }
  }
  catch {
    Write-ManageLog "Stop-RelatedDevProcesses: CIM query failed: $($_.Exception.Message)"
  }
  return $n
}

function Wait-PortFree {
  param([int]$TimeoutSec = 25)
  $deadline = (Get-Date).AddSeconds($TimeoutSec)
  while ((Test-DevPortOpen) -and ((Get-Date) -lt $deadline)) {
    Stop-ByPort
    Start-Sleep -Milliseconds 350
  }
  return -not (Test-DevPortOpen)
}

function Invoke-Stop {
  Write-ManageLog "Invoke-Stop: stopping CourtSense dev (port $Port)"
  $pidFromFile = Get-PidFromFile
  $stopped = $false

  if ($null -ne $pidFromFile -and (Test-ProcessAlive $pidFromFile)) {
    Write-Host "Stopping dev wrapper tree (PID $pidFromFile)..."
    Stop-ProcessTree $pidFromFile
    $stopped = $true
    Start-Sleep -Milliseconds 600
  }

  if (Test-DevPortOpen) {
    Write-Host "Stopping listener(s) on port $Port..."
    Stop-ByPort
    $stopped = $true
    Start-Sleep -Milliseconds 500
  }

  Write-Host "Cleaning related dev processes (run-dev / next) for this project..."
  $related = Stop-RelatedDevProcesses
  if ($related -gt 0) { $stopped = $true }
  Start-Sleep -Milliseconds 400

  if (Test-DevPortOpen) {
    Stop-ByPort
    Start-Sleep -Milliseconds 400
  }

  $freed = Wait-PortFree -TimeoutSec 25

  Write-Host "Stopping stray listeners on port 3011 (if any)..."
  Stop-ListenersOnPort 3011
  Start-Sleep -Milliseconds 400

  Remove-PidFile
  Write-ManageLog "Invoke-Stop: PID file removed; port open=$(Test-DevPortOpen); Wait-PortFree ok=$freed"

  if (Test-DevPortOpen) {
    Write-Warning "Port $Port may still be in use. Try: Get-NetTCPConnection -LocalPort $Port"
  }
  elseif ($stopped) {
    Write-Host "Frontend dev server stopped."
  }
  else {
    Write-Host "Frontend dev server was not running (port $Port is free)."
  }
}

function Invoke-Start {
  Write-ManageLog "Invoke-Start: begin (VerboseStartup=$VerboseStartup)"
  if (Test-DevPortOpen) {
    Write-ManageLog "Invoke-Start: aborted - port $Port already in use"
    Write-Warning "Port $Port is already in use. Run: .\manage-frontend.ps1 stop   or: .\manage-frontend.ps1 restart"
    return
  }

  $existing = Get-PidFromFile
  if ($null -ne $existing -and (Test-ProcessAlive $existing)) {
    Write-ManageLog "Invoke-Start: aborted - wrapper PID $existing still running"
    Write-Warning "PID file references a running process ($existing). Run stop first if the server is stuck."
    return
  }

  if (-not (Test-Path -LiteralPath (Join-Path $ProjectRoot "package.json"))) {
    Write-Error "package.json not found in $ProjectRoot"
  }

  if (-not (Test-Path -LiteralPath $RunDevScript)) {
    Write-Error "Missing $RunDevScript"
  }

  if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Error "npm not found in PATH. Install Node.js and try again."
  }

  Remove-PidFile
  $runDevResolved = (Resolve-Path -LiteralPath $RunDevScript).Path
  Write-ManageLog "Invoke-Start: launching child powershell -File $runDevResolved"

  $proc = Start-Process -FilePath "powershell.exe" -ArgumentList @(
    "-NoProfile",
    "-ExecutionPolicy", "Bypass",
    "-File", $runDevResolved
  ) -WorkingDirectory $ProjectRoot -WindowStyle Hidden -PassThru

  if (-not $proc) {
    Write-ManageLog "Invoke-Start: ERROR Start-Process returned null"
    Write-Error "Failed to start dev server process."
  }

  Save-Pid $proc.Id
  Write-ManageLog "Invoke-Start: wrapper PID $($proc.Id); polling 127.0.0.1:$Port every 1s (max 120s)"
  Write-Host "Started dev wrapper (PID $($proc.Id)). Waiting for port $Port..."

  $ready = $false
  for ($i = 0; $i -lt 120; $i++) {
    if (Test-DevPortOpen) {
      $ready = $true
      Write-ManageLog "Invoke-Start: port $Port open after ${i}s"
      break
    }
    if ($i -gt 0 -and ($i % 5 -eq 0)) {
      $open = Test-DevPortOpen
      Write-ManageLog "Invoke-Start: still waiting ... ${i}s elapsed, portOpen=$open, wrapperAlive=$(Test-ProcessAlive $proc.Id)"
      if ($VerboseStartup) {
        Write-Host "  ... still waiting for port $Port (${i}s, wrapper alive: $(Test-ProcessAlive $proc.Id))"
      }
    }
    Start-Sleep -Seconds 1
  }

  if ($ready) {
    Write-Host "Frontend is up: http://localhost:$Port"
    Write-Host "Logs: $(Join-Path $ProjectRoot 'logs\dev-server.log')"
  }
  else {
    Write-ManageLog "Invoke-Start: TIMEOUT port $Port after 120s; wrapperAlive=$(Test-ProcessAlive $proc.Id) - see [PHASE]/[OUT] lines in log"
    Write-Warning "Port $Port did not open in time. Check logs\dev-server.log and wrapper PID $($proc.Id)."
  }
}

function Invoke-Status {
  $pidFromFile = Get-PidFromFile
  $portOpen = Test-DevPortOpen
  $wrapperAlive = $false
  if ($null -ne $pidFromFile) {
    $wrapperAlive = Test-ProcessAlive $pidFromFile
  }

  Write-Host ('VerbaSense frontend (Next.js, port {0})' -f $Port)
  Write-Host "  Port listening:     $(if ($portOpen) { 'yes' } else { 'no' })"
  Write-Host "  Wrapper PID file:     $(if (Test-Path $PidFile) { (Get-Content $PidFile -Raw).Trim() } else { '(none)' })"
  Write-Host "  Wrapper running:    $(if ($wrapperAlive) { 'yes' } else { 'no' })"
  if ($portOpen) {
    Write-Host "  URL:                  http://localhost:$Port"
  }
}

switch ($DevCommand) {
  "start" { Invoke-Start }
  "stop" { Invoke-Stop }
  "restart" {
    Invoke-Stop
    Start-Sleep -Seconds 1
    if (Test-DevPortOpen) {
      Write-Host "Port $Port still busy after stop; running extra cleanup..."
      Write-ManageLog "restart: port still open after Invoke-Stop, second cleanup pass"
      Stop-ByPort
      Stop-RelatedDevProcesses
      $null = Wait-PortFree -TimeoutSec 15
      Start-Sleep -Seconds 1
    }
    if (Test-DevPortOpen) {
      Write-Warning "Port $Port is still in use. Start skipped. Stop other apps or run stop again."
      Write-ManageLog "restart: abort start - port $Port never freed"
    }
    else {
      Invoke-Start
    }
  }
  "status" { Invoke-Status }
}
