<#
.SYNOPSIS
    Installs Agential Skill (by Talha Irfan / codedits) into a target repository or global AI agent directory.
.PARAMETER TargetDir
    The root path of the project to install the skill into. Defaults to the current directory.
.PARAMETER TargetType
    The agent platform: "antigravity" (default), "cursor", "copilot", or "all".
.EXAMPLE
    .\scripts\install.ps1 -TargetDir "C:\path\to\my-project" -TargetType "antigravity"
#>
param(
    [string]$TargetDir = (Get-Location).Path,
    [ValidateSet("antigravity", "cursor", "copilot", "all")]
    [string]$TargetType = "antigravity"
)

$SourceRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  Agential Skill Installer (codedits)" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "Source: $SourceRoot"
Write-Host "Target: $TargetDir"
Write-Host "Type:   $TargetType"
Write-Host ""

if (-not (Test-Path $TargetDir)) {
    New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null
    Write-Host "[INFO] Created target directory: $TargetDir" -ForegroundColor Yellow
}

# 1. Antigravity / Gemini CLI (.agents/skills/agential-skill)
if ($TargetType -eq "antigravity" -or $TargetType -eq "all") {
    $DestSkillDir = Join-Path $TargetDir ".agents\skills\agential-skill"
    New-Item -ItemType Directory -Force -Path $DestSkillDir | Out-Null
    Copy-Item (Join-Path $SourceRoot "SKILL.md") -Destination $DestSkillDir -Force
    if (Test-Path (Join-Path $SourceRoot "references")) {
        Copy-Item (Join-Path $SourceRoot "references") -Destination $DestSkillDir -Recurse -Force
    }
    Write-Host "[OK] Installed to Antigravity: $DestSkillDir" -ForegroundColor Green
}

# 2. Cursor (.cursorrules)
if ($TargetType -eq "cursor" -or $TargetType -eq "all") {
    $DestCursor = Join-Path $TargetDir ".cursorrules"
    Copy-Item (Join-Path $SourceRoot "adapters\cursor\.cursorrules") -Destination $DestCursor -Force
    Write-Host "[OK] Installed Cursor rules: $DestCursor" -ForegroundColor Green
}

# 3. GitHub Copilot (.github/copilot-instructions.md)
if ($TargetType -eq "copilot" -or $TargetType -eq "all") {
    $DestGithub = Join-Path $TargetDir ".github"
    New-Item -ItemType Directory -Force -Path $DestGithub | Out-Null
    Copy-Item (Join-Path $SourceRoot "adapters\copilot\copilot-instructions.md") -Destination (Join-Path $DestGithub "copilot-instructions.md") -Force
    Write-Host "[OK] Installed Copilot instructions: $(Join-Path $DestGithub 'copilot-instructions.md')" -ForegroundColor Green
}

Write-Host ""
Write-Host "Installation complete! Any compatible AI model can now use Agential Skill." -ForegroundColor Cyan
