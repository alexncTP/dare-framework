import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContributeSection from "@/components/ContributeSection";
import FrameworkSection from "@/components/FrameworkSection";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ResourcesSection from "@/components/ResourcesSection";

export default function HomePage() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <FrameworkSection />
      <ResourcesSection />
      <BenefitsSection />
      <ManifestoSection />
      <ContributeSection />
    </main>
  );
}
