import { BASE_URL } from "@/app/layout";
import { Metadata } from "next";

export const metadataSEO: Metadata = {
  title: "Mehak Fatima Naqvi | PERN-Stack Developer (Miss Kniz)",
  description:
    "Mehak Fatima Naqvi (miss-kniz) is a React & Next.js developer based in Faisalabad, Pakistan, specializing in the PERN stack and building scalable web apps for startups.",
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
    "miss kniz",
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
    title: "Mehak Fatima Naqvi Portfolio",
    description:
      "Frontend-Focused Full-Stack Developer specializing in React, Next.js, and PERN stack.",
    url: "https://mehak-naqvi.vercel.app",
    siteName: "Mehak Fatima Naqvi Portfolio",
    images: [
      {
        url: "https://mehak-naqvi.vercel.app/photo-gallery/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Mehak Fatima Naqvi - Full Stack Developer",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};
