import { Github, BookOpen, FileText, Briefcase, Code, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-auto relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>
      
      {/* Simplified footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand section */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="p-2 bg-white/10 rounded-lg">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 6V11M12 16V11M12 11H16M12 11H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-bold">DARE Framework</h2>
                <p className="text-xs text-gray-400">Design AI Reliable Engagement</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="https://github.com/guigonzalez/dare-framework" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://br.linkedin.com/in/guigonzalez/pt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Legal section simplified */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-4">
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="mr-2 flex-shrink-0">
                <img src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-sa.svg" alt="Creative Commons BY-SA License" className="h-6" />
              </a>
              <p className="text-sm text-gray-300">
                Licença CC BY-SA 4.0
              </p>
            </div>
            <a href="#diretrizes" className="inline-flex items-center text-primary hover:text-primary/80">
              <Heart className="h-4 w-4 mr-1" />
              <span>Como contribuir</span>
            </a>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} DARE Framework | <a href="https://br.linkedin.com/in/guigonzalez/pt" target="_blank" rel="noopener noreferrer" className="hover:text-white">Gui Gonzalez</a></p>
        </div>
      </div>
    </footer>
  );
}
