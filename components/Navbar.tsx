"use client";

import Button from "./ui/Button";
import { useState, useEffect, RefObject } from "react";

type NavbarProps = {
  portfolioForJob: boolean; // Pass from HomePage
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
};

export default function Navbar({ portfolioForJob, sectionRefs }: NavbarProps) {
  const [activeNav, setActiveNav] = useState("Home"); // Track active link

  const navItems = [
    "Home",
    "About",
    "Projects",
    portfolioForJob ? "Skills" : "Services",
  ];

  // Scroll to section smoothly
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // adjust for navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Update active nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";

      for (const [name, ref] of Object.entries(sectionRefs)) {
        const el = ref.current;
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        const offset = 100; // tweak for navbar height
        if (top - offset <= 0) {
          current = name;
        }
      }

      setActiveNav(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <header className="fixed top-0 z-50  w-full h-screen">
      <div className="bg-background/30 backdrop-blur-sm w-full border-b border-gray-100 shadow-sm">
        <div className="container mx-auto  px-4 py-3 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <button
            onClick={() => {
              scrollTo("home");
              setActiveNav("Home");
            }}
            className="text-xl font-bold tracking-tight"
          >
            Mehak
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-colors ${
                  activeNav === item
                    ? "glass-btn text-foreground border border-gray-200"
                    : "text-foreground  font-medium hover:bg-primary-light hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <Button onClick={() => scrollTo("contact")} variant="primary">
            Contact
          </Button>
        </div>
      </div>
      {/* bottom nav mobile only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/30 backdrop-blur-sm border-t border-gray-100 shadow-sm flex justify-around py-2">
        <div className="space-x-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-colors ${
                activeNav === item
                  ? "glass-btn text-foreground border border-gray-200"
                  : "text-foreground  font-medium hover:bg-primary-light hover:text-primary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
