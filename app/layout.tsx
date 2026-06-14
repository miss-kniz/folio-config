import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Script from "next/script";
import { metadataSEO } from "@/config/seo";
import { RouteTransition } from "@/components/motion/Reveal";
import aboutData from "@/config/user-data/about";

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
        <RouteTransition>{children}</RouteTransition>

        {/* Structured Data: auto-derived from config/user-data/about.ts */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: aboutData.name,
              ...(aboutData.alias && { alternateName: aboutData.alias }),
              url: BASE_URL.replace(/\/$/, ""),
              image: `${BASE_URL.replace(/\/$/, "")}/photo-gallery/portfolio.jpg`,
              jobTitle: aboutData.title,
              ...(aboutData.experience[0]?.company && {
                worksFor: {
                  "@type": "Organization",
                  name: aboutData.experience[0].company.split(" - ")[0].trim(),
                },
              }),
              sameAs: aboutData.socialLinks
                .filter((s) => Boolean(s.url))
                .map((s) => s.url as string),
              description: aboutData.hero.heroPara,
            }),
          }}
        />
      </body>
    </html>
  );
}
