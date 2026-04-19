#!/usr/bin/env node

/**
 * SSOT (Single Source of Truth) Verification Script
 * Run this to verify everything is set up correctly
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const checks = [
  {
    name: 'Resume Data JSON exists',
    check: () => fs.existsSync(path.join(__dirname, 'public', 'resume-data.json')),
    path: 'public/resume-data.json'
  },
  {
    name: 'Types file exists',
    check: () => fs.existsSync(path.join(__dirname, 'src', 'types.ts')),
    path: 'src/types.ts'
  },
  {
    name: 'React hook exists',
    check: () => fs.existsSync(path.join(__dirname, 'src', 'hooks', 'useResumeData.ts')),
    path: 'src/hooks/useResumeData.ts'
  },
  {
    name: 'PDF generation script exists',
    check: () => fs.existsSync(path.join(__dirname, 'scripts', 'generate-pdf.ts')),
    path: 'scripts/generate-pdf.ts'
  },
  {
    name: 'SSOT Guide exists',
    check: () => fs.existsSync(path.join(__dirname, 'SSOT_GUIDE.md')),
    path: 'SSOT_GUIDE.md'
  },
  {
    name: 'JSON is valid',
    check: () => {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'resume-data.json'), 'utf-8'));
        return data.name && data.contact && data.skills;
      } catch {
        return false;
      }
    },
    path: 'public/resume-data.json'
  }
];

console.log('\n🔍 SSOT System Verification\n');
console.log('═'.repeat(50));

let passed = 0;
let failed = 0;

checks.forEach(check => {
  const result = check.check();
  const status = result ? '✅' : '❌';
  const file = ` (${check.path})`;
  
  console.log(`${status} ${check.name}${file}`);
  
  if (result) passed++;
  else failed++;
});

console.log('═'.repeat(50));
console.log(`\n✅ Passed: ${passed}/${checks.length}`);
if (failed > 0) {
  console.log(`❌ Failed: ${failed}/${checks.length}`);
  console.log('\n⚠️  Some components are missing. Please run:');
  console.log('   npm install');
}

console.log('\n📋 Next Steps:');
console.log('1. npm install (install dependencies)');
console.log('2. npm run dev (start development server)');
console.log('3. Edit public/resume-data.json to make changes');
console.log('4. npm run generate-pdf (when ready to create PDF)\n');

process.exit(failed > 0 ? 1 : 0);
