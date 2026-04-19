# SSOT Usage Examples

## Real-World Scenarios

### Scenario 1: You Get a New Job

**Before SSOT:**
```
1. Update resume PDF file ❌
2. Update portfolio website ❌
3. Update LinkedIn profile ❌
4. Update email signature ❌
5. Miss updating something ❌
6. Inconsistent information ❌
```

**After SSOT:**
```
1. Edit public/resume-data.json
   - Change "role": "Senior .NET Developer @ New Company"
   - Change "period": "Jan'24 - Present"
   
2. Save file

3. Portfolio updates automatically ✅
   (if npm run dev is running)

4. Generate PDF: npm run generate-pdf ✅

5. Everything in sync! ✅
```

---

### Scenario 2: You Earn a New Certification

**JSON Edit:**
```json
{
  "certifications": [
    // ... existing certs ...
    {
      "title": "Microsoft Certified: DevOps Engineer Expert",
      "code": "AZ-400",
      "date": "2024"
    }
  ]
}
```

**Result:**
- Portfolio shows new certification immediately
- PDF includes it (next generation)
- Single source verified

---

### Scenario 3: You Complete a Major Project

**JSON Edit:**
```json
{
  "projects": [
    {
      "name": "Real-Time Analytics Dashboard",
      "description": "Enterprise analytics platform with live data streaming",
      "tech": [".NET 8", "Angular", "SignalR", "Azure"],
      "highlights": [
        "Built real-time dashboards serving 1000+ concurrent users",
        "Implemented WebSocket communication using SignalR",
        "Optimized database queries reducing latency by 80%",
        "Deployed on Azure with CI/CD automation"
      ],
      "link": "https://analytics-demo.azurewebsites.net",
      "github": "https://github.com/username/analytics-dashboard"
    }
  ]
}
```

**Result:**
- New project appears on portfolio instantly
- Shows in PDF next generation
- All with one edit

---

### Scenario 4: Portfolio Refresh

**Timeline:**
```
Monday:
  - Update all experience entries
  - Add new skills
  - Update summary
  - Edit resume-data.json
  ✅ Portfolio auto-updates

Tuesday:
  - Review portfolio on dev server
  - npm run dev (check everything)
  
Wednesday:
  - npm run generate-pdf (create new PDF)
  - npm run deploy (go live)
  ✅ Fresh portfolio live!
```

---

### Scenario 5: Job Application Workflow

```
Application Found:
  ↓
1. Update resume-data.json with latest info
   (in case you made recent changes elsewhere)
   
2. npm run dev
   (verify portfolio looks current)
   
3. npm run generate-pdf
   (create fresh PDF for this application)
   
4. Open PDF
   (verify everything looks good)
   
5. Download PDF
   (save locally as "Mahesh_Kumar_Singh_Resume.pdf")
   
6. Apply for job
   - Attach PDF
   - Include portfolio link
   ✅ Consistent information across both!
```

---

## Code Examples

### Adding Experience Entry

**Before (Old Way):**
```
Edit resume.pdf → Edit HTML component → Update constants.ts
                                     ↓
                          Difficult to keep in sync
```

**After (SSOT):**
```json
// public/resume-data.json
{
  "experience": [
    // ... previous jobs ...
    {
      "company": "Acme Corporation",
      "role": "Lead Software Architect",
      "period": "Aug'23 - Present",
      "startDate": "2023-08",
      "location": "San Francisco, CA",
      "highlights": [
        "Led architecture redesign cutting deployment time by 50%",
        "Mentored team of 8 engineers on microservices patterns",
        "Implemented CI/CD pipeline using GitHub Actions",
        "Achieved 99.99% uptime SLA for critical systems"
      ]
    }
  ]
}
```

Immediate result:
- Portfolio updates automatically
- PDF generated with this data
- No manual synchronization needed!

---

### Updating Multiple Skills

**JSON:**
```json
{
  "skills": [
    { "name": ".NET 8", "category": "Backend" },
    { "name": "Angular 18", "category": "Frontend" },
    { "name": "Kubernetes", "category": "DevOps" },
    { "name": "Azure", "category": "Cloud" },
    // ... more skills ...
  ]
}
```

**Automatic Result:**
- Skills displayed on portfolio
- Included in PDF
- Categorized correctly
- Single source of truth

---

### Managing Projects

**JSON Structure:**
```json
{
  "projects": [
    {
      "name": "IoT Irrigation Management",
      "description": "Complete IoT platform for smart irrigation",
      "tech": ["IoT Hub", ".NET 8", "Angular", "Azure"],
      "highlights": [
        "Connected 10K+ IoT devices in real-time",
        "Built telemetry processing pipeline with 99.99% uptime",
        "Implemented predictive analytics for water usage",
        "Reduced water waste by 40% for farmers"
      ],
      "link": "https://irrigation-demo.com",
      "github": "https://github.com/user/irrigation-iot"
    }
  ]
}
```

**Shows On:**
- Portfolio website (with links, descriptions, tech stack)
- Resume PDF (formatted professionally)
- Both perfectly in sync

---

## Daily Workflow Examples

### Morning: Check Portfolio
```bash
npm run dev
# Opens http://localhost:3000
# Review your portfolio
```

