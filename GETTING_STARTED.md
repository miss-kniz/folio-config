# Getting Started Guide

Welcome to the Portfolio Template! This guide will help you set up and customize your portfolio in under an hour.

## Prerequisites

Before you begin, ensure you have:
- Node.js 20 or higher installed ([Download](https://nodejs.org))
- A code editor (VS Code recommended)
- Git installed (optional, for version control)

## Step-by-Step Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/miss-kniz/portfolio-template.git your-portfolio
cd your-portfolio
```

Or use this template by clicking "Use this template" on GitHub.

### Step 2: Install Dependencies

```bash
pnpm install
# or
npm install
```

### Step 3: Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp env.example .env.local
   ```

2. Open `.env.local` and update the values:
   ```env
   # Get your API key from https://resend.com
   RESEND_API_KEY=re_your_actual_api_key_here
   
   # Your production URL (update after deployment)
   NEXT_PUBLIC_BASE_URL=https://your-name.vercel.app
   ```

   **How to get Resend API Key:**
   - Go to [Resend.com](https://resend.com)
   - Sign up for a free account
   - Navigate to "API Keys" in the dashboard
   - Click "Create API Key"
   - Copy the key and paste it in `.env.local`

### Step 4: Customize Your Content

All your content is in `config/user-data/`. Edit these files:

#### 4.1 Personal Information (`config/user-data/about.ts`)

This file contains:
- Your name and title
- Hero section text
- About me section
- Work experience
- Education
- Hobbies
- Social links
- Contact information

**Key sections to update:**
```typescript
const aboutData: AboutData = {
  name: "Your Name",                    // Your full name
  title: "Your Professional Title",     // e.g., "Full Stack Developer"
  
  hero: {
    headline: "Your Catchy Headline",
    primaryCtaText: "Hire Me",
    secondaryCtaText: "Book a Call",
  },
  
  aboutMe: {
    paragraphs: ["Your story here..."],
    skills: ["React", "TypeScript"],
  },
  
  contact: {
    email: "your@email.com",
    location: "Your Location",
  },
};
```

#### 4.2 Projects (`config/user-data/projects.ts`)

Add your projects:
```typescript
export const projects: ProjectItem[] = [
  {
    id: "unique-project-id",
    title: "Project Name",
    description: "Brief description",
    categories: ["Full-stack", "SaaS"],
    imageUrl: "projects/your-image.webp",
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://your-live-project.com",
    githubUrl: "https://github.com/your-username/repo",
  },
];
```

**Adding project images:**
1. Place images in `public/projects/` folder
2. Reference them as `projects/your-image.webp`

#### 4.3 Skills (`config/user-data/skills.ts`)

Update your skills:
```typescript
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "ri-react-line" },
      { name: "TypeScript", icon: "ri-typescript-line" },
    ],
  },
];
```

### Step 5: Customize Theme Colors

Edit `config/theme.ts`:

```typescript
export const themeColors: ThemeColors = {
  light: {
    background: "#ffffff",        // Light mode background
    primary: "#your-brand-color", // Your brand color
    // ... other colors
  },
  dark: {
    background: "#0e0516",        // Dark mode background
    primary: "#your-brand-color", // Can be same or different
    // ... other colors
  },
};
```

**Quick color change tips:**
- Use [Coolors.co](https://coolors.co) for color palettes
- Test contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Primary color should work in both light and dark modes

### Step 6: Update SEO Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your unique description...",
  verification: {
    google: "your-google-verification-code", // Optional
  },
  openGraph: {
    images: [{
      url: "https://your-domain.com/photo-gallery/portfolio.jpg",
      width: 1200,
      height: 630,
      alt: "Your Name - Professional Photo",
    }],
  },
};
```

**Getting Google Verification Code:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain)
3. Choose "HTML tag" verification method
4. Copy the content value and paste it in `verification.google`

### Step 7: Add Your Images

Replace placeholder images in `public/`:

- `public/photo-gallery/portfolio.jpg` - Your main photo
- `public/projects/*` - Project screenshots
- `public/services/*` - Service images (if using services section)

**Image optimization tips:**
- Use WebP format for better performance
- Keep images under 200KB when possible
- Use consistent aspect ratios

### Step 8: Run Locally

```bash
pnpm dev
# or
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

### Step 9: Test Everything

Before deploying, check:
- [ ] All links work
- [ ] Contact form sends emails (after adding Resend key)
- [ ] Theme toggle works
- [ ] Mobile responsive design looks good
- [ ] All images load correctly
- [ ] No console errors

### Step 10: Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_BASE_URL`
6. Click "Deploy"

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 

| Task | Estimated Time |
|------|---------------|
| Installation & Setup | 10 minutes |
| Content Customization | 20-30 minutes |
| Theme & Colors | 10 minutes |
| SEO & Metadata | 10 minutes |
| Testing | 10 minutes |
| **Total** | **~1 hour** |

## -- Customization Checklist

- [ ] Updated personal information in `about.ts`
- [ ] Added your projects in `projects.ts`
- [ ] Changed theme colors in `theme.ts`
- [ ] Updated SEO metadata in `layout.tsx`
- [ ] Added your images to `public/`
- [ ] Set up Resend API key in `.env.local`
- [ ] Tested locally
- [ ] Deployed to Vercel

## Common Issues

### Issue: "Module not found" errors
**Solution:** Run `pnpm install` or `npm install`

### Issue: Contact form not sending emails
**Solution:** 
1. Check if `RESEND_API_KEY` is set in `.env.local`
2. Verify the API key is correct
3. Restart the dev server

### Issue: Theme not changing
**Solution:** Clear browser cache and hard refresh (Ctrl+Shift+R)

### Issue: Images not loading
**Solution:** 
1. Check image paths are correct
2. Ensure images are in the `public/` folder
3. Restart dev server

##  Next Steps

After completing setup:
1. Read [STYLE_GUIDE.md](./STYLE_GUIDE.md) for advanced theming
2. Read [SEO_GUIDE.md](./SEO_GUIDE.md) for SEO optimization
3. Read [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues

## Pro Tips

1. **Keep backups**: Before making major changes, commit your current state
2. **Test on mobile**: Use Chrome DevTools to test responsive design
3. **Performance**: Compress images before uploading
4. **Accessibility**: Use semantic HTML and proper alt text
5. **Analytics**: Consider adding Vercel Analytics or Google Analytics

## Need Help?

- Email: mehak313naqvi@gmail.com
- LinkedIn: [linkedin.com/in/miss-kniz](https://linkedin.com/in/miss-kniz)
- Issues: [Open an issue on GitHub](https://github.com/miss-kniz/portfolio-template/issues)

---

Happy building!
