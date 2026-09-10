#!/usr/bin/env bash
# Installs Code Reviewer Pro into a target project
# Usage: ./scripts/install.sh [target_dir] [antigravity|cursor|copilot|all]

set -e

TARGET_DIR="${1:-$(pwd)}"
TARGET_TYPE="${2:-antigravity}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_ROOT="$(dirname "$SCRIPT_DIR")"

echo "========================================="
echo "  Code Reviewer Pro Installer"
echo "========================================="
echo "Source: $SOURCE_ROOT"
echo "Target: $TARGET_DIR"
echo "Type:   $TARGET_TYPE"
echo ""

if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Target directory does not exist: $TARGET_DIR" >&2
  exit 1
fi

# Antigravity / Gemini CLI (.agents/skills/code-reviewer-pro)
if [ "$TARGET_TYPE" = "antigravity" ] || [ "$TARGET_TYPE" = "all" ]; then
  DEST="$TARGET_DIR/.agents/skills/code-reviewer-pro"
  mkdir -p "$DEST"
  cp "$SOURCE_ROOT/SKILL.md" "$DEST/"
  if [ -d "$SOURCE_ROOT/references" ]; then
    cp -r "$SOURCE_ROOT/references" "$DEST/"
  fi
  echo "[OK] Installed to Antigravity: $DEST"
fi

# Cursor (.cursorrules)
if [ "$TARGET_TYPE" = "cursor" ] || [ "$TARGET_TYPE" = "all" ]; then
  cp "$SOURCE_ROOT/adapters/cursor/.cursorrules" "$TARGET_DIR/.cursorrules"
  echo "[OK] Installed Cursor rules: $TARGET_DIR/.cursorrules"
fi

# GitHub Copilot (.github/copilot-instructions.md)
if [ "$TARGET_TYPE" = "copilot" ] || [ "$TARGET_TYPE" = "all" ]; then
  mkdir -p "$TARGET_DIR/.github"
  cp "$SOURCE_ROOT/adapters/copilot/copilot-instructions.md" "$TARGET_DIR/.github/copilot-instructions.md"
  echo "[OK] Installed Copilot instructions: $TARGET_DIR/.github/copilot-instructions.md"
fi

echo ""
echo "Installation complete! Any AI model can now use Code Reviewer Pro."