### Afternoon: Update Your Data
```bash
# Edit your resume data
code public/resume-data.json

# Update something:
# - Change job status
# - Add skill
# - Update accomplishment
# - Fix typo

# Save file
# Portfolio updates instantly!
```

### Before Job Interview
```bash
# Ensure PDF is current
npm run generate-pdf

# Email yourself the PDF
# Link portfolio in email signature

# Both from same source = guaranteed consistency!
```

---

## Integration Examples

### With LinkedIn
```
LinkedIn Profile
    ↓
    Uses data from: public/resume-data.json
    
    My approach:
    1. Keep JSON current
    2. Reference portfolio link on LinkedIn
    3. Both show consistent information
```

### With Email Signature
```
Email Signature
    ↓
    Portfolio link: https://mahesh-kumar-singh.com
    Download PDF: /Mahesh-Kumar-Singh-Resume.pdf
    
    Both generated from: public/resume-data.json
```

### With GitHub Profile
```
GitHub Profile
    ↓
    Bio: "Senior .NET Developer @ The Toro Company"
    (matches resume-data.json exactly)
    
    Portfolio link in bio → Same data!
```

---

## Version Control Examples

### Good Git Commits
```bash
# Update resume data
git add public/resume-data.json
git commit -m "Update: Added Azure Kubernetes cert, updated role"

# Generate PDF
git add public/Mahesh-Kumar-Singh-Resume.pdf
git commit -m "Generate: New resume PDF from latest data"

# Deploy
git commit -m "Deploy: Q2 2024 portfolio update"
```

### See History
```bash
git log public/resume-data.json
# View all changes to your resume data

git diff
# See what changed before committing
```

---

## Batch Update Example

**Scenario: Quarterly Portfolio Refresh**

```bash
# 1. Start dev server
npm run dev

# 2. Review current data
# Open http://localhost:3000
# Check what needs updating

# 3. Edit multiple sections
#    Edit public/resume-data.json:
#    - Update job descriptions (better language)
#    - Add new accomplishments
#    - Update skill proficiencies
#    - Remove outdated items
#    - Add new education/certs

# 4. Save file
# Portfolio auto-updates

# 5. Review in browser
# Check portfolio looks good
# Try all links

# 6. Generate PDF
npm run generate-pdf

# 7. Review PDF
# Open public/Mahesh-Kumar-Singh-Resume.pdf
# Verify formatting, dates, content

# 8. Commit changes
git add .
git commit -m "Q2 2024: Portfolio refresh - updated skills, experience, projects"

# 9. Deploy
npm run deploy

# 10. Announce update
# Share on LinkedIn, email, etc.
```

---

## Troubleshooting Examples

### "Portfolio shows old data"
```bash
# Check if dev server is running
# If not: npm run dev

# Refresh browser
Ctrl+Shift+R

# Check JSON file was saved
cat public/resume-data.json | head -20

# If still showing old data, restart server
# Ctrl+C to stop
# npm run dev to restart
```

### "PDF is missing new information"
```bash
# Regenerate PDF
npm run generate-pdf

# Verify JSON has the data
grep "new_info" public/resume-data.json

# Check PDF was created
ls -la public/*.pdf

# Open PDF to verify changes
```

### "JSON syntax error"
```bash
# Check JSON validity
npm run lint

# Errors? Look for:
# - Missing commas between entries
# - Unmatched quotes
# - Trailing commas in arrays
# - Missing colons

# Online JSON validator:
# https://jsonlint.com/
# Paste your JSON and check
```

---

## Advanced Usage

### Templating for Multiple Versions

```bash
# Keep multiple resume versions:

cp public/resume-data.json public/resume-data.backup.json
cp public/resume-data.json public/resume-data-tech.json
cp public/resume-data.json public/resume-data-management.json

# Edit each for different roles
# Generate PDFs:
# npm run generate-pdf # Main version
# (Update script to support alternate versions)
```

### Automation Ideas

```bash
# Auto-generate PDF before deploying
"deploy": "npm run generate-pdf && npm run build && git push origin gh-pages"

# Type-check before committing
# (use git hooks)

# Auto-upload to cloud storage
# (after PDF generation)
```

---

## Real Workflow Timeline

```
January 2024:
  ✅ SSOT system implemented
  
Monthly:
  ✅ Update resume-data.json with new accomplishments
  ✅ npm run dev to verify
  ✅ npm run generate-pdf (monthly refresh)
  
Before Job Applications:
  ✅ Ensure JSON is current
  ✅ Generate fresh PDF
  ✅ Apply with portfolio link + PDF
  ✅ Both guaranteed in sync!
  
Quarterly:
  ✅ Full portfolio review
  ✅ Update sections
  ✅ Refresh PDF
  ✅ npm run deploy (go live)
  
Yearly:
  ✅ Major refresh
  ✅ Update all sections
  ✅ Archive old version
  ✅ Deploy updated portfolio
```

---

## Key Takeaway

```
One JSON file.
Portfolio auto-syncs.
PDF auto-generates.
Everything in sync.
One source of truth.

Just edit: public/resume-data.json
Rest happens automatically! ✅
```

---

Happy updating! 🚀
