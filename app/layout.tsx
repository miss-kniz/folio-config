import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

export const metadata: Metadata = {
  title: "Mehak Naqvi",
  description:
    "Web developer and designer specializing in building exceptional digital experiences. Loves teaching and sharing knowledge. Passionate about creating user-friendly interfaces and seamless interactions.",
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
