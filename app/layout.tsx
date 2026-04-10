import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

export const metadata: Metadata = {
  title: "Mehak Fatima Naqvi | Full-Stack PERN Developer (miss-kniz)",
  description:
    "Mehak Fatima Naqvi (miss-kniz) is a React & Next.js developer based in Faisalabad, Pakistan, specializing in the PERN stack and building scalable apps for startups.",
  keywords: [
    "Mehak Fatima Naqvi",
    "miss-kniz",
    "Full-Stack Developer Faisalabad",
    "PERN Stack Developer",
    "miss kniz",
    "top React developer Pakistan",
    "top Next.js developer",
    "PERN Stack Developer Pakistan",
  ],
  openGraph: {
    title: "Mehak Fatima Naqvi Portfolio",
    description:
      "Frontend-Focused Full-Stack Developer specializing in React and Next.js.",
    url: "https://vercel.app",
    siteName: "Mehak Fatima Naqvi Portfolio",
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
      <body>{children}</body>
    </html>
  );
}
