$path = Join-Path (Split-Path -Parent $PSScriptRoot) "manage-frontend.ps1"
$errs = $null
$null = [System.Management.Automation.Language.Parser]::ParseFile($path, [ref]$null, [ref]$errs)
if ($errs.Count -gt 0) {
  $errs | ForEach-Object { Write-Output $_.Message }
  exit 1
}
Write-Output "OK"
