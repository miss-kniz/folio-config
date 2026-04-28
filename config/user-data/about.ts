// ========================================
// PORTFOLIO CONFIGURATION FILE
// ========================================
// Edit this file to personalize your portfolio
// All sections are typed for safety and autocomplete

export interface SocialLink {
  platform: string;
  url?: string;
  icon: string;
}

export interface HobbiesItem {
  label: string;
  link?: string;
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
  showCurtain: boolean; // Show decorative curtains in Hero section
  topText?: string; // Optional: small text above name/title in Hero section
  highlightsFromTopText: string[]; // Words from topText to highlight (optional)
  // Hero Section
  hero: {
    headline: string;
    highlightedWords?: string[]; // Optional: words in headline to highlight
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    heroPara: string;
  };

  // About Me Section
  aboutMe: {
    heading: { normalText: string; highlightedText: string };
    paragraphs: string[];
    skills: string[];
    interests: string[];
    highlightedAboutRole: string[];
    aboutCTA: string;
    aboutSecondaryCTA?: {
      text: string;
      icon?: string; // optional
      onClick?: () => void; // optional
    };
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

  hobbies: HobbiesItem[];

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

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/miss-kniz",
  instagram: "https://www.instagram.com/miss-kniz",
  github: "https://www.github.com/miss_kniz",
};

// PORTFOLIO DATA
// ========================================
// 👇 Edit everything below this line 👇

export const portfolioForJob = true; // can be for freelancing the service section and others will work

const aboutData: AboutData = {
  // ---------- Basic Info ----------
  name: "Mehak Fatima Naqvi - Miss Kniz",
  title: "Full Stack Developer",
  showCurtain: true, // Set to false to hide decorative curtains in Hero section

  topText: "Available for Contact base or permanent Remote Roles",
  highlightsFromTopText: ["Available", "Remote"],

  // ---------- Hero Section ----------
  hero: {
    headline: "Turning Ideas Into High Performing Digital Products",
    highlightedWords: ["Ideas Into", "Digital Products"], // Optional: words in headline to highlight
    primaryCtaText: "View Resume", // e.g., "Hire Me", "Download Resume"
    primaryCtaLink:
      "https://docs.google.com/document/d/1RWiaPjxjxr_cjxwo3uDriRe3rav1rmTasqtgRGrpz80/edit?usp=sharing",
    secondaryCtaText: "Book a Call",
    secondaryCtaLink: "https://calendar.app.google/fpRU2qDXNfbg4BSK8",
    heroPara:
      "I Help Startups and freelance teams Ship Fast, Scalable & High-Converting Web Apps", // can include escape char \n for line breaks if needed
  },

  // ---------- About Me Section ----------
  aboutMe: {
    heading: {
      normalText: "From dusty PC",
      highlightedText: "to strong {Developer}",
    },
    paragraphs: [
      "I'm Mehak, a Frontend Engineer who genuinely enjoys the puzzle of building things that work beautifully. Two years in, and I still get excited when a performance fix shreds load time or a UI finally clicks into place.",
      "When I'm not coding, you'll find me watching K-dramas, exploring nature, or doing what I love most, sitting on the rooftop at evening with a cup of milk tea, watching the world slow down. That quiet is where my best ideas come from.",
    ],
    skills: ["React", "TypeScript", "TailwindCSS", "Node.js", "Next.js"],
    interests: ["Open Source", "Tech Writing", "UI/UX Design"],
    highlightedAboutRole: [
      "Frontend Engineer",
      "PERN-stack Developer",
      "React & Next.js Specialist",
    ],
    aboutCTA: "View my Journey",
    aboutSecondaryCTA: {
      text: "Connect on",
      icon: "ri-linkedin-box-fill",
      onClick: () => {
        window.open(socialLinks.linkedin, "_blank");
      },
    },
    personalStory: {
      id: 1,
      title: "From Intermediate Student to First Tech Job",
      description:
        "A 4-minute read about resilience, loans, factory work, and breaking into tech.",
      imageUrl: "/photo-gallery/journey.png", // or any image you want
      link: "https://medium.com/@mehak313naqvi/from-intermediate-student-to-first-tech-job-the-journey-which-still-hasnt-ended-e77a47b28748",
    },
  },

  // ---------- Work Experience ----------
  experience: [
    {
      role: "Frontend-Focused Full-Stack Developer",
      company: "ThinkBuilt Solutions - Remote",
      description:
        "Next.js, TypeScript, Node.js, Prisma, PostgreSQL, React, tailwindCSS \n Built Leadlyft, cherished-Lives and Physemp",
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
  // ---------- Education ----------
  education: [
    {
      degree: "BSCS",
      institution: "Virtual University",
      description: "Software engineering and computer architectures.",
      period: "2023 - 2027", // Optional
    },
  ],

  // ---------- Personal Interests/Hobbies ----------
  hobbies: [
    { label: "Sketching", link: "" },
    { label: "UX research", link: "" },
    { label: "Experimenting with AI tools", link: "" },
    { label: "Learning new tech", link: "" },
    { label: "Scrolling LinkedIn", link: "https://www.linkedin.com/miss-kniz" },
  ],

  // ---------- Social Media Links ----------
  // these are remix icons classes
  socialLinks: [
    {
      platform: "LinkedIn",
      url: socialLinks["linkedin"],
      icon: "ri-linkedin-fill",
    },
    {
      platform: "GitHub",
      url: socialLinks["github"],
      icon: "ri-github-fill",
    },
    {
      platform: "Twitter",
      icon: "ri-twitter-x-fill",
    },
    {
      platform: "Instagram",
      // url: socialLinks["instagram"],
      icon: "ri-instagram-fill",
    },
  ],

  // ---------- Contact Information ----------
  contact: {
    email: "mehak313naqvi@gmail.com",
    location: "Remote — UK Hours",
    preferredMethod: "linkedin", // Options: 'email' | 'phone' | 'linkedin' | 'whatsapp'
  },
};

export default aboutData;
