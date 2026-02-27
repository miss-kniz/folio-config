import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import InfiniteScrollProjects from "@/components/sections/InfiniteScrollProjects";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/ui/Footer";

export default function HomePage()
{
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <InfiniteScrollProjects />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
