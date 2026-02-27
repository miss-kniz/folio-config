// ========================================
// PORTFOLIO CONFIGURATION FILE
// ========================================
// Edit this file to personalize your portfolio
// All sections are typed for safety and autocomplete


export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
    username: string;
}

export interface ExperienceItem {
    role: string;
    company?: string;        // Optional: can be omitted if freelancing
    description?: string;    // Optional: brief description of responsibilities
    period?: string;         // Optional: e.g., "2022 - Present"
}

export interface EducationItem {
    degree: string;
    institution: string;
    description?: string;    // Optional: additional details
    period?: string;         // Optional: e.g., "2018 - 2022"
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
        heading: string;
        paragraphs: string[];
        skills: string[];
        interests: string[];
    };
    
    // Experience Section (Career)
    experience: ExperienceItem[];
    
    // Education Section (Academic)
    education?: EducationItem[];  // Optional: can be omitted
    
    // Personal
    hobbies: string[];
    
    // Social Links
    socialLinks: SocialLink[];
    
    // Contact Info
    contact: {
        email: string;
        phone?: string;           // Optional: can be omitted for privacy
        location: string;
        preferredMethod: 'email' | 'phone' | 'linkedin' | 'whatsapp';
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
        shortBio: "A passionate developer creating amazing web applications with React and modern technologies.",
        ctaText: "View My Work",
        ctaLink: "#projects"
    },
    
    // ---------- About Me Section ----------
    aboutMe: {
        heading: "About Me",
        paragraphs: [
            "I'm a passionate developer with 5 years of experience in web development. I love creating elegant solutions to complex problems.",
            "When I'm not coding, you can find me hiking and photography. I believe in continuous learning and sharing knowledge with the community."
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Node.js", "Next.js"],
        interests: ["Open Source", "Tech Writing", "UI/UX Design"]
    },
    
    // ---------- Work Experience ----------
    experience: [
        {
            role: "Frontend Developer – Freelance / Remote",
            company: "LinkedIn",  // Can be company name or "Freelance"
            description: "Built and optimized multiple web products for startups and small businesses",
            period: "2022 - Present"  // Optional: add if you want
        },
        {
            role: "Junior Developer",
            company: "Tech Startup Co.",
            description: "Worked on responsive web applications using React and TailwindCSS",
            period: "2021 - 2022"
        }
        // Add more experience items as needed
    ],
    
    // ---------- Education ----------
    education: [
        {
            degree: "BSCS",
            institution: "Virtual University",
            description: "Deepening knowledge in full-stack development and software engineering principles.",
            period: "2020 - 2024"  // Optional
        }
        // Add more education items as needed
    ],
    
    // ---------- Personal Interests/Hobbies ----------
    hobbies: ["Sketching", "Dancing", "Exploring AI-generated designs"],
    
    // ---------- Social Media Links ----------
    // these are remix icons classes
    socialLinks: [
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/mehak-fatima-naqvi",
            icon: "ri-linkedin-fill",
            username: "@mehak-fatima-naqvi"
        },
        {
            platform: "GitHub",
            url: "https://github.com/yourusername",
            icon: "ri-github-fill",
            username: "@yourusername"
        },
        {
            platform: "Twitter",
            url: "https://twitter.com/yourusername",
            icon: "ri-twitter-x-fill",
            username: "@yourusername"
        },
        {
            platform: "Instagram",
            url: "https://instagram.com/yourusername",
            icon: "ri-instagram-fill",
            username: "@yourusername"
        }
    ],
    
    // ---------- Contact Information ----------
    contact: {
        email: "mehak@example.com",
        phone: "+1234567890",           // Optional: remove if you want privacy
        location: "San Francisco, CA",
        preferredMethod: "email"         // Options: 'email' | 'phone' | 'linkedin' | 'whatsapp'
    }
};

export default aboutData;


export type { AboutData }; 