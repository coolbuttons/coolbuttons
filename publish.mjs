#!/usr/bin/env node

/**
 * Cool Buttons - npm Publishing Helper Script
 * Automates the publishing process to npm
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PACKAGES = [
  'packages/react',
  'packages/vanilla'
];

function log(message, type = 'info') {
  const icons = {
    info: 'ℹ️ ',
    success: '✅ ',
    error: '❌ ',
    warning: '⚠️ ',
    step: '📦 '
  };
  console.log(`${icons[type] || ''} ${message}`);
}

function runCommand(command, cwd = __dirname) {
  try {
    execSync(command, { cwd, stdio: 'inherit' });
    return true;
  } catch (error) {
    log(`Command failed: ${command}`, 'error');
    return false;
  }
}

function checkNpmLogin() {
  try {
    execSync('npm whoami', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

function buildPackage(packagePath) {
  log(`Building ${packagePath}...`, 'step');
  const fullPath = path.join(__dirname, packagePath);
  
  if (!fs.existsSync(path.join(fullPath, 'package.json'))) {
    log(`No package.json found in ${packagePath}`, 'error');
    return false;
  }

  return runCommand('npm run build', fullPath);
}

function publishPackage(packagePath) {
  log(`Publishing ${packagePath}...`, 'step');
  const fullPath = path.join(__dirname, packagePath);
  
  return runCommand('npm publish --access public', fullPath);
}

function main() {
  console.log('\n');
  console.log('╔════════════════════════════════════════╗');
  console.log('║  Cool Buttons - npm Publishing Helper  ║');
  console.log('╚════════════════════════════════════════╝\n');

  // Check npm login
  log('Checking npm login...', 'step');
  if (!checkNpmLogin()) {
    log('You are not logged in to npm. Please run: npm login', 'error');
    process.exit(1);
  }
  log('npm login verified', 'success');

  // Build all packages
  console.log('\n--- Building Packages ---\n');
  let allBuilt = true;
  for (const pkg of PACKAGES) {
    if (!buildPackage(pkg)) {
      allBuilt = false;
    }
  }

  if (!allBuilt) {
    log('Build failed. Please fix errors and try again.', 'error');
    process.exit(1);
  }

  log('All packages built successfully', 'success');

  // Ask for confirmation
  console.log('\n--- Ready to Publish ---\n');
  log('The following packages will be published:', 'warning');
  PACKAGES.forEach(pkg => console.log(`  • ${pkg}`));
  console.log('');

  // Publish packages
  console.log('\n--- Publishing Packages ---\n');
  let allPublished = true;
  for (const pkg of PACKAGES) {
    if (!publishPackage(pkg)) {
      allPublished = false;
    }
  }

  console.log('\n');
  if (allPublished) {
    log('🎉 All packages published successfully!', 'success');
    console.log('\n📝 Next steps:');
    console.log('  1. Verify packages on npm: npm view @coolbuttons/react');
    console.log('  2. Test installation: npm install @coolbuttons/react');
    console.log('  3. Share with the community!\n');
  } else {
    log('Some packages failed to publish. Please check the errors above.', 'error');
    process.exit(1);
  }
}

main();
