# Deployment Guide

This guide walks you through deploying your portfolio to Vercel.

## Quick Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/miss-kniz/portfolio-template)

1. Click the button above
2. Connect your GitHub account
3. Configure environment variables
4. Deploy!

### Option 2: Manual Deploy

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Your code pushed to GitHub

## Step-by-Step Deployment

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Step 2: Create Vercel Account

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended) or email
3. Complete the onboarding

### Step 3: Import Project

1. Click "Add New..." > "Project"
2. Select your repository from GitHub
3. Click "Import"

### Step 4: Configure Environment Variables

In the Vercel dashboard, add these environment variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxx` | Get from [Resend.com](https://resend.com) |
| `NEXT_PUBLIC_BASE_URL` | `https://your-project.vercel.app` | Your Vercel URL |

**How to get Resend API Key:**
1. Go to [Resend.com](https://resend.com)
2. Sign up for free
3. Navigate to "API Keys"
4. Click "Create API Key"
5. Copy and paste into Vercel

### Step 5: Deploy

1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Visit your live URL!

## Custom Domain (Optional)

### Step 1: Buy a Domain

Popular options:
- [Namecheap](https://namecheap.com)
- [GoDaddy](https://godaddy.com)
- [Google Domains](https://domains.google)

### Step 2: Add to Vercel

1. Go to your project in Vercel
2. Navigate to "Settings" > "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Step 3: Update BASE_URL

Update `NEXT_PUBLIC_BASE_URL` in Vercel environment variables:
```
NEXT_PUBLIC_BASE_URL=https://yourcustomdomain.com
```

## Environment Variables Reference

### Required Variables

```env
# Email service for contact form
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Your production URL
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### Optional Variables

```env
# Google Analytics (if using)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other analytics or services
```

##  Vercel Settings

### Build Settings

Vercel auto-detects Next.js. These are the default settings:

- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install` or `npm install`

### Node.js Version

Vercel uses Node.js 20 by default. To specify:

Create `.nvmrc` in your project root:
```
20
```

Or add to `package.json`:
```json
{
  "engines": {
    "node": ">=20.0.0"
  }
}
```

##  Continuous Deployment

Once connected to GitHub:

1. Every push to `main` triggers automatic deployment
2. Pull request previews are created automatically
3. Rollback to previous versions anytime

### Disable Auto-Deploy (Optional)

If you want manual deploys only:
1. Go to Settings > Git
2. Disable "Auto Expose Serverless Functions"
3. Use Vercel CLI for manual deploys

## Post-Deployment Checklist

After deployment:

- [ ] Site loads correctly
- [ ] All links work
- [ ] Contact form sends emails
- [ ] Images load properly
- [ ] Theme toggle works
- [ ] Mobile responsive
- [ ] SEO metadata is correct
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Submit sitemap to Google Search Console

## Testing Your Deployment

### 1. Check Performance

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

### 2. Test Contact Form

1. Fill out the contact form
2. Check if email arrives
3. Verify Resend dashboard shows successful send

### 3. SEO Verification

1. View page source
2. Check meta tags are present
3. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

## Troubleshooting

### Issue: Build fails
**Solutions:**
1. Check build logs in Vercel dashboard
2. Run `npm run build` locally to reproduce
3. Fix TypeScript errors
4. Ensure all dependencies are installed

### Issue: Contact form not working
**Solutions:**
1. Verify `RESEND_API_KEY` is set correctly
2. Check Resend dashboard for errors
3. Ensure verified domain in Resend matches sender email

### Issue: Images not loading
**Solutions:**
1. Check image paths are correct
2. Ensure images are in `public/` folder
3. Clear Vercel cache and redeploy

### Issue: 404 on pages
**Solutions:**
1. Check file names and routes
2. Verify `NEXT_PUBLIC_BASE_URL` is correct
3. Try clearing browser cache

## Monitoring

### Vercel Analytics

Enable in Vercel dashboard:
1. Go to Analytics tab
2. Enable Web Analytics
3. View traffic, performance, and errors

### Error Tracking

Check deployment logs:
1. Go to Deployments tab
2. Click on latest deployment
3. View logs for errors

## 🔙 Rollback

If something goes wrong:

1. Go to Deployments tab
2. Find last working version
3. Click "Promote to Production"

##  Cost

**Free Tier Includes:**
- Unlimited deployments
- 100GB bandwidth/month
- Automatic SSL
- Custom domains
- Analytics (basic)

**When to Upgrade:**
- Need more bandwidth
- Want advanced analytics
- Need team collaboration

##  Best Practices

1. **Always test locally** before pushing
2. **Use preview deployments** for PRs
3. **Monitor build times** (should be < 5 min)
4. **Keep environment variables secure**
5. **Set up alerts** for failed deployments
6. **Regular backups** of your content files

##  Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Resend Documentation](https://resend.com/docs)

---

Need help? Reach out at mehak313naqvi@gmail.com or on [LinkedIn](https://linkedin.com/in/miss-kniz).
