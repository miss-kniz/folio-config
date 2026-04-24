// ========================================
// PORTFOLIO TEMPLATE - MAIN CONFIGURATION
// ========================================
// This is the single source of truth for your portfolio.
// Edit this file to personalize your portfolio.
// All sections are typed for safety and autocomplete.

import { AboutData } from "./user-data/about";
import { ProjectItem } from "./user-data/projects";
import { ServiceItem } from "./user-data/services";
import { Skill, Category } from "./user-data/skills";

// ── Site Metadata (SEO & Branding) ───────────────────────────
export interface SiteMetadata {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  author: string;
  keywords: string[];
  ogImage: string; // Path to Open Graph image
  favicon: string; // Path to favicon
  themeColor: string; // For browser theme color
}

// ── Portfolio Mode Configuration ─────────────────────────────
export type PortfolioMode = "job-seeking" | "freelancing";

export interface PortfolioConfig {
  // Basic Info
  mode: PortfolioMode; // Controls whether to show Skills (job) or Services (freelancing)
  
  // Personal Info
  name: string;
  title: string;
  tagline: string; // Short tagline for SEO/meta
  
  // Visual Settings
  showCurtains: boolean; // Show decorative curtains in Hero section
  profileImage: string; // Path to profile photo
  
  // Hero Section
  hero: {
    headline: string;
    highlightedWords?: string[]; // Words in headline to highlight
    subheadline: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    availabilityBadge?: string; // e.g., "Available for UK Remote Roles"
    badgeHighlights?: string[]; // Words to highlight in badge
  };
  
  // About Section
  about: {
    heading: { normalText: string; highlightedText: string };
    paragraphs: string[];
    roles: string[]; // Multiple role titles to display
    skills: string[];
    interests: string[];
    ctaText: string;
    secondaryCta?: {
      text: string;
      icon?: string;
      link?: string;
    };
    personalStory?: {
      title: string;
      description: string;
      imageUrl: string;
      link: string;
    };
  };
  
  // Experience (Career History)
  experience: Array<{
    role: string;
    company?: string;
    description?: string;
    period?: string;
  }>;
  
  // Education (Optional)
  education?: Array<{
    degree: string;
    institution: string;
    description?: string;
    period?: string;
  }>;
  
  // Hobbies/Interests
  hobbies: Array<{
    label: string;
    link?: string;
  }>;
  
  // Contact Information
  contact: {
    email: string;
    phone?: string;
    location: string;
    preferredMethod: "email" | "phone" | "linkedin" | "whatsapp";
  };
  
  // Social Media Links
  socialLinks: Array<{
    platform: string;
    url?: string;
    icon: string; // Remix icon class
  }>;
}

// ── Default Configuration ────────────────────────────────────
// 👇 Edit everything below this line 👇

export const siteMetadata: SiteMetadata = {
  siteName: "Mehak Fatima Naqvi - Full Stack Developer",
  siteDescription: 
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. Building fast, scalable, and high-converting web applications.",
  siteUrl: "https://your-portfolio.com", // Replace with your domain
  author: "Mehak Fatima Naqvi",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Web Developer",
    "TypeScript",
    "Portfolio",
  ],
  ogImage: "/og-image.png", // Add this image to /public folder
  favicon: "/favicon.ico",
  themeColor: "#7B2CBF",
};

