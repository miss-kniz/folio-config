# Portfolio Reusable Open-Source Template

A **fully dynamic, data-driven portfolio template** built with Next.js and TypeScript. All content is centralized in configuration files, making it easy to customize and reuse for multiple portfolios.

## Quick Start

1. **Install dependencies**: `npm install`
2. **Set up environment variables**: Copy `.env.example` to `.env` (see Environment Setup section)
3. **Configure your portfolio**: Edit `/config/site-config.ts`
4. **Run development server**: `npm run dev`
5. **Deploy**: Build with `npm run build`

## Key Features

### Dynamic Configuration
- **Single source of truth**: All data in `/config/site-config.ts`
- **Type-safe editing**: Full TypeScript autocomplete support
- **Two modes**: Switch between job-seeking and freelancing instantly

### Responsive Sections
- **Hero Section**: Availability badge, animated headline, dual CTAs
- **About Section**: Personal story, role highlights, journey modal
- **Projects**: Filterable portfolio with case studies
- **Skills**: Interactive orbital display (job-seeking mode)
- **Services**: Service cards (freelancing mode)
- **Contact**: Form + direct contact info + social links

### Design Features
- **Theme adaptive**: Auto-adjusts to system dark/light mode (can be disabled)
- **Customizable colors**: Easy primary color changes
- **Decorative elements**: Animated curtains, glow effects
- **Smooth animations**: Framer Motion powered transitions
- **Mobile-first**: Bottom navigation for mobile devices

## Project Structure

```
/config                    # ALL DATA LIVES HERE
├── site-config.ts        # Main configuration (EDIT THIS FIRST!)
└── user-data/
    ├── about.ts          # Personal info, experience, education
    ├── projects.ts       # Project portfolio
    ├── services.ts       # Services (freelancing mode)
    ├── skills.ts         # Technical skills orbital
    └── case-study/       # Detailed project case studies

/app                      # Next.js app router pages
/components               # Reusable UI components
/public                   # Static assets (images, etc.)
.env                      # Environment variables (create from .env.example)
```

## Getting Started Options

### Option 1: Fork This Repository (Recommended)

1. Click "Fork" on GitHub to create your own copy
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/portfolio.git`
3. Follow the Quick Start guide above
4. Customize `/config/site-config.ts` with your information
5. Push changes and deploy

**Benefits**: 
- Easy updates from original template
- Version control built-in
- Simple collaboration

### Option 2: Download Code Directly

1. Click "Code" > "Download ZIP" on GitHub
2. Extract the ZIP file
3. Initialize Git: `git init`
4. Install dependencies: `npm install`
5. Follow the Quick Start guide above

**Benefits**:
- No GitHub account needed
- Start immediately
- Complete ownership

## Configuration Guide

### Environment Setup

Before running the project, set up your environment variables:

1. Copy the example file: `cp .env.example .env`
2. Open `.env` and add your API keys:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

**Note**: If you're not using email functionality, you can leave the key empty or skip this step. The portfolio will work without it.

### Change Portfolio Mode

Edit `/config/site-config.ts`:

```typescript
export const portfolioConfig: PortfolioConfig = {
  // For job applications (shows Skills section)
  mode: "job-seeking",
  
  // For freelancing clients (shows Services section)
  mode: "freelancing",
};
```

<!-- IMAGE PLACEHOLDER: Side-by-side comparison -->
<!-- What to show: Left side shows job-seeking mode with skills orbital, right side shows freelancing mode with service cards -->
<!-- Caption: "Toggle the mode field to instantly switch between these two layouts" -->

### Update Personal Information

All personal data is in one place:

```typescript
export const portfolioConfig: PortfolioConfig = {
  name: "Your Name",
  title: "Your Title",
  profileImage: "/photo-gallery/my-picture.png",
  
  hero: {
    headline: "Your Headline",
    highlightedWords: ["Key", "Terms"],
    primaryCtaText: "Hire Me",
    primaryCtaLink: "https://...",
  },
  
  contact: {
    email: "your@email.com",
    location: "Remote",
  },
  
  socialLinks: [
    { platform: "LinkedIn", url: "...", icon: "ri-linkedin-fill" },
  ],
};
```

<!-- IMAGE PLACEHOLDER: Annotated screenshot of portfolioConfig -->
<!-- What to show: Numbered callouts pointing to: mode toggle, name field, profile image path, social links array -->
<!-- Caption: "These are the most frequently edited fields. Change mode to switch between job-seeking and freelancing views." -->

### Change Primary Colors and Theme

To customize the color scheme, edit `/app/globals.css`:

```css
:root {
  --background: #ffffff;        /* Light mode background */
  --foreground: 14 5 22;        /* Text color (RGB format) */
  --primary: #7b2cbf;           /* PRIMARY COLOR - Change this! */
  --primary-light: #7a2cbf0f;   /* Light variant (add 0f suffix) */
  --primary-dark: #4a148c;      /* Dark variant */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0e0516;      /* Dark mode background */
    --foreground: 237 237 237;  /* Dark mode text */
  }
}
```

<!-- IMAGE PLACEHOLDER: Color customization guide -->
<!-- What to show: CSS code on left, live preview on right showing color change from purple to blue -->
<!-- Caption: "Change just the --primary value and the entire site theme updates automatically" -->

**To use a single theme (disable auto-detection)**: Remove the `@media (prefers-color-scheme: dark)` block entirely and keep only one set of colors.

### Configure SEO (Important!)

SEO settings are in `/config/site-config.ts` under the `seoConfig` object:

```typescript
export const seoConfig: SeoConfig = {
  title: "Your Name | Your Title",
  description: "Your description for search engines",
  keywords: ["Your", "Keywords", "Here"],
  canonical: "https://your-domain.com",
  openGraph: {
    url: "https://your-domain.com",
    images: [{
      url: "https://your-domain.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Your Name",
    }],
  },
  verification: {
    google: "your-google-verification-code",
  },
};
```

<!-- IMAGE PLACEHOLDER: Screenshot of seoConfig section -->
<!-- What to show: Highlight these fields with colored boxes: title, description, canonical, keywords -->
<!-- Caption: "Update these SEO fields first - they affect how you appear in Google search results" -->

### Add/Edit Projects

In `/config/user-data/projects.ts`:

```typescript
{
  id: "my-project",
  title: "Project Name",
  description: "Brief description",
  imageUrl: "projects/my-project.webp",
  technologies: ["React", "TypeScript"],
  liveUrl: "https://...",
  githubUrl: "https://...",
  caseStudy: myCaseStudy, // optional detailed case study
}
```

## Visual Configuration Guide

<!-- IMAGE PLACEHOLDER: File structure diagram -->
<!-- What to show: Tree view of project with arrows pointing to: /config/site-config.ts (label: "EDIT THIS"), /public folder (label: "ADD IMAGES HERE"), /app/globals.css (label: "CHANGE COLORS HERE") -->
<!-- Caption: "Only touch these three areas to fully customize your portfolio" -->

<!-- IMAGE PLACEHOLDER: Config file overview -->
<!-- What to show: Screenshot of site-config.ts with colored sections: SEO config (red border), Personal info (blue border), Hero section (green border), Social links (purple border) -->
<!-- Caption: "Color-coded sections make it easy to find what you need to edit" -->

For detailed visual guides with annotated screenshots, see **[SETUP_GUIDE.md](./SETUP_GUIDE.md)**.

## Documentation Files

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete step-by-step setup with visual placeholders
- **[CONFIGURATION_GUIDE.md](./CONFIGURATION_GUIDE.md)** - Detailed configuration options and best practices

## SEO Preservation (Important!)

Your existing SEO is **fully preserved**. Here's what was done:

1. **All meta tags moved to config**: Your title, description, keywords, OpenGraph data, and Google verification code are now in `/config/site-config.ts` under the `seoConfig` object.

2. **No breaking changes**: The `layout.tsx` file now imports from config, but outputs the exact same HTML meta tags as before.

3. **Structured Data intact**: Your JSON-LD schema markup remains unchanged and continues to connect your portfolio to LinkedIn and GitHub.

4. **Canonical URL preserved**: Set to `https://mehak-naqvi.vercel.app` - no changes needed.

