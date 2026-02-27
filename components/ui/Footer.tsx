import React from "react";
import Heading from "./Heading";
import aboutData from "@/config/about";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const firstName = aboutData.name.split(" ")[0];

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact us" },
  ];

  return (
    <footer className="w-full bg-primary-light">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* Logo / Name */}
        <Heading as="h2" normalText={firstName} />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm tracking-wide text-gray-600 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons - Now using data from about.ts */}
        <div className="flex flex-wrap justify-center gap-4">
          {aboutData.socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all"
              aria-label={social.platform}
            >
              <i className={`${social.icon} text-2xl`} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200"></div>

        {/* Copyright - Now includes name from config */}
        <p className="text-xs text-gray-500 text-center">
          © {currentYear} {aboutData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