export const portfolioConfig: PortfolioConfig = {
  mode: "job-seeking", // Change to "freelancing" to show services instead of skills
  
  // Basic Info
  name: "Mehak Fatima Naqvi",
  title: "Full Stack Developer",
  tagline: "Turning Ideas Into High Performing Digital Products",
  
  // Visual Settings
  showCurtains: true,
  profileImage: "/photo-gallery/my-picture.png",
  
  // Hero Section
  hero: {
    headline: "Turning Ideas Into High Performing Digital Products",
    highlightedWords: ["Ideas Into", "Digital Products"],
    subheadline: 
      "I Help Startups and freelance teams Ship Fast, Scalable & High-Converting Web Apps",
    primaryCtaText: "Hire Me",
    primaryCtaLink: 
      "https://docs.google.com/document/d/1RWiaPjxjxr_cjxwo3uDriRe3rav1rmTasqtgRGrpz80/edit?usp=sharing",
    secondaryCtaText: "Book a Call",
    secondaryCtaLink: "https://calendar.app.google/fpRU2qDXNfbg4BSK8",
    availabilityBadge: "Available for UK Remote Roles",
    badgeHighlights: ["UK Remote"],
  },
  
  // About Section
  about: {
    heading: {
      normalText: "From dusty PC",
      highlightedText: "to strong {Developer}",
    },
    paragraphs: [
      "I'm Mehak, a Frontend Engineer who genuinely enjoys the puzzle of building things that work beautifully. Two years in, and I still get excited when a performance fix shreds load time or a UI finally clicks into place.",
      "When I'm not coding, you'll find me watching K-dramas, exploring nature, or doing what I love most, sitting on the rooftop at evening with a cup of milk tea, watching the world slow down. That quiet is where my best ideas come from.",
    ],
    roles: [
      "Frontend Engineer",
      "PERN-stack Developer",
      "React & Next.js Specialist",
    ],
    skills: ["React", "TypeScript", "TailwindCSS", "Node.js", "Next.js"],
    interests: ["Open Source", "Tech Writing", "UI/UX Design"],
    ctaText: "View my Journey",
    secondaryCta: {
      text: "Connect on",
      icon: "ri-linkedin-box-fill",
      link: "https://www.linkedin.com/in/miss-kniz",
    },
    personalStory: {
      title: "From Intermediate Student to First Tech Job",
      description: 
        "A 4-minute read about resilience, loans, factory work, and breaking into tech.",
      imageUrl: "/photo-gallery/journey.png",
      link: "https://medium.com/@mehak313naqvi/from-intermediate-student-to-first-tech-job-the-journey-which-still-hasnt-ended-e77a47b28748",
    },
  },
  
  // Work Experience
  experience: [
    {
      role: "Frontend-Focused Full-Stack Developer",
      company: "ThinkBuilt Solutions - Remote",
      description: "Next.js, TypeScript, Node.js, Prisma, PostgreSQL",
      period: "Mar 2025 - Present",
    },
    {
      role: "Frontend Developer",
      company: "Prep Plate (SaaS Product) - Contract",
      description: 
        "Built responsive meal planning UI using React and Redux Toolkit.",
      period: "Dec 2024 - Mar 2025",
    },
    {
      role: "Frontend Intern",
      company: "CodeAlpha - Remote",
      description: "UI responsiveness & usability fixes",
      period: "Oct 2024 - Nov 2024",
    },
  ],
  
  // Education
  education: [
    {
      degree: "BSCS",
      institution: "Virtual University",
      description: "Software engineering and computer architectures.",
      period: "2023 - 2027",
    },
  ],
  
  // Hobbies
  hobbies: [
    { label: "Sketching", link: "" },
    { label: "UX research", link: "" },
    { label: "Experimenting with AI tools", link: "" },
    { label: "Learning new tech", link: "" },
    { label: "Scrolling LinkedIn", link: "https://www.linkedin.com/miss-kniz" },
  ],
  
  // Contact
  contact: {
    email: "mehak313naqvi@gmail.com",
    location: "Remote — UK Hours",
    preferredMethod: "linkedin",
  },
  
  // Social Links
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/miss-kniz",
      icon: "ri-linkedin-fill",
    },
    {
      platform: "GitHub",
      url: "https://www.github.com/miss_kniz",
      icon: "ri-github-fill",
    },
    {
      platform: "Twitter",
      icon: "ri-twitter-x-fill",
    },
    {
      platform: "Instagram",
      icon: "ri-instagram-fill",
    },
  ],
};

// Re-export existing data modules for backward compatibility
export { default as aboutData } from "./user-data/about";
export { projects, TECH_STACK, type ProjectItem } from "./user-data/projects";
export { services, type ServiceItem } from "./user-data/services";
export { 
  SKILLS, 
  CATEGORIES, 
  skillPara, 
  type Skill, 
  type Category 
} from "./user-data/skills";
export { type CaseStudy } from "./user-data/case-study/cherished-lives";

// Helper to check portfolio mode
export const isJobSeeking = portfolioConfig.mode === "job-seeking";
export const isFreelancing = portfolioConfig.mode === "freelancing";
