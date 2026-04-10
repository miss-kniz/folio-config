import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mehak Fatima Naqvi | Full-Stack PERN Developer (miss-kniz)",
  description:
    "Mehak Fatima Naqvi (miss-kniz) is a React & Next.js developer based in Faisalabad, Pakistan, specializing in the PERN stack and building scalable web apps for startups.",
  keywords: [
    "Mehak Fatima Naqvi",
    "miss-kniz",
    "Full-Stack Developer Faisalabad",
    "PERN Stack Developer",
    "miss kniz",
    "Top React developer Pakistan",
    "Top Frontend Developer",
    "Talented undergraduate developer",
    "Top Next.js developer",
    "PERN Stack Developer Pakistan",
    "Web Architecture Expert",
  ],
  alternates: {
    canonical: "https://mehak-naqvi.vercel.app",
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
