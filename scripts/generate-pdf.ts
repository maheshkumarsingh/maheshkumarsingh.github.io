import pdf from 'html-pdf';
import fs from 'fs';
import path from 'path';

const resumeDataPath = path.join(process.cwd(), 'public', 'resume-data.json');
const outputPath = path.join(process.cwd(), 'public', 'Mahesh-Kumar-Singh-Resume.pdf');

async function generatePDF() {
  try {
    console.log('📄 Generating PDF from resume data...');
    
    // Read resume data
    const resumeData = JSON.parse(fs.readFileSync(resumeDataPath, 'utf-8'));
    
    // Generate HTML from resume data
    const htmlContent = generateHTMLFromResume(resumeData);
    
    // Generate PDF with html-pdf
    pdf.create(htmlContent, {
      format: 'A4',
      margin: {
        top: '0.4in',
        bottom: '0.4in',
        left: '0.5in',
        right: '0.5in'
      }
    }).toFile(outputPath, (err: any) => {
      if (err) {
        console.error('❌ Error generating PDF:', err);
        process.exit(1);
      }
      console.log(`✅ PDF generated successfully at: ${outputPath}`);
    });
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
}

function generateHTMLFromResume(data: any): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${data.name} - Resume</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background: white;
    }
    
    .container {
      max-width: 8.5in;
      height: 11in;
      margin: 0 auto;
      padding: 0.5in;
      background: white;
    }
    
    header {
      text-align: center;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid #0066cc;
      padding-bottom: 1rem;
    }
    
    .name {
      font-size: 28px;
      font-weight: bold;
      color: #000;
      margin-bottom: 0.3rem;
    }
    
    .title {
      font-size: 14px;
      color: #0066cc;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .contact-info {
      font-size: 11px;
      color: #555;
      margin-bottom: 0.3rem;
    }
    
    .section {
      margin-bottom: 1.2rem;
    }
    
    .section-title {
      font-size: 14px;
      font-weight: bold;
      color: #0066cc;
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.3rem;
      margin-bottom: 0.6rem;
      text-transform: uppercase;
    }
    
    .summary-item {
      font-size: 11px;
      margin-bottom: 0.4rem;
      line-height: 1.4;
    }
    
    .experience-item {
      margin-bottom: 0.8rem;
    }
    
    .job-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.2rem;
    }
    
    .job-title {
      font-weight: bold;
      font-size: 12px;
      color: #000;
    }
    
    .job-period {
      font-size: 11px;
      color: #666;
      font-style: italic;
    }
    
    .company {
      font-size: 11px;
      color: #0066cc;
      font-weight: 600;
      margin-bottom: 0.2rem;
    }
    
    .highlights {
      font-size: 10px;
      margin-left: 0.2in;
      line-height: 1.4;
    }
    
    .highlight-item {
      margin-bottom: 0.2rem;
    }
    
    .skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;
      font-size: 10px;
    }
    
    .skill-tag {
      background: #f0f0f0;
      padding: 0.2rem 0.5rem;
      border-radius: 3px;
      border-left: 2px solid #0066cc;
    }
    
    .cert-item {
      font-size: 10px;
      margin-bottom: 0.3rem;
    }
    
    .project-item {
      margin-bottom: 0.6rem;
      font-size: 11px;
    }
    
    .project-name {
      font-weight: bold;
      color: #000;
    }
    
    .project-tech {
      color: #0066cc;
      font-size: 10px;
      margin: 0.2rem 0;
    }
    
    .education-item {
      font-size: 11px;
      margin-bottom: 0.3rem;
    }
    
    .two-column {
      display: flex;
      gap: 0.5in;
    }
    
    .column {
      flex: 1;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="name">${data.name}</div>
      <div class="title">${data.title}</div>
      <div class="contact-info">
        ${data.contact.email} | ${data.contact.phone} | ${data.location}
      </div>
      <div class="contact-info">
        <a href="${data.contact.linkedin}" style="text-decoration: none; color: #0066cc;">LinkedIn</a> | 
        <a href="${data.contact.github}" style="text-decoration: none; color: #0066cc;">GitHub</a>
      </div>
    </header>
    
    <!-- Professional Summary -->
    <div class="section">
      <div class="section-title">Professional Summary</div>
      ${data.summary.map((item: string) => `<div class="summary-item">• ${item}</div>`).join('')}
    </div>
    
    <!-- Experience -->
    <div class="section">
      <div class="section-title">Professional Experience</div>
      ${data.experience.map((exp: any) => `
        <div class="experience-item">
          <div class="job-header">
            <div class="job-title">${exp.role}</div>
            <div class="job-period">${exp.period}</div>
          </div>
          <div class="company">${exp.company} • ${exp.location}</div>
          <div class="highlights">
            ${exp.highlights.map((h: string) => `<div class="highlight-item">• ${h}</div>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
    
    <!-- Skills & Certifications (Two Column) -->
    <div class="two-column">
      <div class="column">
        <div class="section">
          <div class="section-title">Skills</div>
          <div class="skills-container">
            ${data.skills.slice(0, 12).map((skill: any) => `<div class="skill-tag">${skill.name}</div>`).join('')}
          </div>
        </div>
      </div>
      <div class="column">
        <div class="section">
          <div class="section-title">Certifications</div>
          ${data.certifications.map((cert: any) => `
            <div class="cert-item">• ${cert.code} - ${cert.title}</div>
          `).join('')}
        </div>
      </div>
    </div>
    
    <!-- Education -->
    <div class="section">
      <div class="section-title">Education</div>
      ${data.education.map((edu: any) => `
        <div class="education-item">
          <strong>${edu.degree}</strong> in ${edu.field} • ${edu.school} (${edu.year})
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>
  `;
}

generatePDF();
