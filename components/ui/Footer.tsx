"use client";
import React from "react";
import Heading from "./Heading";
import aboutData from "@/config/user-data/about";
import SocialLinks from "./SocialLinks";
import { cn } from "@/helpers/merge-helper";

interface FooterProps {
  portfolioForJob?: boolean;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ portfolioForJob, className }) => {
  const currentYear = new Date().getFullYear();
  const firstName = aboutData.name.split(" ")[0];
  const navItems = [
    "Home",
    "About",
    "Projects",
    portfolioForJob ? "Skills" : "Services",
  ];

  // ScrollTo function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (!el) return;
    const yOffset = -80; // adjust for navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className={cn(`w-full mb-16 md:mb-0 ${className}`)}>
      <div className="max-w-7xl mx-auto py-10 flex flex-col items-center gap-6">
        {/* Logo / Name */}
        <Heading as="h2" normalText={firstName} />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm tracking-wide text-gray-600 font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4">
          <SocialLinks links={aboutData.socialLinks} />
        </div>

        {/* Divider */}
        <div className="w-full h-[0.2px] shadow-sm"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center">
          © {currentYear} {aboutData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
