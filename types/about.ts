
export interface ExperienceItem
{
    role: string;
    company?: string;
    description?: string;
}

export interface EducationItem
{
    degree: string;
    institution: string;
    description?: string;
}

export interface AboutData
{
    experience: ExperienceItem[];
    education?: EducationItem[];
    hobbies: string[];
}

export const aboutData: AboutData = {
    experience: [
        {
            role: "Frontend Developer – Freelance / Remote",
            company: "LinkedIn",
            description: "Built and optimized multiple web products for startups and small businesses",
        },
    ],
    education: [
        {
            degree: "BSCS",
            institution: "Virtual University",
            description: "Deepening knowledge in full-stack development and software engineering principles.",
        },
    ],
    hobbies: ["Sketching", "Dancing", "Exploring AI-generated designs"],
};