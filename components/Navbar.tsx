"use client";

import aboutData from "@/config/user-data/about";
import Button from "./ui/Button";
import { useState, useEffect, RefObject } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "phosphor-react";
import ContactModal from "./modals/ContactModal";

export type NavbarProps = {
  sectionRefs?: Record<string, RefObject<HTMLElement | null>>;
  portfolioForJob?: boolean;
  showNavLinks?: boolean;
  navBgOpacity?: string;
  fixed?: boolean;
  backToProjects?: boolean;
};

export default function Navbar({
  sectionRefs,
  portfolioForJob = true,
  showNavLinks = true,
  fixed = true,
  navBgOpacity = "bg-background/30 shadow-sm backdrop-blur-sm border-b border-gray-100",
  backToProjects,
}: NavbarProps) {
  const navItems = [
    "Home",
    "About",
    "Projects",
    portfolioForJob ? "Skills" : "Services",
  ];
  const [activeNav, setActiveNav] = useState("Home"); // Track active link
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

      for (const [name, ref] of Object.entries(sectionRefs || {})) {
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

  const goHome = () => {
    if (pathname === "/") {
      scrollTo("home");
      setActiveNav("Home");
      return;
    }

    router.push("/");
    setTimeout(() => {
      document.getElementById("home")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const goToProjects = () => {
    router.push("/");

    setTimeout(() => {
      const el = document.getElementById("projects");
      console.log(el);
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveNav("Projects");
    }, 1000);
  };

  return (
    <>
      <header
        className={`${fixed && "fixed top-0 z-50"} w-full  ${navBgOpacity}`}
      >
        <div className="container mx-auto  px-4 py-3 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <button
            onClick={goHome}
            className="text-xl font-semibold tracking-wider font-sans"
          >
            {aboutData?.name?.split(" ")[0] || "My Portfolio"}
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-4">
            {showNavLinks &&
              navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-center after:scale-x-0 after:bg-primary/40 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    activeNav === item
                      ? "glass-btn text-foreground border border-gray-200"
                      : "text-foreground  font-medium hover:bg-primary-light hover:text-primary"
                  }`}
                >
                  {item}
                </button>
              ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            {backToProjects && (
              <Button onClick={goToProjects} variant="secondary">
                <ArrowLeft size={18} weight="bold" />
                Back <span className="hidden md:inline-block">to Projects</span>
              </Button>
            )}
            <Button onClick={() => setIsContactOpen(true)}>Contact</Button>
          </div>
        </div>
      </header>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
