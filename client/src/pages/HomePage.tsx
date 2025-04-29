import AboutSection from "@/components/AboutSection";
import ContributeSection from "@/components/ContributeSection";
import FrameworkSection from "@/components/FrameworkSection";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";

export default function HomePage() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <FrameworkSection />
      <ManifestoSection />
      <ContributeSection />
    </main>
  );
}
