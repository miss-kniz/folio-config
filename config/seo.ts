import { Metadata } from "next";
import aboutData from "./user-data/about";

const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://misskniz.app"
).replace(/\/$/, "");

export const metadataSEO: Metadata = {
  title: "Freelance Full-Stack Developer for Hire | Mehak Naqvi",
  metadataBase: new URL(BASE_URL),
  description:
    "Freelance full-stack developer specializing in Next.js, React, and Node.js. I build SaaS products, web apps, and MVPs for startups and founders. Remote. Book a discovery call.",
  verification: {
    google: "8cGWQBP5rucbnE3RCQoMp_D6RxaVKbrSaVhm18o_oxE",
  },
  keywords: [
    // Brand
    "Mehak Fatima Naqvi",
    "Mehak Naqvi",
    "Miss Kniz",
    // High-intent hire terms
    "freelance full-stack developer",
    "hire freelance web developer",
    "hire full-stack developer",
    "freelance Next.js developer",
    "freelance React developer",
    "Next.js developer for hire",
    "React developer for hire",
    // Service-specific
    "SaaS developer for hire",
    "MVP development freelancer",
    "web app developer freelance",
    "freelance Node.js developer",
    // Remote + market
    "remote freelance developer",
    "freelance developer for startups",
    "freelance web developer UK",
    "freelance web developer Europe",
    "freelance web developer US",
    "freelance developer United States",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Freelance Full-Stack Developer for Hire | Mehak Naqvi",
    description:
      "I build SaaS products, web apps, and MVPs for startups. Next.js, React, Node.js. Remote. Book a call.",
    url: BASE_URL,
    siteName: `${aboutData.name} Portfolio`,
    images: [
      {
        url: `${BASE_URL}/photo-gallery/portfolio.jpg`,
        width: 1200,
        height: 630,
        alt: `${aboutData.name} - ${aboutData.title}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
