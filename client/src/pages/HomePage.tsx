import AboutSection from "@/components/AboutSection";
import ContributeSection from "@/components/ContributeSection";
import FrameworkSection from "@/components/FrameworkSection";
import FrameworkSectionSimple from "@/components/FrameworkSectionSimple";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";

export default function HomePage() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <FrameworkSection />
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-200 pt-10 pb-4">
            <h2 className="text-3xl font-bold text-center mb-2">Nova Versão do Framework DARE</h2>
            <p className="text-center text-gray-600 mb-8">Uma versão alternativa e simplificada da visualização do framework</p>
          </div>
        </div>
      </div>
      <FrameworkSectionSimple />
      <ManifestoSection />
      <ContributeSection />
    </main>
  );
}
