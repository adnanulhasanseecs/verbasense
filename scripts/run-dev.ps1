# Called by manage-frontend.ps1 - npm run dev (Next.js + Turbopack, port 3010).
# Writes timestamped [PHASE]/[OUT] lines to logs/dev-server.log for startup diagnosis.
$ErrorActionPreference = "Continue"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

$LogDir = Join-Path $ProjectRoot "logs"
$LogFile = Join-Path $LogDir "dev-server.log"
New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
# Earliest possible trace (before any function) if the wrapper exits unexpectedly
try {
  $boot = Join-Path $LogDir "dev-boot.log"
  [System.IO.File]::AppendAllText($boot, "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss.fff') run-dev.ps1 entered PSScriptRoot=$PSScriptRoot`r`n")
}
catch { }

function Write-DevLog {
  param(
    [Parameter(Mandatory = $true)][string]$Phase,
    [Parameter(Mandatory = $true)][string]$Message
  )
  $ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss.fff"
  $line = "$ts [$Phase] $Message"
  Add-Content -LiteralPath $LogFile -Value $line -Encoding UTF8
}

Write-DevLog "PHASE" "======== run-dev.ps1 started ========"
Write-DevLog "PHASE" "PSScriptRoot: $PSScriptRoot"
Write-DevLog "PHASE" "ProjectRoot: $ProjectRoot"

try {
  Set-Location -LiteralPath $ProjectRoot
  Write-DevLog "PHASE" "Set-Location OK; Get-Location: $(Get-Location)"
}
catch {
  Write-DevLog "ERR" "Set-Location failed: $($_.Exception.Message)"
  throw
}

# Tooling versions (helps spot PATH / version issues before npm hangs)
try {
  $nodeCmd = Get-Command node -ErrorAction Stop
  Write-DevLog "PHASE" "node path: $($nodeCmd.Source)"
  $nv = & node -v 2>&1
  Write-DevLog "PHASE" "node -v: $nv"
}
catch {
  Write-DevLog "ERR" "node not found: $($_.Exception.Message)"
}

try {
  $npmv = & npm -v 2>&1
  Write-DevLog "PHASE" "npm -v: $npmv"
}
catch {
  Write-DevLog "ERR" "npm -v failed: $($_.Exception.Message)"
}

if (-not (Test-Path -LiteralPath (Join-Path $ProjectRoot "package.json"))) {
  Write-DevLog "ERR" "package.json missing under ProjectRoot"
  exit 1
}

if (-not (Test-Path -LiteralPath (Join-Path $ProjectRoot "node_modules"))) {
  Write-DevLog "WARN" "node_modules not found - npm run dev may fail until you run npm install"
}

# Verbose npm logging; Next still prints its own lines to stdout/stderr
$env:NPM_CONFIG_LOGLEVEL = "verbose"
Write-DevLog "PHASE" "NPM_CONFIG_LOGLEVEL=verbose"
Write-DevLog "PHASE" "Invoking: npm run dev (see package.json dev script)"

# Use npm.cmd explicitly; some hosts parse `& npm run dev` as `npm pm run dev`.
$npmCmd = (Get-Command npm.cmd -CommandType Application -ErrorAction SilentlyContinue).Source
if (-not $npmCmd) {
  $npmCmd = (Get-Command npm -CommandType Application -ErrorAction Stop).Source
}
Write-DevLog "PHASE" "npm executable: $npmCmd"

$sw = [System.Diagnostics.Stopwatch]::StartNew()
try {
  & $npmCmd run dev 2>&1 | ForEach-Object {
    $elapsed = [math]::Round($sw.Elapsed.TotalSeconds, 2)
    $text = if ($null -eq $_) { "" } else { $_.ToString() }
    Write-DevLog "OUT" "t+${elapsed}s $text"
    Write-Host $text
  }
}
finally {
  $sw.Stop()
  Write-DevLog "PHASE" "npm run dev process ended after $([math]::Round($sw.Elapsed.TotalSeconds, 2))s (exit from pipe)"
}
