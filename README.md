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

**To use a single theme (disable auto-detection)**: Remove the `@media (prefers-color-scheme: dark)` block entirely and keep only one set of colors.

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

## Visual Guide (Coming Soon)

<!-- IMAGE PLACEHOLDER: Add screenshot here showing the config file location -->
<!-- Image suggestion: Screenshot of file explorer highlighting /config/site-config.ts with arrow pointing to it -->

<!-- IMAGE PLACEHOLDER: Add annotated screenshot of site-config.ts -->
<!-- Image suggestion: Screenshot of site-config.ts with highlighted sections: mode toggle, personal info, hero section, contact info. Add callouts like "CHANGE THIS for your name", "TOGGLE between job/freelance mode", "UPDATE your email and social links" -->

<!-- IMAGE PLACEHOLDER: Add before/after color comparison -->
<!-- Image suggestion: Split image showing default purple theme on left and custom blue theme on right, with arrow pointing to the --primary CSS variable in globals.css -->

<!-- IMAGE PLACEHOLDER: Add environment setup screenshot -->
<!-- Image suggestion: Terminal window showing "cp .env.example .env" command and opened .env file with RESEND_API_KEY highlighted -->

For detailed visual guides with annotated screenshots, check our documentation wiki or watch the video tutorial (links coming soon).

## Detailed Documentation

See **[CONFIGURATION_GUIDE.md](./CONFIGURATION_GUIDE.md)** for:
- Complete configuration options
- Customization tips
- Best practices
- Troubleshooting

## SEO and Existing Portfolio Notes

If you're using this template for an existing portfolio:

1. **Update site metadata** in `/config/site-config.ts`:
   - `siteUrl`: Your actual domain
   - `siteName`: Your name/brand
   - `keywords`: Relevant SEO keywords

2. **Preserve your SEO rankings**:
   - Keep the same URLs for existing pages
   - Set up 301 redirects if you change any URLs
   - Update `ogImage` with your custom Open Graph image

3. **Social links are already configured** - Just update the URLs in `socialLinks` array

4. **No breaking changes**: The dynamic structure maintains all existing functionality while making it easier to edit

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Phosphor Icons + Remix Icons
- **UI Components**: Radix UI primitives

## License

Open-source template - feel free to use for your own portfolio or client work!

---

**Built for developers who want a professional portfolio without the hassle.**
