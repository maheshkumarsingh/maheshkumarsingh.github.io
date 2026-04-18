<div align="center">
<h1>Mahesh Kumar Singh - Portfolio</h1>
<p>Senior Full Stack .NET Developer | SDE2 @ The Toro Company</p>
</div>

# Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, projects, and achievements. Built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Features

- **Responsive Design**: Beautiful UI that works on all devices
- **Smooth Animations**: Motion animations using Framer Motion
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS, Vite
- **Sections**:
  - Hero Section with introduction
  - Experience highlights
  - Skills & Technologies
  - Featured Projects
  - Certifications & Awards
  - Education
  - Contact Section

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation & Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🚀 Deployment to GitHub Pages

### Option 1: Using the deploy script (Recommended)

This method uses `git subtree` to deploy the `dist` folder to the `gh-pages` branch.

1. **Create a GitHub repository** (if not already created):
   - Go to https://github.com/new
   - Create a repository (e.g., `portfolio` or `mahesh-kumar-singh-portfolio`)
   - Note your repository URL

2. **Add remote and push to GitHub:**
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages settings:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **Deploy from a branch**
     - Branch: Select **gh-pages** (or **gh-pages** / **root**)
   - Click Save

5. **Your portfolio will be live at:**
   ```
   https://<your-username>.github.io/<repository-name>/
   ```
   
   Or if it's a user/organization site:
   ```
   https://<your-username>.github.io/
   ```

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Commit changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

3. Push the dist folder to gh-pages:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

### Option 3: Using GitHub Actions (Automatic)

Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📝 Customization

Edit the resume data in [src/constants.ts](src/constants.ts):
- Update personal information
- Modify skills, experience, and projects
- Change certifications and awards
- Update education details

## 🎨 Styling

The project uses:
- **Tailwind CSS**: For styling
- **Lucide React**: For icons
- **Motion (Framer Motion)**: For animations

## 📞 Contact

- Email: sm.singhmahesh@gmail.com
- LinkedIn: https://www.linkedin.com/in/mahesh-kumar-singh-3362921a6
- Phone: +91-9525958755

## 📄 License

This project is open source and available under the MIT License.

