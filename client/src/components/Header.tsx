import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Configuração de navegação
  const navItems = [
    { href: "#about", label: "Sobre" },
    { href: "#framework", label: "Framework" },
    { href: "#manifesto", label: "Manifesto" },
    { href: "#contribute", label: "Contribuir" }
  ];
  
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
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-black/70 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo e menu principal */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center group">
              <div className={`p-1.5 rounded-md transition-colors ${
                scrolled 
                  ? 'bg-primary/10 group-hover:bg-primary/20' 
                  : 'bg-white/10 group-hover:bg-white/20'
              }`}>
                <svg 
                  className={`h-6 w-6 ${scrolled ? 'text-primary' : 'text-white'}`} 
                  viewBox="0 0 40 40" 
                  fill="currentColor"
                >
                  <path d="M20 3C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3zm8 21h-8v8h-4v-8H8v-4h8v-8h4v8h8v4z"></path>
                </svg>
              </div>
              <span className={`ml-2.5 text-lg font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                DARE Framework
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-10 md:flex md:space-x-1">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-primary hover:bg-gray-50' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* CTA e controles */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/dare-framework/dare" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Github className="h-5 w-5" />
            </a>
            
            <Button
              variant="default"
              size="sm"
              className={`px-4 font-medium ${
                scrolled 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Começar
            </Button>
            
            {/* Mobile menu toggle */}
            <button 
              type="button" 
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className={`md:hidden p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-200 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`py-3 px-3 shadow-md ${
          scrolled 
            ? 'bg-white' 
            : 'bg-black/90 backdrop-blur-md'
        }`}>
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className={`block py-2.5 px-4 mb-1 text-base font-medium rounded-md ${
                scrolled 
                  ? 'text-gray-700 hover:text-primary hover:bg-gray-50' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
