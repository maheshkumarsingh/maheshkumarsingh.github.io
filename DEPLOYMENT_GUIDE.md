# 🚀 GitHub Pages Deployment Checklist

Your portfolio project is ready for GitHub Pages deployment! Follow these steps:

## ✅ What's Already Done
- ✓ Git repository initialized
- ✓ Project built and ready (`dist/` folder created)
- ✓ Initial commits made
- ✓ README with deployment instructions
- ✓ Deploy script added to package.json
- ✓ Vite configured with base path

## 📋 Deployment Steps

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio` or `mahesh-kumar-singh-portfolio`
3. Add description: "Senior Full Stack .NET Developer Portfolio"
4. Choose Public (for GitHub Pages)
5. Click "Create repository"
6. Copy the repository URL

### Step 2: Connect Local Repository to GitHub
```bash
cd /Users/maheshkumarsingh/Projects/Portfolio/mahesh-kumar-singh-_-senior-full-stack-.net-developer

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Rename main branch if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
1. Build the project
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub Pages

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages** and **/root** (or just **gh-pages**)
5. Click **Save**

## 🌐 Your Portfolio Will Be Live At
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

For example:
```
https://maheshkumarsingh.github.io/portfolio/
```

## 📝 If You Want Your Own Domain
1. Get a custom domain
2. In GitHub Settings → Pages → Custom domain
3. Enter your domain and click Save
4. Update your DNS records (follow GitHub's instructions)

## 🔄 Making Future Updates
After making changes to your portfolio:

```bash
# 1. Commit your changes
git add .
git commit -m "Update portfolio description"
git push origin main

# 2. Deploy to GitHub Pages
npm run deploy
```

## 🆘 Troubleshooting

**Issue: "fatal: repository not found"**
- Make sure you've created the repository on GitHub
- Check your remote URL: `git remote -v`

**Issue: gh-pages branch not showing in Settings**
- It may take a few minutes to appear
- Make sure you ran `npm run deploy` successfully
- Check: `git branch -a` to see all branches

**Issue: Site not loading**
- Wait 5-10 minutes for GitHub to process
- Check repository Settings → Pages
- Clear browser cache and try again

## 📞 Need Help?
- Refer to GitHub Pages docs: https://pages.github.com/
- Check the README.md in your project

---

**Ready to deploy?** Run these commands:
```bash
git remote add origin <your-repo-url>
git push -u origin main
npm run deploy
```

Good luck! 🎉
