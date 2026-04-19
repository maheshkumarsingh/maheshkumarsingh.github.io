# Deployment Guide - SSOT Workflow

## Pre-Deployment Checklist

```bash
# 1. Update your resume data
#    Edit: public/resume-data.json
✓ All information current
✓ Skills up-to-date
✓ Latest experience added
✓ Contact info correct

# 2. Verify JSON is valid
npm run lint

# 3. Preview locally
npm run dev
#    Check portfolio looks good

# 4. Generate updated PDF
npm run generate-pdf
#    Verify PDF looks good
#    Open: public/Mahesh-Kumar-Singh-Resume.pdf

# 5. Build for production
npm run build
#    Creates optimized dist/ folder

# 6. Deploy
npm run deploy
#    Pushes to GitHub Pages
```

---

## Step-by-Step Deployment

### Step 1: Update Data
```bash
# Edit your resume data
code public/resume-data.json

# Make changes:
# - Update job title
# - Add new skills
# - Update contact info
# - Add new projects
# etc.

# Save the file
```

### Step 2: Run Type Check
```bash
npm run lint
# ✅ Should show: "Found 0 errors"
```

### Step 3: Test Locally
```bash
# Start dev server
npm run dev

# Open browser: http://localhost:3000
# Check:
# ✅ Portfolio loads correctly
# ✅ Your changes are visible
# ✅ All links work
# ✅ Layout looks good

# Press Ctrl+C to stop
```

### Step 4: Generate PDF
```bash
npm run generate-pdf

# Check output:
# ✅ public/Mahesh-Kumar-Singh-Resume.pdf created
# ✅ Open PDF and verify it looks good
# ✅ All data is current
# ✅ PDF is properly formatted
```

### Step 5: Build Production Version
```bash
npm run build

# Check output:
# ✅ dist/ folder created
# ✅ dist/ contains optimized files
# ✅ HTML, JS, CSS files are minified
```

### Step 6: Deploy to GitHub Pages
```bash
npm run deploy

# Process:
# 1. Builds if needed
# 2. Creates dist commit
# 3. Pushes to gh-pages branch
# 4. Your portfolio goes live!

# Verify:
# ✅ Check GitHub Pages URL
# ✅ Portfolio loads
# ✅ All changes visible
# ✅ PDF link works
```

---

## Automated Deployment Flow

```
┌─ Resume Data Changed ─┐
│  (resume-data.json)   │
└──────────┬────────────┘
           │
           ▼
┌──────────────────────┐
│  npm run generate-pdf │ ← Creates/updates PDF
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  npm run build        │ ← Builds optimized site
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  npm run deploy       │ ← Uploads to GitHub Pages
└──────────┬───────────┘
           │
           ▼
┌──────────────────────────┐
│  ✅ Live & Updated!      │
│  https://your-domain.com │
└──────────────────────────┘
```

---

## Deployment Scenarios

### Scenario 1: Updated Your Resume (Most Common)

```bash
# 1. Make changes to resume-data.json
nano public/resume-data.json

# 2. Generate new PDF
npm run generate-pdf

# 3. Deploy
npm run deploy

# Done! ✅
```

### Scenario 2: Minor Content Updates

```bash
# 1. Edit resume-data.json

# 2. Deploy (no PDF needed if just text)
npm run deploy

# Done! ✅
```

### Scenario 3: Major Redesign + Content Update

```bash
# 1. Update resume-data.json

# 2. Make component changes (if any)
# Edit src/App.tsx or other components

# 3. Full deployment
npm run lint
npm run dev       # Test locally first
npm run generate-pdf
npm run deploy

# Done! ✅
```

---

## Troubleshooting Deployment

### PDF Not Generated?
```bash
# Check if Puppeteer is installed
npm list puppeteer

# If not, install it
npm install

# Try generating again
npm run generate-pdf
```

### Build Failed?
```bash
# Check for errors
npm run lint

# Clean and rebuild
npm run clean
npm run build
```

