// ========================================
// PORTFOLIO CONFIGURATION FILE
// ========================================
// Edit this file to personalize your portfolio
// All sections are typed for safety and autocomplete

export interface SocialLink {
  platform: string;
  url?: string;
  icon: string;
  username: string;
}

export interface ExperienceItem {
  role: string;
  company?: string; // Optional: can be omitted if freelancing
  description?: string; // Optional: brief description of responsibilities
  period?: string; // Optional: e.g., "2022 - Present"
}

export interface EducationItem {
  degree: string;
  institution: string;
  description?: string; // Optional: additional details
  period?: string; // Optional: e.g., "2018 - 2022"
}

export interface AboutData {
  // Personal Info
  name: string;
  title: string;

  // Hero Section
  hero: {
    greeting: string;
    headline: string;
    shortBio: string;
    ctaText: string;
    ctaLink: string;
  };

  // About Me Section
  aboutMe: {
    heading: { normalText: string; highlightedText: string };
    paragraphs: string[];
    skills: string[];
    interests: string[];
    hightlightedAboutRole: string[];
    aboutCTA: "View my Journey";

    // Personal story config (optional for template users)
    personalStory?: {
      id: number; // for badge or ordering
      title: string; // blog title
      description: string; // short preview
      imageUrl: string; // small image for card
      link: string; // blog URL
    };
  };

  // Experience Section (Career)
  experience: ExperienceItem[];

  // Education Section (Academic)
  education?: EducationItem[]; // Optional: can be omitted

  // Personal
  hobbies: string[];

  // Social Links
  socialLinks: SocialLink[];

  // Contact Info
  contact: {
    email: string;
    phone?: string; // Optional: can be omitted for privacy
    location: string;
    preferredMethod: "email" | "phone" | "linkedin" | "whatsapp";
  };
}

// ========================================
// YOUR PORTFOLIO DATA
// ========================================
// 👇 Edit everything below this line 👇

const aboutData: AboutData = {
  // ---------- Basic Info ----------
  name: "Mehak Fatima Naqvi",
  title: "Full Stack Developer",

  // ---------- Hero Section ----------
  hero: {
    greeting: "Hi, I'm",
    headline: "Building digital experiences that matter",
    shortBio:
      "A passionate developer creating amazing web applications with React and modern technologies.",
    ctaText: "View My Work",
    ctaLink: "#projects",
  },

  // ---------- About Me Section ----------
  aboutMe: {
    heading: {
      normalText: "From dusty PC",
      highlightedText: "to strong {Developer}",
    },
    paragraphs: [
      "I'm a Mehak a developer with 3 years of experience in web development. I love creating elegant solutions to complex problems. { Problem solving lover }",
      "When I'm not coding, you can find me hiking and photography. I believe in continuous learning and sharing knowledge with the community.",
    ],
    skills: ["React", "TypeScript", "TailwindCSS", "Node.js", "Next.js"],
    interests: ["Open Source", "Tech Writing", "UI/UX Design"],
    hightlightedAboutRole: [
      "Full-Stack Ninja",
      "Scalable Web Solutions Expert",
      "React & Next.js Pro",
      "Web Performance Optimizer",
      "UX Expert",
      "Digital Problem Solver",
    ],
    aboutCTA: "View my Journey",
    personalStory: {
      id: 1,
      title: "From Intermediate Student to First Tech Job",
      description:
        "A 4-minute read about resilience, loans, factory work, and breaking into tech.",
      imageUrl: "/Mehak.png", // or any image you want
      link: "https://medium.com/@mehak313naqvi/from-intermediate-student-to-first-tech-job-the-journey-which-still-hasnt-ended-e77a47b28748",
    },
  },

  // ---------- Work Experience ----------
  experience: [
    {
      role: "Full-stack Developer – Freelance / Remote",
      company: "LinkedIn", // Can be company name or "Freelance"
      description:
        "Built and optimized multiple web products for startups and small businesses",
      period: "Jan, 2026 - Present", // Optional: add if you want
    },
    {
      role: "Full-stack Developer",
      company: "ThinkBuild Solution",
      description:
        "Worked on high performing, rich featured SaaS applications using React/Next, TailwindCSS, Node, Express, Prisma an Postgres",
      period: "August, 2024 - Present",
    },
    {
      role: "Frontend Developer",
      company: "ThinkBuild Solution",
      description:
        "Worked on responsive web applications using React and TailwindCSS",
      period: "March, 2024 - August, 2024",
    },
  ],

  // ---------- Education ----------
  education: [
    {
      degree: "BSCS",
      institution: "Virtual University",
      description: "Software enginring and computer architectures.",
      period: "2023 - 2027", // Optional
    },
  ],

  // ---------- Personal Interests/Hobbies ----------
  hobbies: [
    "Sketching",
    "UX reserch",
    "Experimenting with new AI Tools",
    "Learning new tech",
  ],

  // ---------- Social Media Links ----------
  // these are remix icons classes
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/mehak-fatima-naqvi",
      icon: "ri-linkedin-fill",
      username: "@mehak-fatima-naqvi",
    },
    {
      platform: "GitHub",
      url: "https://github.com/miss-kniz",
      icon: "ri-github-fill",
      username: "@miss-kniz",
    },
    {
      platform: "Twitter",
      icon: "ri-twitter-x-fill",
      username: "@yourusername",
    },
    {
      platform: "Instagram",
      icon: "ri-instagram-fill",
      username: "@yourusername",
    },
  ],

  // ---------- Contact Information ----------
  contact: {
    email: "mehak313naqvi@gmail.com",
    location: "Faisalabad, PK",
    preferredMethod: "linkedin", // Options: 'email' | 'phone' | 'linkedin' | 'whatsapp'
  },
};

export default aboutData;
