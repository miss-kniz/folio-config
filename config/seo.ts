import { Metadata } from "next";
import aboutData from "./user-data/about";

const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://mehak-naqvi.vercel.app"
).replace(/\/$/, "");

const pageTitle = aboutData.alias
  ? `${aboutData.name} | ${aboutData.alias} — ${aboutData.title}`
  : `${aboutData.name} — ${aboutData.title}`;

export const metadataSEO: Metadata = {
  title: pageTitle,
  description: aboutData.hero.heroPara,
  verification: {
    google: "8cGWQBP5rucbnE3RCQoMp_D6RxaVKbrSaVhm18o_oxE",
  },
  keywords: [
    "Mehak Fatima Naqvi",
    "Mehak Naqvi",
    "Mehak Fatima",
    "Mehak",
    "Mehak Asad",
    "Miss Mehak",
    "Fatima Naqvi",
    "Miss Naqvi",
    "Naqvi",
    "miss-kniz",
    "miss kniz",
    "Miss Kniz",
    "kniz",
    "Full-Stack Developer Faisalabad",
    "PERN Stack Developer",
    "Top React developer Pakistan",
    "Top Frontend Developer",
    "Talented undergraduate developer",
    "Top Next.js developer",
    "PERN Stack Developer Pakistan",
    "Web Architecture Expert",
    "Frontend Engineer",
    "Scalable Frontend Architect",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: aboutData.alias
      ? `${aboutData.name} | ${aboutData.alias}`
      : aboutData.name,
    description: aboutData.hero.heroPara,
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
    locale: "en_PK",
    type: "website",
  },
};
