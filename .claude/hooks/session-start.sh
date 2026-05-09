#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Install Node dependencies if package.json exists
if [ -f "$CLAUDE_PROJECT_DIR/package.json" ]; then
  echo "Installing Node.js dependencies..."
  cd "$CLAUDE_PROJECT_DIR"
  npm install
fi

# Install Python dependencies if requirements.txt or pyproject.toml exists
if [ -f "$CLAUDE_PROJECT_DIR/requirements.txt" ]; then
  echo "Installing Python dependencies..."
  pip install -r "$CLAUDE_PROJECT_DIR/requirements.txt"
elif [ -f "$CLAUDE_PROJECT_DIR/pyproject.toml" ]; then
  echo "Installing Python dependencies (pyproject.toml)..."
  pip install -e "$CLAUDE_PROJECT_DIR"
fi

echo "Session start hook completed."
