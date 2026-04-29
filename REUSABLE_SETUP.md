# 🎨 Reusable Portfolio Setup Guide

This project is designed to be reused as a personal portfolio or as a starter template for another developer's portfolio.

## 🎯 Core Philosophy

- **Data-Driven Content**: All portfolio content lives in TypeScript config files, not in UI components
- **No Component Editing**: Customize everything through `.ts` files in `config/user-data/`
- **Type-Safe**: Full TypeScript support with IntelliSense for all configurations
- **Real-Time Updates**: Changes in config files automatically reflect in your portfolio
- **Single Source of Truth**: Environment variables and data configs are centralized

---

## 🚀 Quick Start

### 1. Clone or Fork the Repository

```bash
git clone <repo-url>
cd Portfolio
npm install
npm run dev
```

Your portfolio will be live at `http://localhost:3000`

### 2. Set Up Environment Variables

Copy the example env file and fill in your details:

```bash
cp env.example .env.local
```

Open `.env.local` and add:

- **RESEND_API_KEY**: Get from [resend.com](https://resend.com) for contact form emails
- **NEXT_PUBLIC_BASE_URL**: Your live portfolio URL (after deployment)

---

## 📁 Project Structure Overview

The portfolio is **completely customizable** through these key files:

```
config/user-data/          ← All your content lives here
├── about.ts              ← Hero, About, Experience, Education, Contact
├── projects.ts           ← Portfolio projects display
├── services.ts           ← Services you offer
├── skills.ts             ← Technical skills with ring visualization
└── case-study/           ← Detailed project case studies
    ├── cherished-lives.ts
    ├── leadlyft.ts
    ├── likhSpire.ts
    └── prep&plate.ts
```

**All UI components are in `components/` and `app/` — you should NOT need to edit them.**

---

## 🔧 Complete Customization Guide

### Step 1: Customize About Section

**File**: [config/user-data/about.ts](./config/user-data/about.ts)

This is the **most important** file. It controls:

- ✅ Your name and title
- ✅ Hero headline and CTAs
- ✅ About me section with paragraphs
- ✅ Experience and Education
- ✅ Skills and interests
- ✅ Social links
- ✅ Contact information

#### Example Customization:

For Job or Freelancing

```typescript
export const portfolioForJob = true; // if false that will show service section instead of skills section
```

About data

```typescript
const aboutData: AboutData = {
  // Basic Info
  name: "Your Name",
  title: "Your Job Title",
  showCurtain: true, // Decorative background elements

  topText: "Your Status",
  highlightsFromTopText: ["Available", "Remote"],

  // Hero Section (Main headline section)
  hero: {
    headline: "Your Main Headline",
    highlightedWords: ["Your", "Headline"], // These will be styled differently in headline
    primaryCtaText: "Resume",
    primaryCtaLink: "https://your-resume-link.com",
    secondaryCtaText: "Hire Me",
    secondaryCtaLink: "https://your-calendar-link.com",
    heroPara: "Brief description of what you do",
  },

  // About Me Section
  aboutMe: {
    heading: {
      normalText: "Regular text",
      highlightedText: "highlighted {text}", // {text} will be styled
    },
    paragraphs: ["First paragraph about yourself", "Second paragraph"],
    skills: ["React", "TypeScript", "Node.js"],
    interests: ["Open Source", "Tech Writing"],
    highlightedAboutRole: ["Your", "Main", "Roles"],
    aboutCTA: "Button Text", // this button will open experience and education modal
  },

  // Experience (jobs you've had)
  experience: [
    {
      role: "Frontend Developer",
      company: "Company Name",
      description: "What you did",
      period: "2023 - Present",
    },
    // Add more experiences
  ],

  // Education (optional)
  education: [
    {
      degree: "Bachelor of Science",
      institution: "University Name",
      period: "2018 - 2022",
    },
  ],

  // Hobbies/Personal Interests
  hobbies: [
    { label: "Photography", link: "https://..." }, // link is optional
    { label: "Writing", link: "https://..." },
  ],

  // Social Links
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/...",
      icon: "ri-linkedin-box-fill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/...",
      icon: "ri-github-fill", // icon classes from https://remixicon.com/
    },
  ],

  // Contact Info
  contact: {
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890", // Optional
    location: "Your City, Country",
    preferredMethod: "email", // or "phone", "linkedin", "whatsapp"
  },
};
```

**💡 Tip**: After editing, save the file (`Ctrl+S`). Your browser will hot-reload automatically!

---

### Step 2: Customize Projects

**File**: [config/user-data/projects.ts](./config/user-data/projects.ts)

This file controls your portfolio projects showcase.

#### Basic Project Setup:

```typescript
const projects: ProjectItem[] = [
  {
    id: "project-1",
    title: "Project Title",
    description: "Brief project description",
    categories: ["web", "design"], // Used for filtering
    imageUrl: "projects/project-image.webp", // Path in public/projects/
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://project-live-url.com", optional
    githubUrl: "https://github.com/your-repo", optional
    caseStudy: detailedCaseStudyObject, // optional
  },
];
```

**Image Location**: Place your project images in `public/projects/` folder.

---

### Step 3: Customize Services

**File**: [config/user-data/services.ts](./config/user-data/services.ts)

This controls the services section in your portfolio.

#### Service Setup:

```typescript
export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Service Name",
    description: "What this service includes",
    imageUrl: "services/service-image.webp", // Path in public/services/
  },
];
```

**Image Location**: Place service images in `public/services/` folder.

---

### Step 4: Customize Skills

**File**: [config/user-data/skills.ts](./config/user-data/skills.ts)

This file creates the interactive skills visualization with 3 rings (inner, mid, outer).

#### Understanding the Skills Structure:

```typescript
const BASE_SKILLS: Omit<Skill, "angle">[] = [
  {
    id: "react",
    label: "React", // Short label for display
    name: "React", // Full name
    tags: ["Hooks", "Components", "JSX"], // Skills/subtags
    cat: ["frontend"], // Category: frontend, backend, tools, language
    ring: "inner", // Ring position: inner (core), mid, outer (learning)
    Icon: ReactIcon, // Icon component
    color: "#61DAFB", // Optional: custom color
  },
];
```

**Ring Placement Guide**:

- **Inner Ring**: Core skills you use daily
- **Mid Ring**: Important skills, less frequently used
- **Outer Ring**: Learning or emerging skills

---

### Step 5: Add Project Case Studies

**File**: [config/user-data/case-study/](./config/user-data/case-study/)

Each case study is a detailed breakdown of a project. Create files like `my-project.ts`:

```typescript
export const myProjectCaseStudy: CaseStudy = {
  bgImageUrl: "projects/case-study/my-project.png",

  introduction: "Overview of what the project is",

  overview: "What you built and your role",

  architecture: {
    description: "How the app is structured",
    structure: `
    app/
      components/
      pages/
    `,
  },

  challenges: [
    {
      title: "Challenge 1",
      body: "How you overcame it",
    },
  ],

  process: [
    {
      title: "Phase 1",
      body: "What you did",
    },
  ],

  features: [
    {
      title: "Feature Name",
      body: "How it works",
    },
  ],

  outcomes: [
    {
      value: "50%",
      desc: "Performance improvement",
    },
  ],

  reflection: "What you learned from this project",
};
```

Then import it in `projects.ts`:

```typescript
import { myProjectCaseStudy } from "./case-study/my-project";

const projects: ProjectItem[] = [
  {
    // ... other project details
    caseStudy: myProjectCaseStudy,
  },
];
```

---

## 🔄 Real-Time Customization Workflow

Follow these steps to customize and see changes instantly:

### 1. **Start the Development Server**

```bash
npm run dev
```

### 2. **Open the Config File**

- Open [config/user-data/about.ts](./config/user-data/about.ts) in your editor

### 3. **Make Changes**

```typescript
// Example: Change your name
name: "Your New Name";
```

### 4. **Save** (`Ctrl+S` on Windows, `Cmd+S` on Mac)

### 5. **See Changes Instantly**

The browser automatically reloads with your changes (no page refresh needed!)

---

## 📝 Important TypeScript Types Reference

### AboutData Structure

```typescript
interface AboutData {
  name: string; // Your name
  title: string; // Your job title
  showCurtain: boolean; // Show decorative curtains
  topText?: string; // Small text above name
  highlightsFromTopText: string[]; // Words to highlight

  hero: {
    headline: string; // Main headline
    highlightedWords?: string[]; // Words to highlight
    primaryCtaText: string; // Button 1 text
    primaryCtaLink: string; // Button 1 URL
    secondaryCtaText: string; // Button 2 text
    secondaryCtaLink: string; // Button 2 URL
    heroPara: string; // Description text
  };

  aboutMe: {
    heading: {
      normalText: string;
      highlightedText: string; // Use {word} for styling
    };
    paragraphs: string[];
    skills: string[];
    interests: string[];
    highlightedAboutRole: string[];
    aboutCTA: string;
    aboutSecondaryCTA?: {
      text: string;
      icon?: string;
      onClick?: () => void;
    };
  };

  experience: ExperienceItem[];
  education?: EducationItem[];
  hobbies: HobbiesItem[];
  socialLinks: SocialLink[];

  contact: {
    email: string;
    phone?: string; // Optional for privacy
    location: string;
    preferredMethod: "email" | "phone" | "linkedin" | "whatsapp";
  };
}
```

### ProjectItem Structure

```typescript
interface ProjectItem {
  id: string; // Unique ID (e.g., "project-1")
  title: string; // Project name
  description: string; // Short description
  categories: string[]; // For filtering (web, design, etc)
  imageUrl: string; // Path: public/projects/...
  technologies: string[]; // Tech used
  liveUrl?: string; // Live project URL
  githubUrl?: string; // GitHub repo URL
  isClientProject?: boolean; // Client work?
  result?: string; // Outcome
  bgImageUrl?: string; // Background image
  role?: string; // Your role
  context?: string; // Project context
  period?: string; // Time period
  introduction?: string; // Intro text
  caseStudy?: CaseStudy; // Detailed case study
  previewImage?: string; // Preview thumbnail
}
```

---

## 🎨 Image Assets Guide

### Where to Place Images

```
public/
├── projects/
│   ├── project-1.webp
│   ├── project-2.webp
│   └── case-study/
│       ├── project-1.png
│       └── project-1-overview.png
├── services/
│   ├── service-1.webp
│   └── service-2.webp
└── photo-gallery/
    └── your-images/
```

### Recommended Image Formats

- **Formats**: `.webp` (best), `.png`, `.jpg`
- **Project Images**: 1200x600px (16:9 ratio)
- **Service Images**: 400x300px
- **Case Study**: Any size (will be responsive)

### In Your Config Files

```typescript
// Always use relative paths from the public folder
imageUrl: "projects/my-project.webp"; // ✅ Correct
imageUrl: "public/projects/my-project.webp"; // ❌ Wrong
imageUrl: "/projects/my-project.webp"; // ❌ Use without /
```

---

## 🚀 Environment Variables Explained

**File**: `.env.local` (copy from `env.example`)

```bash
# Resend Email Service
# 1. Go to https://resend.com
# 2. Sign up (free tier available)
# 3. Create an API key
# 4. Paste it here
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Your Portfolio URL (after deployment)
# Update this after deploying to Vercel/Netlify
NEXT_PUBLIC_BASE_URL=https://yourportfolio.com
```

---

## ✨ Customization Checklist

- [ ] **Update `about.ts`** with your name, title, and bio
- [ ] **Add your projects** to `projects.ts`
- [ ] **Update services** in `services.ts` (optional if not a service provider)
- [ ] **Configure skills** in `skills.ts`
- [ ] **Add case studies** (optional, for detailed projects)
- [ ] **Set up `.env.local`** with Resend API key
- [ ] **Replace images** with your own (in `public/` folders)
- [ ] **Update social links** in `about.ts`
- [ ] **Set contact preferences** in `about.ts`
- [ ] **Test on mobile** - run `npm run dev` and check responsiveness

---

## 🐛 Troubleshooting

### Changes Not Showing Up?

1. **Save the file** (`Ctrl+S`)
2. **Check for syntax errors** - TypeScript will show red squiggles
3. **Restart dev server** - Stop (`Ctrl+C`) and run `npm run dev` again
4. **Hard refresh browser** - `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

### Images Not Loading?

1. **Check the path** - Use relative paths from `public/` folder
2. **File exists** - Verify image is in `public/` directory
3. **Use correct format** - Prefer `.webp` or `.png`
4. **Wrong path example**: `imageUrl: "/projects/image.webp"` should be `"projects/image.webp"`

### TypeScript Errors?

If you see red lines in your editor:

1. Check the error message (hover over the red line)
2. Ensure all required fields are filled
3. Check for typos in property names
4. Use the interface definition above as reference

---

## 📚 Next Steps

After customization:

1. **Deploy** to [Vercel](https://vercel.com) (free, takes 2 minutes)
2. **Set NEXT_PUBLIC_BASE_URL** in deployment environment variables
3. **Test contact form** - should receive emails via Resend
4. **Share your portfolio** with potential clients/employers!

---

## 💡 Pro Tips

- **Use highlighted words** for emphasis:

  ```typescript
  headline: "Building {Amazing} Digital {Products}";
  // Only "Amazing" and "Products" will be highlighted
  ```

- **Keep descriptions concise** - Users skim, they don't read walls of text

- **Update regularly** - Add new projects and learnings to keep it fresh

- **Test responsive design** - Open DevTools (`F12`) and check mobile view

- **Keep image sizes reasonable** - Compress images to keep site fast

---

**Happy customizing! Your portfolio is now fully configurable.** 🎉

# SEO and Sitemap

If you want to keep SEO in the project, complete the configuration in `config/seo.ts` and keep `app/sitemap.ts` in sync.

It is recommended to keep SEO in the project because it helps search engines show your portfolio for related keywords.

If you are short on time, either finish the SEO setup properly or remove the SEO and sitemap wiring completely instead of leaving it half-finished. That means deleting or disabling the `config/seo.ts` and `app/sitemap.ts` wiring together so the codebase stays clean and predictable.

Do not leave partial SEO or sitemap placeholders behind.
[Here is the guide to customize it or remove it completely.](./SEO_SETUP.md)

## Colors and Theme

You can change the primary colors in [app/globals.css](./app/globals.css) to match your own brand or portfolio style.

```css
:root {
  --background: #ffffff;
  --foreground: 14 5 22; /* rgb format for body text*/
  --primary: #7b2cbf; /*headings and highlighting colors*/
  --primary-light: #7a2cbf0f; /* light format with opacity 10 of primary color */
  --primary-dark: #4a148c;
  --black-light: #666666;
  --glass: rgba(255, 255, 255, 0.05);

  --font-serif: "Alegreya", serif;
  --font-geist-sans: "League Spartan", sans-serif;
}
```

If you do not want automatic dark theme detection, you can remove the `@media (prefers-color-scheme: dark)` block from `app/globals.css` and keep a single color theme instead.

```css
/* Remove this block completely*/
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0e0516;
    --foreground: 237 237 237;
    --black-light: #99a1af;
    --primary-light: #7a2cbf36;
  }
}
```

This is useful if you want full control over the look of the site and prefer a consistent palette in every mode.
