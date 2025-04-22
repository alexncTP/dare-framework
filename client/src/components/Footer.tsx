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
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center">
              <div className="p-2 bg-white/10 rounded-lg">
                <svg className="h-9 w-9 text-white" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 3C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3zm8 21h-8v8h-4v-8H8v-4h8v-8h4v8h8v4z"></path>
                </svg>
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-bold">DARE Framework</h2>
                <p className="text-xs text-gray-400">Design AI Reliable Engagement</p>
              </div>
            </div>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Um framework colaborativo para integração de IA em processos de design de forma responsável e eficaz.
            </p>
            <div className="mt-6 flex space-x-5">
              <a href="https://github.com/dare-framework/dare" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <BookOpen className="h-5 w-5" />
                <span className="sr-only">Documentation</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Blog</span>
              </a>
            </div>
          </div>
          
          {/* Resources section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-primary/80" />
              <span>Recursos</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></span>
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></span>
                  Estudos de Caso
                </a>
              </li>
              <li>
                <a href="#framework" className="text-gray-300 hover:text-white transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></span>
                  Diretório de Ferramentas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></span>
                  Artigos de Pesquisa
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Code className="h-5 w-5 mr-2 text-primary/80" />
              <span>Licenciamento</span>
            </h3>
            <div className="p-4 bg-white/5 rounded-lg mb-4">
              <div className="flex items-start">
                <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="mr-3 flex-shrink-0">
                  <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg" alt="Creative Commons BY-SA License" className="h-8" />
                </a>
                <p className="text-sm text-gray-300">
                  DARE Framework é licenciado sob uma <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-primary hover:text-primary/80 underline" target="_blank" rel="noopener noreferrer">Licença Creative Commons Attribution-ShareAlike 4.0 Internacional</a>.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-300 text-sm">
                Este é um projeto de código aberto. Contribuições são bem-vindas!
              </p>
              <a href="#contribute" className="inline-flex items-center mt-2 text-primary hover:text-primary/80">
                <Heart className="h-4 w-4 mr-1" />
                <span>Como contribuir</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} DARE Framework. Todos os direitos reservados.</p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-white transition">Termos</a></li>
              <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
