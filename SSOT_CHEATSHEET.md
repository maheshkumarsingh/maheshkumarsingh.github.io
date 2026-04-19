# SSOT Quick Reference Cheat Sheet

## 🎯 The Golden Rule
**Edit `public/resume-data.json` → Everything updates automatically**

## 📋 Quick Commands

```bash
# Preview changes (auto-reload)
npm run dev

# Generate PDF from JSON
npm run generate-pdf

# Build for production
npm run build

# Type checking
npm run lint
```

## 🔄 Update Workflow

### Step 1: Open Data File
```
/public/resume-data.json
```

### Step 2: Make Changes
Update any field (name, skills, experience, etc.)

### Step 3: See Live Changes
- Portfolio auto-updates on `npm run dev`
- No page refresh needed

### Step 4: Generate PDF
```bash
npm run generate-pdf
```

## 📝 Common Updates

### Add a Skill
```json
{
  "name": "React",
  "category": "Frontend"
}
```

### Add Experience
```json
{
  "company": "Company Name",
  "role": "Job Title",
  "period": "Jan'24 - Present",
  "startDate": "2024-01",
  "location": "City, Country",
  "highlights": [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

### Add Certification
```json
{
  "title": "Certification Name",
  "code": "CERT-123",
  "date": "2024"
}
```

### Add Project
```json
{
  "name": "Project Name",
  "description": "Brief description",
  "tech": ["Tech1", "Tech2"],
  "highlights": ["Highlight 1", "Highlight 2"],
  "link": "https://...",
  "github": "https://github.com/..."
}
```

## 🚀 Deployment Flow

```
1. Edit resume-data.json
   ↓
2. npm run generate-pdf (creates PDF)
   ↓
3. npm run build (builds portfolio)
   ↓
4. npm run deploy (pushes to GitHub Pages)
```

## 📊 Data Structure at a Glance

```
resume-data.json
├── name, title, role, location
├── contact (email, phone, linkedin, github, etc.)
├── summary (array of 8 bullet points)
├── skills (array of {name, category})
├── certifications (array of {title, code, date})
├── awards (array of {title, description, date})
├── experience (array of jobs)
├── projects (array of projects)
├── education (array of degrees)
└── socialLinks (array of social profiles)
```

## ✅ Validation Checklist

Before deploying:
- [ ] JSON is valid (no trailing commas, proper quotes)
- [ ] All URLs are correct (LinkedIn, GitHub, portfolio)
- [ ] All dates are consistent format
- [ ] Contact email is current
- [ ] Skills are up to date
- [ ] Experience descriptions are accurate
- [ ] PDF looks good (`npm run generate-pdf`)

## 🐛 Troubleshooting

**Portfolio not updating?**
- Check JSON syntax (use online JSON validator)
- Restart dev server (`npm run dev`)
- Clear browser cache (Ctrl+Shift+R)

**PDF not generating?**
- Ensure puppeteer is installed: `npm install`
- Check JSON file exists at `/public/resume-data.json`
- Check for error messages in terminal

**Type errors in IDE?**
- Run `npm run lint` to see all issues
- Check `src/types.ts` for expected structure

## 🎨 Customize PDF Style

Edit `scripts/generate-pdf.ts` - look for the `<style>` section:
- Change colors (currently `#0066cc`)
- Adjust font sizes
- Modify spacing/margins
- Update layout

## 📱 Responsive Design

- Portfolio auto-adjusts to mobile/tablet
- PDF is always A4 size
- All links clickable in PDF

## 🔐 Security Notes

- Keep personal phone/address info updated
- Verify all links work before deployment
- Don't commit sensitive credentials to git

---

**Pro Tip**: Keep a backup of `resume-data.json` before major updates! 💾
