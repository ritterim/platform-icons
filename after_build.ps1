$gitHashPath = "./site/_git_hash/index.html"

New-Item $gitHashPath -Force
Set-Content $gitHashPath $env:APPVEYOR_REPO_COMMIT

$gitHashPath = "./site/_health/index.html"

New-Item $gitHashPath -Force
Set-Content $gitHashPath "Healthy"

Write-Host "Creating artifact"
Compress-Archive -Path "./site/*" -DestinationPath "icons.zip"
