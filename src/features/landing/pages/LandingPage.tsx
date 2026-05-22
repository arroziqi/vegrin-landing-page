import { useEffect } from "react";
import { useLocation } from "react-router";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { SolutionSection } from "../components/SolutionSection";
// import { ProductShowcaseSection } from "../components/ProductShowcaseSection";
import { TechStackSection } from "../components/TechStackSection";
import { MaintenanceCTASection } from "../components/MaintenanceCTASection";

export function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        const timer = setTimeout(() => {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="features">
        <ProblemSection />
        <SolutionSection />
      </div>
      {/* <div id="showcase">
        <ProductShowcaseSection />
      </div> */}
      <div id="technology">
        <TechStackSection />
      </div>
      <div id="documentation">
        <MaintenanceCTASection />
      </div>
      <Footer />
    </div>
  );
}
