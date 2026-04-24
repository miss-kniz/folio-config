# Portfolio Reusable Open-Source Template

A **fully dynamic, data-driven portfolio template** built with Next.js and TypeScript. All content is centralized in configuration files, making it easy to customize and reuse for multiple portfolios.

## 🎯 Quick Start

1. **Install dependencies**: `pnpm install` (or `npm install`)
2. **Configure your portfolio**: Edit `/config/site-config.ts`
3. **Run development server**: `pnpm dev`
4. **Deploy**: Build with `pnpm build`

## ✨ Key Features

### 🔄 Dynamic Configuration
- **Single source of truth**: All data in `/config/site-config.ts`
- **Type-safe editing**: Full TypeScript autocomplete support
- **Two modes**: Switch between job-seeking and freelancing instantly

### 📱 Responsive Sections
- **Hero Section**: Availability badge, animated headline, dual CTAs
- **About Section**: Personal story, role highlights, journey modal
- **Projects**: Filterable portfolio with case studies
- **Skills**: Interactive orbital display (job-seeking mode)
- **Services**: Service cards (freelancing mode)
- **Contact**: Form + direct contact info + social links

### 🎨 Design Features
- **Theme adaptive**: Auto-adjusts to system dark/light mode
- **Decorative elements**: Animated curtains, glow effects
- **Smooth animations**: Framer Motion powered transitions
- **Mobile-first**: Bottom navigation for mobile devices

## 📁 Project Structure

```
/config                    # ⭐ ALL DATA LIVES HERE
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
```

## 🔧 Configuration Guide

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

## 🚀 Template Reuse

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

## 📝 Detailed Documentation

See **[CONFIGURATION_GUIDE.md](./CONFIGURATION_GUIDE.md)** for:
- Complete configuration options
- Customization tips
- Best practices
- Troubleshooting

## 🛠 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Phosphor Icons + Remix Icons
- **UI Components**: Radix UI primitives

## 📄 License

Open-source template - feel free to use for your own portfolio or client work!

---

**Built with ❤️ for developers who want a professional portfolio without the hassle.**