### Deploy Failed?
```bash
# Ensure git is configured
git config --list

# Check remote
git remote -v

# Try manual deploy
git push origin gh-pages

# Or use the npm script
npm run deploy
```

### Changes Not Showing Live?
```bash
# 1. Hard refresh browser
Ctrl+Shift+R (or Cmd+Shift+R on Mac)

# 2. Clear browser cache
# Chrome: Settings → Privacy → Clear browsing data

# 3. Wait a moment (GitHub Pages takes ~1 min to update)

# 4. Check GitHub Pages settings
# Settings → Pages → Check source branch
```

---

## File Versioning

### Keep Backups

```bash
# Before major updates, backup your data
cp public/resume-data.json public/resume-data.backup.json

# Or use git (recommended)
git add public/resume-data.json
git commit -m "Update resume data - $(date)"
```

### Version Control Best Practices

```bash
# Good commit messages
git add .
git commit -m "Update resume: added new Azure cert"
git commit -m "Fix typo in experience section"
git commit -m "Generate new PDF - Q2 2024"

# Less helpful
git add .
git commit -m "update"
git commit -m "changes"
```

---

## Sharing Your Portfolio & Resume

### Portfolio URL
```
https://maheshkumarsingh.github.io/
(or your custom domain)
```

### Resume PDF
```
Direct link: /Mahesh-Kumar-Singh-Resume.pdf
Or: https://maheshkumarsingh.github.io/Mahesh-Kumar-Singh-Resume.pdf
```

### LinkedIn
```
Link portfolio in LinkedIn profile:
Profile → Edit public profile → Website section
→ Add portfolio URL
```

### Email
```
When applying for jobs:
1. Include portfolio link
2. Attach latest PDF
3. Both from same source (resume-data.json)
   → No inconsistencies! ✅
```

---

## Production Optimization

Your build system automatically:
- ✅ Minifies JavaScript
- ✅ Optimizes CSS
- ✅ Compresses images
- ✅ Generates source maps for debugging
- ✅ Tree-shakes unused code

No extra configuration needed!

---

## Environment Variables (If Needed)

If you add any API keys or secrets:

```bash
# Create .env.local (not committed to git)
echo "API_KEY=your_key_here" > .env.local

# In your code
const apiKey = import.meta.env.VITE_API_KEY;

# Add to .gitignore
echo ".env.local" >> .gitignore
```

---

## Continuous Deployment (Optional Advanced)

You can automate deployment with GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run generate-pdf
      - run: npm run build
      - run: npm run deploy
```

This would auto-deploy when you push to main branch!

---

## Quick Reference

```bash
# 🔍 Verify setup
node verify-ssot.mjs

# ✏️ Local development
npm run dev

# 🔤 Type checking
npm run lint

# 📄 Generate PDF
npm run generate-pdf

# 🏗️ Build production
npm run build

# 🚀 Deploy
npm run deploy

# 🧹 Clean build
npm run clean

# 👀 Preview production
npm run preview
```

---

## Support & Documentation

- **Setup**: See `SSOT_IMPLEMENTATION.md`
- **Quick Reference**: See `SSOT_CHEATSHEET.md`
- **Full Guide**: See `SSOT_GUIDE.md`
- **Visual Overview**: See `SSOT_VISUAL_OVERVIEW.md`
- **This File**: `DEPLOYMENT_GUIDE_SSOT.md`

---

## Checklist Before Deployment

```
Data Update:
□ resume-data.json updated
□ All information accurate
□ Contact details current

Testing:
□ npm run lint passed
□ npm run dev shows correct changes
□ Portfolio looks good

PDF:
□ npm run generate-pdf succeeded
□ PDF looks good

Build & Deploy:
□ npm run build succeeded
□ npm run deploy succeeded
□ Portfolio live at your URL

Post-Deploy:
□ Hard refresh in browser (Ctrl+Shift+R)
□ Verify all changes visible
□ Test all links
□ Check PDF download works
```

---

**Ready to Deploy!** 🚀

Just follow the steps above and your portfolio will be live with all your latest information!
