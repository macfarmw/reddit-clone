$job = Start-Job {
    Set-Location $using:PSScriptRoot
    ng serve *>&1
}
Write-Output $job