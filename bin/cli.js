#!/usr/bin/env node

/**
 * Agential Skill CLI (by Talha Irfan / codedits)
 * Zero-dependency interactive installer and preset manager for any AI agent.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT_DIR = path.resolve(__dirname, '..');
const PKG = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf-8'));

// ANSI colors
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
};

function printBanner() {
  console.log(`
${c.cyan}${c.bold}====================================================${c.reset}
${c.bold}  ⚡ Agential Skill CLI (v${PKG.version})${c.reset}
${c.dim}  Author: Talha Irfan (@codedits)${c.reset}
${c.dim}  User-First, Low-CPU AI Agent Development Skill${c.reset}
${c.cyan}${c.bold}====================================================${c.reset}
`);
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function installSkill(targetDir, targets) {
  console.log(`\n${c.bold}Installing into:${c.reset} ${c.dim}${targetDir}${c.reset}\n`);

  const results = [];

  // 1. Antigravity (.agents/skills/agential-skill)
  if (targets.includes('all') || targets.includes('antigravity')) {
    const dest = path.join(targetDir, '.agents', 'skills', 'agential-skill');
    fs.mkdirSync(dest, { recursive: true });
    fs.copyFileSync(path.join(ROOT_DIR, 'SKILL.md'), path.join(dest, 'SKILL.md'));
    if (fs.existsSync(path.join(ROOT_DIR, 'references'))) {
      copyRecursiveSync(path.join(ROOT_DIR, 'references'), path.join(dest, 'references'));
    }
    results.push(`Google Antigravity -> ${path.relative(targetDir, dest)}`);
  }

  // 2. Cursor (.cursorrules & .cursor/rules/)
  if (targets.includes('all') || targets.includes('cursor')) {
    const destFile = path.join(targetDir, '.cursorrules');
    fs.copyFileSync(path.join(ROOT_DIR, 'adapters', 'cursor', '.cursorrules'), destFile);
    
    // Also support new Cursor .cursor/rules/ format
    const cursorRulesDir = path.join(targetDir, '.cursor', 'rules');
    fs.mkdirSync(cursorRulesDir, { recursive: true });
    fs.copyFileSync(
      path.join(ROOT_DIR, 'adapters', 'cursor', '.cursorrules'),
      path.join(cursorRulesDir, 'agential-skill.mdc')
    );
    results.push(`Cursor IDE         -> .cursorrules & .cursor/rules/agential-skill.mdc`);
  }

  // 3. GitHub Copilot (.github/copilot-instructions.md)
  if (targets.includes('all') || targets.includes('copilot')) {
    const dest = path.join(targetDir, '.github', 'copilot-instructions.md');
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(path.join(ROOT_DIR, 'adapters', 'copilot', 'copilot-instructions.md'), dest);
    results.push(`GitHub Copilot     -> .github/copilot-instructions.md`);
  }

  // 4. Claude Code (CLAUDE.md)
  if (targets.includes('all') || targets.includes('claude')) {
    const dest = path.join(targetDir, 'CLAUDE.md');
    fs.copyFileSync(path.join(ROOT_DIR, 'adapters', 'claude', 'CLAUDE.md'), dest);
    results.push(`Claude Code        -> CLAUDE.md`);
  }

  results.forEach((msg) => console.log(`  ${c.green}✔${c.reset} ${msg}`));
  console.log(`\n${c.green}${c.bold}✨ Agential Skill successfully installed!${c.reset}`);
  console.log(`${c.dim}Any connected AI model will now ask simple questions, write low-CPU code, and review every edit.${c.reset}\n`);
}

function promptInteractive() {
  printBanner();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(`${c.bold}Choose your AI platform / editor:${c.reset}`);
  console.log(`  [1] ${c.green}${c.bold}All Platforms${c.reset} (Antigravity + Cursor + Copilot + Claude) - ${c.dim}(Recommended)${c.reset}`);
  console.log(`  [2] Cursor IDE (.cursorrules & .cursor/rules)`);
  console.log(`  [3] Google Antigravity (.agents/skills/agential-skill)`);
  console.log(`  [4] GitHub Copilot (.github/copilot-instructions.md)`);
  console.log(`  [5] Claude Code (CLAUDE.md)`);
  console.log(`  [6] Export Standalone Prompt for ChatGPT / Web LLMs\n`);

  rl.question(`${c.cyan}Enter choice [1-6] (default: 1): ${c.reset}`, (answer) => {
    const choice = answer.trim() || '1';

    if (choice === '6') {
      rl.close();
      const promptFile = path.join(ROOT_DIR, 'adapters', 'system-prompt', 'prompt.md');
      console.log(`\n${c.green}Standalone prompt location:${c.reset} ${promptFile}`);
      console.log(`${c.dim}Copy the content of this file and paste it into ChatGPT or Claude Custom Instructions.${c.reset}\n`);
      return;
    }

    const mapping = {
      '1': ['all'],
      '2': ['cursor'],
      '3': ['antigravity'],
      '4': ['copilot'],
      '5': ['claude'],
    };

    const selected = mapping[choice] || ['all'];

    rl.question(`\n${c.cyan}Target directory path (default: current directory): ${c.reset}`, (dirAnswer) => {
      rl.close();
      const targetDir = dirAnswer.trim() ? path.resolve(dirAnswer.trim()) : process.cwd();
      installSkill(targetDir, selected);
    });
  });
}

function addPreset(presetName, targetDir) {
  printBanner();
  const presetFile = path.join(ROOT_DIR, 'presets', `${presetName}.md`);
  if (!fs.existsSync(presetFile)) {
    console.error(`${c.yellow}Preset "${presetName}" not found.${c.reset}`);
    console.log(`Available presets:`);
    if (fs.existsSync(path.join(ROOT_DIR, 'presets'))) {
      fs.readdirSync(path.join(ROOT_DIR, 'presets')).forEach((f) => {
        if (f.endsWith('.md')) console.log(`  - ${f.replace('.md', '')}`);
      });
    }
    process.exit(1);
  }

  const destDir = path.join(targetDir, '.agents', 'skills', 'agential-skill', 'references');
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(presetFile, path.join(destDir, `${presetName}.md`));
  console.log(`${c.green}✔${c.reset} Added preset ${c.bold}${presetName}${c.reset} to ${destDir}`);
}

// CLI Routing
const args = process.argv.slice(2);
const command = args[0] || 'init';

if (command === 'init') {
  promptInteractive();
} else if (command === 'add') {
  const preset = args[1];
  if (!preset) {
    console.error('Usage: agential-skill add <preset-name>');
    process.exit(1);
  }
  addPreset(preset, process.cwd());
} else if (command === '--help' || command === '-h' || command === 'help') {
  printBanner();
  console.log(`Usage:
  npx agential-skill init             Interactive setup for your workspace
  npx agential-skill add <preset>     Add a specialized framework preset (e.g. react-nextjs, vue-nuxt)
  npx agential-skill --help           Display help message
`);
} else {
  promptInteractive();
}
