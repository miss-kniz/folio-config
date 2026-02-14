import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import InfiniteScrollProjects from "@/components/sections/InfiniteScrollProjects";
import ServicesSection from "@/components/sections/ServicesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <InfiniteScrollProjects />
      <ServicesSection />
    </div>
  );
}
