import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Script from "next/script";
import { metadataSEO } from "@/config/seo";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://mehak-naqvi.vercel.app/";

export const metadata: Metadata = metadataSEO;

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
