import AboutSection from "@/components/AboutSection";
import ContributeSection from "@/components/ContributeSection";
import FrameworkSectionSimple from "@/components/FrameworkSectionSimple";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";

export default function HomePage() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <FrameworkSectionSimple />
      <ManifestoSection />
      <ContributeSection />
    </main>
  );
}
