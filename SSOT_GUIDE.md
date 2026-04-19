# Single Source of Truth (SSOT) Documentation

## Overview

This project now implements a Single Source of Truth (SSOT) pattern where all resume and portfolio data is managed from a single JSON file (`public/resume-data.json`). This ensures consistency across all platforms (portfolio website, resume PDF, etc.).

## Architecture

```
public/resume-data.json (Single Source)
    ↓
    ├─→ Portfolio Website (reads JSON via React hook)
    └─→ Resume PDF (generated via script)
```

## Files Structure

```
├── public/
│   └── resume-data.json          # ✅ Single Source of Truth - Edit here!
├── src/
│   ├── types.ts                  # TypeScript interfaces for type safety
│   ├── hooks/
│   │   └── useResumeData.ts      # React hook to load JSON data
│   ├── constants.ts              # (Deprecated - now reads from JSON)
│   └── App.tsx                   # Portfolio component
└── scripts/
    └── generate-pdf.ts           # PDF generation from JSON
```

## How It Works

### 1. **Central Data Source** (`public/resume-data.json`)
All your resume and portfolio data is stored here:
- Personal info, contact details
- Professional summary
- Work experience
- Skills and certifications
- Projects
- Education
- Awards

### 2. **Portfolio Website**
The React app uses the `useResumeData` hook to fetch and display data:
```typescript
const { data, loading, error } = useResumeData();
```

### 3. **Resume PDF Generation**
Run the PDF generation script to create a professional resume PDF:
```bash
npm run generate-pdf
```

This generates `public/Mahesh-Kumar-Singh-Resume.pdf` from the JSON data.

## Workflow

### Making Changes

**One-time setup:**
```bash
npm install
```

### Update Resume/Portfolio Data

1. **Edit `public/resume-data.json`** with your changes
2. Changes automatically reflect in the portfolio website
3. Regenerate PDF: `npm run generate-pdf`

#### Example: Adding a New Skill
```json
{
  "name": "New Skill",
  "category": "Category Name"
}
```

#### Example: Adding New Experience
```json
{
  "company": "Company Name",
  "role": "Your Role",
  "period": "Start – End",
  "startDate": "2024-01",
  "location": "City, Country",
  "highlights": [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

### Development Commands

```bash
# Start development server (auto-reloads with JSON changes)
npm run dev

# Build portfolio for production
npm run build

# Generate PDF from JSON data
npm run generate-pdf

# Type checking
npm run lint
```

## Benefits of SSOT

✅ **Single Point of Update** - Change data once, updates everywhere  
✅ **Consistency** - No mismatched information between platforms  
✅ **Type Safety** - TypeScript interfaces prevent data structure errors  
✅ **Maintainability** - Clear data structure, easy to understand  
✅ **Scalability** - Easy to add new fields or sections  
✅ **Automation** - PDF generation is automatic and consistent  

## File Reference

### `public/resume-data.json`
The master data file. Structure:
- `name`, `title`, `role`, `location` - Personal info
- `contact` - Email, phone, social links
- `summary` - Professional summary (array of strings)
- `skills` - Array of `{name, category}`
- `certifications` - Array of `{title, code, date}`
- `awards` - Array of `{title, description, date}`
- `experience` - Array of job experiences
- `projects` - Array of projects
- `education` - Array of education entries
- `socialLinks` - Array of social profiles

### `src/types.ts`
TypeScript type definitions. Provides type checking when reading/writing JSON data.

### `src/hooks/useResumeData.ts`
React hook for fetching the JSON data with loading states and error handling.

## PDF Generation Details

The `generate-pdf.ts` script:
1. Reads `public/resume-data.json`
2. Converts it to a formatted HTML
3. Uses Puppeteer to render and save as PDF
4. Outputs to `public/Mahesh-Kumar-Singh-Resume.pdf`

**Customization**: Edit the `generateHTMLFromResume()` function in `scripts/generate-pdf.ts` to change PDF styling/layout.

## Deployment

When deploying:
1. Update `public/resume-data.json` with latest data
2. Run `npm run generate-pdf` to create new PDF
3. Run `npm run build` for production build
4. Both JSON and PDF are included in deployment

## Tips

- Keep JSON valid - use an online JSON validator if unsure
- Images: Reference them by URL (external links work best)
- Dates: Use format `YYYY-MM` or written format like "Present"
- Descriptions: Keep bullet points concise (2-3 lines max for PDF)
- Test changes: Run `npm run dev` to preview portfolio changes
- PDF Preview: Open generated PDF to verify formatting

## Next Steps

1. Install dependencies: `npm install`
2. Edit `public/resume-data.json` with your actual data
3. Run `npm run dev` to see changes
4. When ready, run `npm run generate-pdf` for PDF
5. Deploy with `npm run deploy`

---

**Remember**: Edit `public/resume-data.json` and everything else updates automatically! 🚀
