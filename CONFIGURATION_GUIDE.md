# Portfolio Template Configuration Guide

This portfolio is now **fully dynamic** and configured through a single source of truth. All your personal data, content, and settings are centralized in the `/config` directory.

## Quick Start

### 1. Environment Setup

Before configuring your portfolio, set up environment variables:

1. Copy the example file: `cp .env.example .env`
2. Open `.env` and add your API keys:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

**Note**: If you're not using email functionality, you can leave this empty. The portfolio will work without it.

### 2. Main Configuration File
Edit **`/config/site-config.ts`** to customize your entire portfolio:

```typescript
export const portfolioConfig: PortfolioConfig = {
  mode: "job-seeking", // or "freelancing"
  name: "Your Name",
  title: "Your Title",
  // ... rest of config
};
```

### 3. Change Portfolio Mode
Switch between job-seeking and freelancing modes:

```typescript
// For job applications (shows Skills section)
mode: "job-seeking"

// For freelancing clients (shows Services section)
mode: "freelancing"
```

## Configuration Structure

```
/config
├── site-config.ts          # MAIN CONFIG - Edit this first!
└── user-data/
    ├── about.ts            # Personal info, experience, education
    ├── projects.ts         # Project portfolio
    ├── services.ts         # Services offered (for freelancing)
    ├── skills.ts           # Technical skills orbital display
    └── case-study/         # Detailed project case studies
```

## What You Can Configure

### Site Metadata (SEO)
- Site name and description
- Domain URL
- Author name
- Keywords for SEO
- Open Graph image
- Theme color

### Personal Information
- Name and title
- Profile photo
- Contact details (email, phone, location)
- Social media links

### Hero Section
- Headline with highlighted words
- Subheadline
- CTA buttons (text + links)
- Availability badge

### About Section
- Story paragraphs
- Role titles
- Skills & interests
- Personal story/blog link

### Experience & Education
- Work history (role, company, period, description)
- Education details
- Hobbies

### Projects
- Project cards with images
- Technologies used
- Live/GitHub links
- Full case studies

### Skills (Job-seeking mode)
- Interactive orbital skill display
- Categories: Frontend, Backend, Tools, Languages
- Custom icons and colors

### Services (Freelancing mode)
- Service offerings
- Descriptions
- Pricing tiers (optional)

## Customization Tips

### 1. Update Profile Photo
Place your photo in `/public/photo-gallery/` and update the path:
```typescript
profileImage: "/photo-gallery/my-picture.png"
```

### 2. Add/Edit Projects
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
}
```

### 3. Customize Skills
In `/config/user-data/skills.ts`:
- Add new skills to `BASE_SKILLS` array
- Assign to categories: `frontend`, `backend`, `tools`, `language`
- Set ring position: `inner`, `mid`, `outer`
- Provide custom icon component

### 4. Highlight Words
Use the `highlightedWords` arrays to emphasize key terms:
```typescript
hero: {
  headline: "Building Amazing Digital Products",
  highlightedWords: ["Amazing", "Digital Products"],
}
```

### 5. Change Primary Colors

Edit `/app/globals.css` to change the color theme:

```css
:root {
  --primary: #7b2cbf;           /* Change this hex code */
  --primary-light: #7a2cbf0f;   /* Same color with 0f opacity suffix */
  --primary-dark: #4a148c;      /* Darker shade of your color */
}
```

**To pick a new color**: Use a color picker tool, choose your desired color, and replace the hex codes. Make sure all three variants (primary, primary-light, primary-dark) use the same base hue.

### 6. Disable Theme Auto-Detection

If you want a single fixed theme instead of auto-switching between light/dark:

1. Open `/app/globals.css`
2. Remove or comment out the entire `@media (prefers-color-scheme: dark)` block
3. Keep only one set of color variables in `:root`

Example for a permanent dark theme:
```css
:root {
  --background: #0e0516;        /* Fixed dark background */
  --foreground: 237 237 237;    /* Fixed light text */
  --primary: #7b2cbf;           /* Your chosen primary color */
  /* ... other variables */
}

/* Remove or comment out this entire block: */
/* @media (prefers-color-scheme: dark) {
  :root {
    --background: #0e0516;
    --foreground: 237 237 237;
    --black-light: #99a1af;
    --primary-light: #7a2cbf36;
  }
} */
```

## Template Reuse

This structure makes it easy to:
1. **Fork the template** for new portfolios
2. **Quickly customize** by editing one file
3. **Maintain consistency** across sections
4. **Add new features** without breaking existing code

### To Create a New Portfolio:
1. Copy the entire `/config` folder
2. Edit `site-config.ts` with new person's data
3. Update images in `/public`
4. Deploy!

## Getting Started Options

### Option 1: Fork This Repository (Recommended)

1. Click "Fork" on GitHub to create your own copy
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/portfolio.git`
3. Install dependencies: `npm install`
4. Set up `.env` file from `.env.example`
5. Customize `/config/site-config.ts`
6. Push changes and deploy

**Benefits**: 
- Easy updates from original template
- Version control built-in
- Simple collaboration

### Option 2: Download Code Directly

1. Click "Code" > "Download ZIP" on GitHub
2. Extract the ZIP file to your desired location
3. Open terminal in the extracted folder
4. Initialize Git (optional): `git init`
5. Install dependencies: `npm install`
6. Set up `.env` file from `.env.example`
7. Customize `/config/site-config.ts`

**Benefits**:
- No GitHub account needed
- Start immediately
- Complete ownership

## Best Practices

1. **Always use TypeScript interfaces** - You get autocomplete and type safety
2. **Keep images optimized** - Use WebP format when possible
3. **Test both modes** - Check job-seeking AND freelancing views
4. **Update social links** - Ensure all URLs are correct
5. **Review SEO metadata** - Customize for each person

## Visual Guide Placeholders

When creating documentation screenshots, consider adding:

<!-- IMAGE PLACEHOLDER: Config file location -->
<!-- Image suggestion: File explorer showing /config folder with site-config.ts highlighted. Add arrow annotation pointing to the file with text "Edit this file first!" -->

<!-- IMAGE PLACEHOLDER: Mode toggle closeup -->
<!-- Image suggestion: Screenshot of lines 136-137 in site-config.ts showing mode: "job-seeking" with callout box explaining "Change to 'freelancing' to show services instead of skills" -->

<!-- IMAGE PLACEHOLDER: Color customization -->
<!-- Image suggestion: Split screen showing globals.css on left with --primary variable highlighted, and live portfolio preview on right showing the color change effect -->

<!-- IMAGE PLACEHOLDER: Environment setup -->
<!-- Image suggestion: Terminal window showing the command "cp .env.example .env" with output, then opened .env file showing RESEND_API_KEY field -->

These placeholders can be replaced with actual annotated screenshots in future documentation updates.

## Troubleshooting

### Changes not appearing?
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Check browser console for errors

### TypeScript errors?
- Make sure you're following the interface shapes
- Check that all required fields are filled
- Optional fields have `?` marker

### Images not loading?
- Verify path starts with `/`
- Check file exists in `/public` folder
- Ensure correct file extension

### Theme not changing?
- Make sure you've cleared browser cache
- Check if `prefers-color-scheme` media query is still active
- Verify CSS variables are correctly formatted

## Support

For questions or issues, check:
- Existing config files for examples
- TypeScript interfaces for available options
- Component files to understand how data is used

---

**Happy building!**
