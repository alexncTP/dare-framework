import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 3C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3zm8 21h-8v8h-4v-8H8v-4h8v-8h4v8h8v4z"></path>
              </svg>
              <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                DARE Framework
              </span>
            </a>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <a 
                href="#about" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Sobre
              </a>
              <a 
                href="#framework" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Framework
              </a>
              <a 
                href="#manifesto" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Manifesto
              </a>
              <a 
                href="#contribute" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Contribuir
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/dare-framework/dare" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <Button
              variant={scrolled ? "default" : "outline"}
              size="sm"
              className={scrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "border-white text-white hover:bg-white/10"}
            >
              <span>Começar</span>
            </Button>
            <button 
              type="button" 
              className={`md:hidden p-2 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset ${
                scrolled 
                  ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:ring-primary' 
                  : 'text-white hover:text-white/80 hover:bg-white/10 focus:ring-white'
              }`}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Abrir menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-200 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`py-3 px-4 space-y-1 ${scrolled ? 'bg-white' : 'bg-primary/95 backdrop-blur-md'}`}>
          <a 
            href="#about" 
            className={`block py-2 px-3 text-base font-medium rounded-md ${
              scrolled 
                ? 'text-gray-700 hover:text-primary hover:bg-gray-50' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Sobre
          </a>
          <a 
            href="#framework" 
            className={`block py-2 px-3 text-base font-medium rounded-md ${
              scrolled 
                ? 'text-gray-700 hover:text-primary hover:bg-gray-50' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Framework
          </a>
          <a 
            href="#manifesto" 
            className={`block py-2 px-3 text-base font-medium rounded-md ${
              scrolled 
                ? 'text-gray-700 hover:text-primary hover:bg-gray-50' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Manifesto
          </a>
          <a 
            href="#contribute" 
            className={`block py-2 px-3 text-base font-medium rounded-md ${
              scrolled 
                ? 'text-gray-700 hover:text-primary hover:bg-gray-50' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Contribuir
          </a>
        </div>
      </div>
    </header>
  );
}
