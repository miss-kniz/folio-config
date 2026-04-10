"use client";

import aboutData from "@/config/user-data/about";
import Button from "./ui/Button";
import { useState, useEffect, RefObject } from "react";
import { useRouter } from "next/navigation";

export type NavbarProps = {
  sectionRefs?: Record<string, RefObject<HTMLElement | null>>;
  portfolioForJob?: boolean;
  showNavLinks?: boolean;
  navBgOpacity?: string;
};

export default function Navbar({
  sectionRefs,
  portfolioForJob = true,
  showNavLinks = true,
  navBgOpacity = "bg-background/30 shadow-sm backdrop-blur-sm border-b border-gray-100",
}: NavbarProps) {
  const navItems = [
    "Home",
    "About",
    "Projects",
    portfolioForJob ? "Skills" : "Services",
  ];
  const [activeNav, setActiveNav] = useState("Home"); // Track active link

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
    if (!sectionRefs) return;
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

  const navigate = useRouter().push;
  return (
    <header className={`fixed top-0 z-50 w-full  ${navBgOpacity}`}>
      <div className="container mx-auto  px-4 py-3 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <button
          onClick={() => {
            navigate("/");
            scrollTo("home");
            setActiveNav("Home");
          }}
          className="text-xl font-semibold tracking-wider font-sans"
        >
          {aboutData?.name?.split(" ")[0] || "My Portfolio"}{" "}
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-4">
          {showNavLinks &&
            navItems.map((item) => (
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
    </header>
  );
}
