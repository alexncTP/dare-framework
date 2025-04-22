import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, CheckIcon, AlertTriangleIcon, Cpu, Brain, Wrench, Zap } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { FrameworkLevel } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function FrameworkSection() {
  const [activeLevel, setActiveLevel] = useState(0);
  
  // References for metrics
  const humanControlBarRef = useRef<HTMLDivElement>(null);
  const speedBarRef = useRef<HTMLDivElement>(null);
  const aiDependencyBarRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // Fetch framework levels from the API
  const { data: frameworkLevels = [], isLoading, error } = useQuery<FrameworkLevel[]>({
    queryKey: ['/api/framework-levels'],
  });
  
  // Ensure the proper type safety
  const levels = Array.isArray(frameworkLevels) ? frameworkLevels : [];
  
  // Update framework visuals when active level changes
  useEffect(() => {
    if (
      humanControlBarRef.current && 
      speedBarRef.current && 
      aiDependencyBarRef.current &&
      progressBarRef.current
    ) {
      const humanControlValues = [100, 90, 75, 60, 40, 20];
      const speedValues = [16, 30, 50, 70, 85, 95];
      const aiDependencyValues = [0, 15, 35, 60, 80, 95];
      
      humanControlBarRef.current.style.width = `${humanControlValues[activeLevel]}%`;
      speedBarRef.current.style.width = `${speedValues[activeLevel]}%`;
      aiDependencyBarRef.current.style.width = `${aiDependencyValues[activeLevel]}%`;
      progressBarRef.current.style.width = `${activeLevel * 20}%`;
    }
  }, [activeLevel]);
  
  const handleLevelChange = (levelIndex: number) => {
    setActiveLevel(levelIndex);
  };

  const navigateLevel = (direction: 'next' | 'prev') => {
    if (direction === 'next' && activeLevel < levels.length - 1) {
      setActiveLevel(activeLevel + 1);
    } else if (direction === 'prev' && activeLevel > 0) {
      setActiveLevel(activeLevel - 1);
    }
  };
  
  // Show loading state while fetching data
  if (isLoading) {
    return (
      <section id="framework" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="gradient-text">Níveis do Framework DARE</h2>
              <p className="mt-4 text-lg text-gray-600">Carregando os níveis do framework...</p>
            </div>
            <div className="py-20 flex justify-center">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Show error state if there was a problem fetching data
  if (error) {
    return (
      <section id="framework" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="gradient-text">Níveis do Framework DARE</h2>
              <p className="mt-4 text-lg text-red-600">Erro ao carregar os níveis do framework.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="framework" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-medium">
              6 níveis de adoção de IA
            </div>
            <h2 className="gradient-text">Níveis do Framework DARE</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Seis níveis progressivos de integração de IA no design, de abordagens totalmente manuais à automação avançada — cada um com seus casos de uso apropriados.
            </p>
          </div>
          
          {/* Interactive Level Selector */}
          <div className="mt-10 bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {levels.map((level, index) => (
                <button
                  key={index}
                  onClick={() => handleLevelChange(index)}
                  className={`level-btn min-w-[130px] px-4 py-3 text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-center transition-all duration-200 ${
                    activeLevel === index
                      ? 'text-white bg-primary shadow-md hover:bg-primary/90'
                      : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <span className="block text-xs opacity-75 mb-1">Nível {index}</span>
                  <span className="block">{level.shortName}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Level Details */}
          <div className="mt-10 bg-white rounded-xl shadow-md overflow-hidden relative">
            {levels.map((level, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-300 ${activeLevel === index ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigateLevel('prev')}
                    disabled={activeLevel === 0}
                    className="ml-2 bg-white/80 shadow-sm hover:bg-white"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigateLevel('next')}
                    disabled={activeLevel === levels.length - 1}
                    className="mr-2 bg-white/80 shadow-sm hover:bg-white"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-primary to-blue-700 text-white p-8 relative overflow-hidden">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <defs>
                          <pattern id="grid-pattern-level" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" fill="none" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-pattern-level)" />
                      </svg>
                    </div>
                    
                    <div className="relative">
                      <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4">
                        Nível {level.id}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold">{level.name}</h3>
                      <p className="mt-3 text-blue-100 italic text-lg">"{level.tagline}"</p>
                      
                      {Array.isArray(level.tools) && level.tools.length > 0 && (
                        <div className="mt-8">
                          <div className="flex items-center mb-3">
                            <Wrench className="h-5 w-5 mr-2 text-blue-200" />
                            <h4 className="font-semibold text-lg">Ferramentas</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {level.tools.map((tool: string, toolIndex: number) => (
                              <span 
                                key={toolIndex} 
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {Array.isArray(level.appropriateUses) && level.appropriateUses.length > 0 && (
                        <div className="mt-8">
                          <div className="flex items-center mb-3">
                            <CheckIcon className="h-5 w-5 mr-2 text-blue-200" />
                            <h4 className="font-semibold text-lg">Usos Apropriados</h4>
                          </div>
                          <ul className="space-y-2 text-blue-50">
                            {level.appropriateUses.map((use: string, useIndex: number) => (
                              <li key={useIndex} className="flex items-start">
                                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-400/30 flex items-center justify-center mr-2 mt-0.5">
                                  <CheckIcon className="h-3 w-3 text-white" />
                                </div>
                                <span>{use}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-8 lg:col-span-2">
                    <div className="prose max-w-none">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-primary/10 rounded-md">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-primary">Descrição</span>
                      </div>
                      <p className="text-gray-700 text-lg">{level.description}</p>
                      
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                          <div className="flex items-center text-green-700 mb-3">
                            <CheckIcon className="h-5 w-5 mr-2" />
                            <h4 className="font-medium text-green-800">Prós</h4>
                          </div>
                          <ul className="mt-2 space-y-2">
                            {Array.isArray(level.pros) && level.pros.map((pro: string, proIndex: number) => (
                              <li key={proIndex} className="flex items-start text-gray-700">
                                <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                          <div className="flex items-center text-red-700 mb-3">
                            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h4 className="font-medium text-red-800">Contras</h4>
                          </div>
                          <ul className="mt-2 space-y-2">
                            {Array.isArray(level.cons) && level.cons.map((con: string, conIndex: number) => (
                              <li key={conIndex} className="flex items-start text-gray-700">
                                <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-8 bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <div className="flex items-center text-amber-700 mb-3">
                          <AlertTriangleIcon className="h-5 w-5 mr-2" />
                          <h4 className="font-medium text-amber-800">Riscos</h4>
                        </div>
                        <div className="text-gray-700">
                          {level.risks}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Framework Visual */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-medium">
                Métricas evolutivas
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Evolução do Framework</h3>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                A integração progressiva de IA nos processos de design e seus impactos nas métricas principais
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 overflow-hidden">
              <div className="min-w-[768px] overflow-x-auto pb-4">
                <div className="relative">
                  {/* Steps */}
                  <div className="relative flex items-center justify-between mb-16">
                    {levels.map((level, index) => (
                      <div 
                        key={index} 
                        className={`flex flex-col items-center relative z-10 cursor-pointer ${
                          activeLevel === index ? 'scale-110 transition-transform duration-200' : ''
                        }`}
                        onClick={() => handleLevelChange(index)}
                      >
                        <div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                            activeLevel === index 
                              ? 'bg-primary text-white shadow-md ring-4 ring-primary/20' 
                              : index < activeLevel 
                                ? 'bg-primary/80 text-white'
                                : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          <span className="font-bold">{index}</span>
                        </div>
                        <p className={`mt-3 font-medium transition-colors ${
                          activeLevel === index
                            ? 'text-primary' 
                            : 'text-gray-500'
                        }`}>{level.shortName}</p>
                      </div>
                    ))}
                    
                    {/* Progress Bar */}
                    <div className="absolute left-0 top-6 transform -translate-y-1/2 h-2 bg-gray-200 w-full z-0 rounded-full">
                      <div 
                        ref={progressBarRef}
                        className="h-full bg-primary rounded-full transition-all duration-700 ease-in-out w-[0%]" 
                      />
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Brain className="h-5 w-5 text-green-600 mr-2" />
                        <h4 className="font-bold text-gray-800">Controle Humano</h4>
                      </div>
                      <div className="mt-2 h-6 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          ref={humanControlBarRef}
                          className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700 ease-in-out w-[100%]" 
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>Baixo</span>
                        <span>Alto</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Zap className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-bold text-gray-800">Velocidade</h4>
                      </div>
                      <div className="mt-2 h-6 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          ref={speedBarRef}
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700 ease-in-out w-[16%]" 
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>Baixa</span>
                        <span>Alta</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Cpu className="h-5 w-5 text-amber-600 mr-2" />
                        <h4 className="font-bold text-gray-800">Dependência de IA</h4>
                      </div>
                      <div className="mt-2 h-6 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          ref={aiDependencyBarRef}
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-700 ease-in-out w-[0%]" 
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>Baixa</span>
                        <span>Alta</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