5. **What to check**:
   - Verify your Google Search Console still shows the correct property
   - Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Share your URL on social media to confirm OpenGraph images display correctly

**Important**: Do NOT change the `seoConfig` values in `/config/site-config.ts` unless you intentionally want to update your SEO strategy. All your hard-earned SEO rankings are tied to these exact values.

### For Template Users (New Portfolios)

When using this template for a new portfolio:

1. **Update site metadata** in `/config/site-config.ts`:
   - `seo.canonical`: Your actual domain URL
   - `seo.title`: Your name + title for search results
   - `seo.description`: Brief description for search engines
   - `seo.keywords`: Relevant keywords for your niche
   - `seo.openGraph.images`: Your portfolio screenshot for social sharing

2. **Add verification codes** (optional):
   ```typescript
   verification: {
     google: "your-google-verification-code",
   }
   ```

3. **Replace images**:
   - Add your OG image to `/public/og-image.png`
   - Update favicon at `/public/favicon.ico`

## Template Reuse

This structure makes it perfect for:
1. **Multiple portfolios**: Copy `/config` folder for each person
2. **Quick customization**: Edit one file per portfolio
3. **Consistent branding**: Same design, different content
4. **Easy maintenance**: Update design once, applies to all

### To Create a New Portfolio:

1. Copy the entire `/config` folder to `/config-[person-name]`
2. Edit `site-config.ts` with new person's data
3. Update images in `/public`
4. Deploy!

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Phosphor Icons + Remix Icons
- **UI Components**: Radix UI primitives

## License

Open-source template - feel free to use for your own portfolio or client work!

## Support

For questions or issues regarding configuration:
1. Check existing config files in `/config` for examples.
2. Review TypeScript interfaces for available options.
3. Inspect component files to understand how data is consumed.

If you need further assistance, feel free to email me or connect on LinkedIn. If you find this template useful, a follow on LinkedIn means a lot to me!

- **LinkedIn:** [linkedin.com/in/miss-kniz](https://www.linkedin.com/in/miss-kniz)
- **Email:** [Your Email Here]

---

**Built for developers who want a professional portfolio without the hassle.**
