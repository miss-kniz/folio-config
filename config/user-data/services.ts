export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isDemo?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Landing Page Development",
    description: "Fast, SEO-friendly pages that convert.",
    imageUrl: "services/landing-page.webp",
    isDemo: false,
  },
  {
    id: 2,
    title: "Small SaaS Applications",
    description: "Lightweight, scalable apps for growth.",
    imageUrl: "services/SaaS.webp",
    isDemo: true,
  },
  {
    id: 3,
    title: "Website Performance Optimization",
    description: "Websites that load instantly on any device.",
    imageUrl: "services/optimization.webp",
    isDemo: true,
  },
  {
    id: 4,
    title: "Layout Fixes & UI Improvements",
    description: "Polished layouts with smooth responsiveness.",
    imageUrl: "services/ui-fixes.webp",
    isDemo: true,
  },
  {
    id: 5,
    title: "Figma / XD to Code with SEO",
    description: "Pixel-perfect, SEO-ready design-to-code.",
    imageUrl: "services/figma-to-code.webp",
    isDemo: true,
  },
];
