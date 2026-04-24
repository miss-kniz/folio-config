# Complete Setup Guide for Portfolio Template

## Quick Start (5 Minutes)

### Step 1: Get the Code

**Option A: Fork on GitHub (Recommended)**
1. Click "Fork" button on the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/portfolio.git`
3. Navigate to folder: `cd portfolio`

**Option B: Download ZIP**
1. Click "Code" > "Download ZIP"
2. Extract the ZIP file
3. Open terminal in extracted folder

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Environment Setup (Optional)

```bash
cp .env.example .env
```

Edit `.env` and add your Resend API key if you want contact form emails:
```
RESEND_API_KEY=your_api_key_here
```

Note: You can skip this step - the portfolio works without email functionality.

### Step 4: Configure Your Portfolio

Open `/config/site-config.ts` - this is YOUR control panel.

#### 4.1 Update SEO (Critical!)

Find the `seoConfig` object and update:

```typescript
export const seoConfig: SeoConfig = {
  title: "Your Name | Your Title",
  description: "Your unique description...",
  keywords: ["Your", "Keywords", "Here"],
  canonical: "https://your-domain.com",
  openGraph: {
    url: "https://your-domain.com",
    images: [{
      url: "https://your-domain.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Your Name - Your Title",
    }],
  },
  // Add Google verification after claiming your site
  verification: {
    google: "your-verification-code",
  },
};
```

<!-- IMAGE PLACEHOLDER: Screenshot of seoConfig section -->
<!-- What to show: Highlight these fields with colored boxes: title, description, canonical, keywords -->
<!-- Caption: "Update these SEO fields first - they affect how you appear in Google search results" -->

#### 4.2 Update Personal Information

```typescript
export const portfolioConfig: PortfolioConfig = {
  mode: "job-seeking", // or "freelancing"
  name: "Your Name",
  title: "Your Professional Title",
  tagline: "Your catchy tagline",
  profileImage: "/photo-gallery/your-photo.png",
  
  hero: {
    headline: "Your main headline",
    highlightedWords: ["Key", "Terms"],
    subheadline: "Supporting text...",
    primaryCtaText: "Hire Me",
    primaryCtaLink: "mailto:your@email.com",
    secondaryCtaText: "Book a Call",
    secondaryCtaLink: "https://calendly.com/your-link",
  },
  
  contact: {
    email: "your@email.com",
    location: "Your Location or Remote",
    preferredMethod: "email",
  },
  
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "ri-linkedin-fill" },
    { platform: "GitHub", url: "https://github.com/your-username", icon: "ri-github-fill" },
  ],
};
```

<!-- IMAGE PLACEHOLDER: Annotated screenshot of portfolioConfig -->
<!-- What to show: Numbered callouts pointing to: mode toggle, name field, profile image path, social links array -->
<!-- Caption: "These are the most frequently edited fields. Change mode to switch between job-seeking and freelancing views." -->

#### 4.3 Choose Your Mode

```typescript
mode: "job-seeking",     // Shows Skills section - best for job applications
// OR
mode: "freelancing",     // Shows Services section - best for client work
```

<!-- IMAGE PLACEHOLDER: Side-by-side comparison -->
<!-- What to show: Left side shows job-seeking mode with skills orbital, right side shows freelancing mode with service cards -->
<!-- Caption: "Toggle the mode field to instantly switch between these two layouts" -->

### Step 5: Add Your Images

1. **Profile Photo**: Add to `/public/photo-gallery/your-photo.png`
2. **OG Image** (for social media): Add to `/public/og-image.png` (1200x630px recommended)
3. **Project Images**: Add to `/public/projects/` folder

Update the paths in `/config/site-config.ts` to match your filenames.

### Step 6: Customize Colors (Optional)

Open `/app/globals.css` and find:

```css
:root {
  --primary: #7b2cbf;           /* Change this hex code */
  --primary-light: #7a2cbf0f;   /* Same color with 0f added */
  --primary-dark: #4a148c;      /* Darker shade */
}
```

<!-- IMAGE PLACEHOLDER: Color customization guide -->
<!-- What to show: CSS code on left, live preview on right showing color change from purple to blue -->
<!-- Caption: "Change just the --primary value and the entire site theme updates automatically" -->

**To use only ONE theme (disable auto dark/light mode):**

Remove this entire block from `/app/globals.css`:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0e0516;
    --foreground: 237 237 237;
  }
}
```

Then set your preferred colors in the `:root` section above it.

### Step 7: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and check:
- All sections display correctly
- Links work
- Images load
- Contact form appears (if configured)
- Mobile view looks good

### Step 8: Deploy

**Deploy to Vercel (Recommended):**

1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

**Environment Variables on Vercel:**
- Add `RESEND_API_KEY` if using contact form
- Otherwise, no configuration needed!

## Visual Configuration Guide

<!-- IMAGE PLACEHOLDER: File structure diagram -->
<!-- What to show: Tree view of project with arrows pointing to: /config/site-config.ts (label: "EDIT THIS"), /public folder (label: "ADD IMAGES HERE"), /app/globals.css (label: "CHANGE COLORS HERE") -->
<!-- Caption: "Only touch these three areas to fully customize your portfolio" -->

<!-- IMAGE PLACEHOLDER: Config file overview -->
<!-- What to show: Screenshot of site-config.ts with colored sections: SEO config (red border), Personal info (blue border), Hero section (green border), Social links (purple border) -->
<!-- Caption: "Color-coded sections make it easy to find what you need to edit" -->

## Common Customizations

### Add/Edit Projects

File: `/config/user-data/projects.ts`

```typescript
{
  id: "my-project",
  title: "Project Name",
  description: "What it does",
  imageUrl: "/projects/my-project.webp",
  technologies: ["React", "TypeScript", "Next.js"],
  liveUrl: "https://project-url.com",
  githubUrl: "https://github.com/you/project",
}
```

### Add Work Experience

File: `/config/user-data/about.ts` or directly in `site-config.ts`

```typescript
experience: [
  {
    role: "Your Job Title",
    company: "Company Name",
    description: "What you did",
    period: "2024 - Present",
  },
]
```

### Change Available Status

In `site-config.ts`, update:

```typescript
hero: {
  availabilityBadge: "Available for Remote Roles",
  badgeHighlights: ["Remote"],
}
```

## Troubleshooting

### Images Not Loading?
- Check file paths are correct (case-sensitive!)
- Images must be in `/public` folder
- Restart dev server after adding images

### Changes Not Showing?
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear Next.js cache: `rm -rf .next` then `npm run dev`

### TypeScript Errors?
- Don't remove required fields
- Keep quotes around strings
- Arrays need square brackets []
- Objects need curly braces {}

## Next Steps

After setup:
1. Submit sitemap to Google Search Console
2. Test on multiple devices
3. Share on social media to verify OpenGraph images
4. Add Google Analytics if desired
5. Set up custom domain in Vercel

## Need Help?

- Check CONFIGURATION_GUIDE.md for detailed options
- Review SEO_MIGRATION_NOTES.md for SEO-specific guidance
- Open an issue on GitHub for bugs
- Check Next.js documentation for framework-specific questions

---

**You're all set!** Your professional portfolio is ready to impress.
