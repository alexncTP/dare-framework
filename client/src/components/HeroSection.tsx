import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/90 via-primary to-blue-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
            <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative py-16 sm:py-24 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 p-2 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="px-4 py-1 rounded-full bg-white/20 text-sm font-medium text-white">
                Creative Commons BY-SA
              </div>
            </div>

            <h1 className="text-white mb-6">
              <span className="block mb-2">Design AI Reliable</span>
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Engagement Framework
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
              Um framework colaborativo para adoção estratégica de IA em processos de design—
              equilibrando inovação com criatividade humana.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                variant="default" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-blue-50"
                asChild
              >
                <a href="#framework">
                  Explorar Framework
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="#contribute">
                  Contribuir
                </a>
              </Button>
            </div>
            
            <div className="mt-10 flex justify-center items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white">6</div>
                <div className="text-xs text-blue-100">Níveis</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white">Aberto</div>
                <div className="text-xs text-blue-100">Comunidade</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white">Confiável</div>
                <div className="text-xs text-blue-100">Engajamento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
