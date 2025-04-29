import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckIcon, AlertTriangle, Cpu, Brain } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { FrameworkLevel } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

export default function FrameworkSectionSimple() {
  const [activeLevel, setActiveLevel] = useState(0);
  const isMobile = useIsMobile();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Fetch framework levels from the API with language parameter
  const { data: frameworkLevels = [], isLoading, error } = useQuery<FrameworkLevel[]>({
    queryKey: ['/api/framework-levels', currentLanguage],
    queryFn: async () => {
      const response = await fetch(`/api/framework-levels?lang=${currentLanguage}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });
  
  const levels = Array.isArray(frameworkLevels) ? frameworkLevels : [];
  
  const handleLevelChange = (index: number) => {
    setActiveLevel(index);
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
      <section id="framework" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{t('framework.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('framework.loading')}</p>
          </div>
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }
  
  // Show error state if there was a problem fetching data
  if (error) {
    return (
      <section id="framework" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{t('framework.title')}</h2>
            <p className="mt-4 text-lg text-red-600">{t('framework.error')}</p>
          </div>
        </div>
      </section>
    );
  }

  // Calculate metric values based on active level
  const humanControlValue = [100, 90, 75, 60, 40, 20][activeLevel] || 100;
  const speedValue = [16, 30, 50, 70, 85, 95][activeLevel] || 16;
  const aiDependencyValue = [0, 15, 35, 60, 80, 95][activeLevel] || 0;

  return (
    <section id="framework-simple" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <Badge className="mb-2 bg-blue-100 text-blue-800 border-none">{t('framework.subtitle')}</Badge>
          <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">{t('framework.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('framework.description')}
          </p>
        </div>
        
        {/* Level Selection Tabs - Desktop */}
        <div className={`mb-8 ${isMobile ? 'hidden' : 'block'}`}>
          <div className="flex flex-wrap justify-center gap-2">
            {levels.map((level, index) => (
              <button
                key={index}
                onClick={() => handleLevelChange(index)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeLevel === index 
                    ? 'bg-blue-600 text-white font-medium' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('framework.level')} {level.id}: {level.shortName}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`flex justify-between items-center mb-4 ${isMobile ? 'flex' : 'hidden'}`}>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigateLevel('prev')}
            disabled={activeLevel === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> {t('framework.navigation.prev')}
          </Button>
          
          <span className="text-sm font-medium">
            {t('framework.level')} {activeLevel} / {levels.length - 1}
          </span>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigateLevel('next')}
            disabled={activeLevel === levels.length - 1}
          >
            {t('framework.navigation.next')} <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        {/* Current Level Details */}
        {levels.map((level, index) => (
          <div 
            key={index}
            className={`bg-white rounded-xl shadow-sm overflow-hidden mb-8 ${activeLevel === index ? 'block' : 'hidden'}`}
          >
            {/* Level Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
              <Badge variant="outline" className="mb-2 bg-white/10 text-white border-white/20">
                {t('framework.level')} {level.id}
              </Badge>
              <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
              <p className="italic text-blue-100">"{level.tagline}"</p>
              
              {/* Tools Section (if available) */}
              {Array.isArray(level.tools) && level.tools.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-medium mb-2">{t('framework.tools')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {level.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-3 py-1 text-sm bg-white/20 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Level Content */}
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">{t('framework.description_label')}</h4>
                <p className="text-gray-700">{level.description}</p>
              </div>
              
              {/* Pros & Cons - Grid for Desktop, Stack for Mobile */}
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-2 gap-6'} mb-6`}>
                {/* Pros */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h5 className="flex items-center text-green-800 font-medium mb-2">
                    <CheckIcon className="w-5 h-5 mr-2 text-green-700" />
                    {t('framework.pros')}
                  </h5>
                  
                  <ul className="space-y-2">
                    {Array.isArray(level.pros) && level.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-start text-gray-700">
                        <CheckIcon className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Cons */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h5 className="flex items-center text-red-800 font-medium mb-2">
                    <svg className="w-5 h-5 mr-2 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {t('framework.cons')}
                  </h5>
                  
                  <ul className="space-y-2">
                    {Array.isArray(level.cons) && level.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-start text-gray-700">
                        <svg className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Risks */}
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h5 className="flex items-center text-amber-800 font-medium mb-2">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-700" />
                  {t('framework.risks')}
                </h5>
                <p className="text-gray-700">{level.risks}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Metrics Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <Badge className="mb-2 bg-blue-100 text-blue-800 border-none">{t('framework.metrics.subtitle')}</Badge>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('framework.metrics.title')}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('framework.metrics.description')}
            </p>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Human Control */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center mb-3">
                <Brain className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-bold text-gray-800">{t('framework.metrics.humanControl')}</h4>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  style={{ width: `${humanControlValue}%` }}
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>{t('framework.metrics.low')}</span>
                <span>{t('framework.metrics.high')}</span>
              </div>
            </div>
            
            {/* Speed */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h4 className="font-bold text-gray-800">{t('framework.metrics.speed')}</h4>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  style={{ width: `${speedValue}%` }}
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>{t('framework.metrics.lowF')}</span>
                <span>{t('framework.metrics.highF')}</span>
              </div>
            </div>
            
            {/* AI Dependency */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center mb-3">
                <Cpu className="w-5 h-5 text-amber-600 mr-2" />
                <h4 className="font-bold text-gray-800">{t('framework.metrics.aiDependency')}</h4>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  style={{ width: `${aiDependencyValue}%` }}
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-500"
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>{t('framework.metrics.lowF')}</span>
                <span>{t('framework.metrics.highF')}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Level Steps - Desktop Only */}
        <div className={`mt-12 ${isMobile ? 'hidden' : 'block'}`}>
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              {levels.map((level, index) => (
                <div 
                  key={index}
                  onClick={() => handleLevelChange(index)}
                  className="flex flex-col items-center relative z-10 cursor-pointer"
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${
                      index <= activeLevel ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    {level.id}
                  </div>
                  <span className={`mt-2 text-sm font-medium ${
                    index === activeLevel ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {level.shortName}
                  </span>
                </div>
              ))}
              
              {/* Progress Line */}
              <div className="absolute left-0 right-0 top-6 h-1 bg-gray-200 -z-10">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ 
                    width: `${activeLevel === 0 ? 0 : (activeLevel / (levels.length - 1)) * 100}%` 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}