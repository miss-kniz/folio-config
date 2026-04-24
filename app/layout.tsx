import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Script from "next/script";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://mehak-naqvi.vercel.app/";

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}

        {/* Structured Data: Directly connects your portfolio to your LinkedIn and GitHub */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mehak Fatima Naqvi",
              alternateName: "miss-kniz",
              url: "https://mehak-naqvi.vercel.app",
              image:
                "https://mehak-naqvi.vercel.app/photo-gallery/portfolio.jpg",
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "ThinkBuildSol",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Faisalabad",
                addressCountry: "PK",
              },
              sameAs: [
                "https://www.linkedin.com/in/miss-kniz",
                "https://github.com/miss-kniz",
              ],
              description:
                "Full-stack developer specializing in PostgreSQL, Express, React, and Next.js (PERN stack).",
            }),
          }}
        />
      </body>
    </html>
  );
}
