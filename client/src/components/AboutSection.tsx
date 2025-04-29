import { ArrowRightIcon, UsersIcon, BrainIcon, EyeIcon, LightbulbIcon } from "lucide-react";
import { useLanguage } from "../hooks/use-language";

export default function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-medium">
              {t('about.title')}
            </div>
            <h2 className="gradient-text">{t('about.title')}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Orientado pela Comunidade</h3>
                <p className="mt-2 text-gray-600">
                  Inspirado em modelos como Creative Commons, o DARE Framework é aberto para contribuição pública e adaptação, criando um sistema vivo que evolui com a tecnologia de IA.
                </p>
                <a href="#contribute" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>Saiba como contribuir</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <BrainIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Centrado no Humano</h3>
                <p className="mt-2 text-gray-600">
                  O DARE enfatiza que a IA deve aprimorar—não substituir—a criatividade humana, estabelecendo diretrizes que preservam a integridade do trabalho de design enquanto aproveitam as vantagens da IA.
                </p>
                <a href="#manifesto" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>Leia nosso manifesto</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <EyeIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Transparência</h3>
                <p className="mt-2 text-gray-600">
                  O framework fornece diretrizes claras sobre divulgação do uso de IA no trabalho de design, ajudando a estabelecer padrões éticos e construir confiança com clientes e usuários.
                </p>
                <a href="#framework" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>Entenda os níveis</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <LightbulbIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Prático</h3>
                <p className="mt-2 text-gray-600">
                  Cada nível do framework inclui ferramentas, processos e considerações específicas, tornando-o imediatamente aplicável aos desafios de design do mundo real.
                </p>
                <a href="#framework" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>Explore as ferramentas</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Um framework para todos os níveis de adoção
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Do Totalmente Manual à Automação Guiada por IA</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              O DARE Framework organiza a adoção de IA em um espectro de seis níveis distintos, ajudando equipes de design a navegar na integração da inteligência artificial de maneira controlada e ética.
            </p>
            
            <div className="mt-8 inline-flex shadow-sm overflow-hidden rounded-lg">
              <a 
                href="#framework" 
                className="px-6 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Explorar os Níveis do Framework
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
