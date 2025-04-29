import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, CheckIcon, AlertTriangleIcon, Cpu, Brain, Wrench, Zap } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { FrameworkLevel } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

export default function FrameworkSection() {
  const [activeLevel, setActiveLevel] = useState(0);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
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
              <h2 className="gradient-text">{t('framework.title')}</h2>
              <p className="mt-4 text-lg text-gray-600">{t('framework.loading')}</p>
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
              <h2 className="gradient-text">{t('framework.title')}</h2>
              <p className="mt-4 text-lg text-red-600">{t('framework.error')}</p>
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
              {t('framework.subtitle')}
            </div>
            <h2 className="gradient-text">{t('framework.title')}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {t('framework.description')}
            </p>
          </div>
          
          {/* Interactive Level Selector - Desktop Only */}
          <div className={`mt-10 bg-white rounded-xl shadow-md p-4 sm:p-6 ${isMobile ? 'hidden' : 'block'}`}>
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
                  <span className="block text-xs opacity-75 mb-1">{t('framework.level')} {index}</span>
                  <span className="block">{level.shortName}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Level Details - Desktop View */}
          <div className={`mt-10 bg-white rounded-xl shadow-md overflow-hidden relative ${isMobile ? 'hidden' : 'block'}`}>
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
                        {t('framework.level')} {level.id}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold">{level.name}</h3>
                      <p className="mt-3 text-blue-100 italic text-lg">"{level.tagline}"</p>
                      
                      {Array.isArray(level.tools) && level.tools.length > 0 && (
                        <div className="mt-8">
                          <div className="flex items-center mb-3">
                            <Wrench className="h-5 w-5 mr-2 text-blue-200" />
                            <h4 className="font-semibold text-lg">{t('framework.tools')}</h4>
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
                            <h4 className="font-semibold text-lg">{t('framework.appropriateUses')}</h4>
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
                        <span className="text-sm font-medium text-primary">{t('framework.description_label')}</span>
                      </div>
                      <p className="text-gray-700 text-lg">{level.description}</p>
                      
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                          <div className="flex items-center text-green-700 mb-3">
                            <CheckIcon className="h-5 w-5 mr-2" />
                            <h4 className="font-medium text-green-800">{t('framework.pros')}</h4>
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
                            <h4 className="font-medium text-red-800">{t('framework.cons')}</h4>
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
                          <h4 className="font-medium text-amber-800">{t('framework.risks')}</h4>
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
          
          {/* Level Details - Mobile Carousel View */}
          <div className={`mt-10 ${isMobile ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Navegação simplificada para mobile */}
              <div className="flex justify-between p-4 border-b">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateLevel('prev')} 
                  disabled={activeLevel === 0}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Anterior</span>
                </Button>
                
                <span className="flex items-center text-sm text-gray-500 font-medium">
                  Nível {activeLevel + 1} de {levels.length}
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateLevel('next')}
                  disabled={activeLevel === levels.length - 1}
                  className="flex items-center gap-1"
                >
                  <span>Próximo</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Conteúdo do nível atual */}
              {levels.map((level, index) => (
                <div 
                  key={index} 
                  className={`${activeLevel === index ? 'block' : 'hidden'}`}
                >
                  <div className="p-4">
                    <div className="bg-gradient-to-br from-primary to-blue-700 text-white p-6 rounded-lg relative overflow-hidden mb-4">
                      <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-2">
                        Nível {level.id}
                      </Badge>
                      
                      <h3 className="text-xl font-bold">{level.name}</h3>
                      <p className="mt-2 text-blue-100 italic">{level.tagline}</p>
                    </div>
                    
                    <div className="prose max-w-none">
                      <h4 className="text-md font-medium text-primary mb-2">{t('framework.description_label')}</h4>
                      <p className="text-gray-700 mb-4">{level.description}</p>
                      
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-4">
                        <h5 className="font-medium text-green-800 mb-2">Prós</h5>
                        <ul className="space-y-1">
                          {Array.isArray(level.pros) && level.pros.map((pro: string, proIndex: number) => (
                            <li key={proIndex} className="flex items-start text-gray-700 text-sm">
                              <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-4">
                        <h5 className="font-medium text-red-800 mb-2">Contras</h5>
                        <ul className="space-y-1">
                          {Array.isArray(level.cons) && level.cons.map((con: string, conIndex: number) => (
                            <li key={conIndex} className="flex items-start text-gray-700 text-sm">
                              <svg className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <h5 className="font-medium text-amber-800 mb-2">Riscos</h5>
                        <div className="text-gray-700 text-sm">
                          {level.risks}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Framework Visual */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-medium">
                {t('framework.metrics.subtitle')}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('framework.metrics.title')}</h3>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                {t('framework.metrics.description')}
              </p>
            </div>
            
            {/* Desktop Evolution Framework */}
            <div className={`bg-white rounded-xl shadow-md p-6 sm:p-8 overflow-hidden ${isMobile ? 'hidden' : 'block'}`}>
              <div className="overflow-x-auto pb-4">
                <div className="relative min-w-[768px]">
                  {/* Steps */}
                  <div className="relative flex items-center justify-between mb-16 px-3 py-3">
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
                    <div className="absolute left-0 top-6 mt-3 transform -translate-y-1/2 h-2 bg-gray-200 w-full z-0 rounded-full">
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
                        <h4 className="font-bold text-gray-800">{t('framework.metrics.humanControl')}</h4>
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
                        <h4 className="font-bold text-gray-800">{t('framework.metrics.speed')}</h4>
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
                        <h4 className="font-bold text-gray-800">{t('framework.metrics.aiDependency')}</h4>
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
            
            {/* Mobile Evolution Framework */}
            <div className={`bg-white rounded-xl shadow-md p-4 ${isMobile ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                {/* Mobile Metrics */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Brain className="h-4 w-4 text-green-600 mr-2" />
                      <h4 className="font-bold text-gray-800 text-sm">{t('framework.metrics.humanControl')}</h4>
                    </div>
                    <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        style={{width: `${[100, 90, 75, 60, 40, 20][activeLevel]}%`}}
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700 ease-in-out" 
                      />
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
                      <span>Baixo</span>
                      <span>Alto</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Zap className="h-4 w-4 text-blue-600 mr-2" />
                      <h4 className="font-bold text-gray-800 text-sm">{t('framework.metrics.speed')}</h4>
                    </div>
                    <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        style={{width: `${[16, 30, 50, 70, 85, 95][activeLevel]}%`}}
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700 ease-in-out" 
                      />
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
                      <span>Baixa</span>
                      <span>Alta</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Cpu className="h-4 w-4 text-amber-600 mr-2" />
                      <h4 className="font-bold text-gray-800 text-sm">Dependência de IA</h4>
                    </div>
                    <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        style={{width: `${[0, 15, 35, 60, 80, 95][activeLevel]}%`}}
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-700 ease-in-out" 
                      />
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
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
    </section>
  );
}
