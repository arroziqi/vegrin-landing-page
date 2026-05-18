import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { SolutionSection } from "../components/SolutionSection";
// import { ProductShowcaseSection } from "../components/ProductShowcaseSection";
import { TechStackSection } from "../components/TechStackSection";
import { MaintenanceCTASection } from "../components/MaintenanceCTASection";

export function LandingPage() {
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
