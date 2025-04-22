import { useState, useEffect, useRef } from 'react';
import { frameworkLevels } from '@/data/frameworkLevels';

export default function FrameworkSection() {
  const [activeLevel, setActiveLevel] = useState(0);
  
  // References for metrics
  const humanControlBarRef = useRef<HTMLDivElement>(null);
  const speedBarRef = useRef<HTMLDivElement>(null);
  const aiDependencyBarRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="framework" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">The DARE Framework Levels</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Six progressive levels of AI integration in design, from entirely manual approaches to advanced automation—each with its own appropriate use cases.
          </p>
          
          {/* Interactive Level Selector */}
          <div className="mt-10 bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {frameworkLevels.map((level, index) => (
                <button
                  key={index}
                  onClick={() => handleLevelChange(index)}
                  className={`level-btn flex-1 min-w-[140px] px-4 py-3 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center transition-colors ${
                    activeLevel === index
                      ? 'text-white bg-blue-600 hover:bg-blue-700'
                      : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  Level {index}: {level.shortName}
                </button>
              ))}
            </div>
          </div>
          
          {/* Level Details */}
          <div className="mt-10 bg-white rounded-lg shadow-md overflow-hidden">
            {frameworkLevels.map((level, index) => (
              <div 
                key={index} 
                className={activeLevel === index ? 'block' : 'hidden'}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-blue-700 text-white p-8">
                    <h3 className="text-xl font-bold">{level.name}</h3>
                    <p className="mt-2 text-blue-100 italic">"{level.tagline}"</p>
                    
                    {level.tools && level.tools.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-lg">Tools</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {level.tools.map((tool, toolIndex) => (
                            <span 
                              key={toolIndex} 
                              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {level.appropriateUses && level.appropriateUses.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-lg">Appropriate Uses</h4>
                        <ul className="mt-2 space-y-2 text-blue-50">
                          {level.appropriateUses.map((use, useIndex) => (
                            <li key={useIndex} className="flex items-start">
                              <svg className="h-5 w-5 text-blue-200 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{use}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="p-8 lg:col-span-2">
                    <div className="prose max-w-none">
                      <p>{level.description}</p>
                      
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900">Prós</h4>
                          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
                            {level.pros.map((pro, proIndex) => (
                              <li key={proIndex}>{pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Contras</h4>
                          <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
                            {level.cons.map((con, conIndex) => (
                              <li key={conIndex}>{con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium text-gray-900">Riscos</h4>
                        <div className="mt-2 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-gray-600">{level.risks}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 text-center">Framework Evolution</h3>
            <p className="mt-2 text-lg text-gray-600 text-center mb-8">The progressive integration of AI into design processes</p>
            
            <div className="bg-white rounded-lg shadow-md p-6 overflow-auto">
              <div className="min-w-[768px]">
                <div className="relative">
                  {/* Steps */}
                  <div className="relative flex items-center justify-between mb-12">
                    {frameworkLevels.map((level, index) => (
                      <div key={index} className="flex flex-col items-center relative z-10">
                        <div 
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            index <= 2 
                              ? `bg-blue-${600 - index * 100} text-white` 
                              : `bg-blue-${300 - (index - 3) * 100} text-gray-800`
                          }`}
                        >
                          <span className="font-bold">{index}</span>
                        </div>
                        <p className={`mt-2 font-medium ${
                          index <= 2 
                            ? `text-blue-${600 - index * 100}` 
                            : `text-blue-${300 - (index - 3) * 100}`
                        }`}>{level.shortName}</p>
                      </div>
                    ))}
                    
                    {/* Progress Bar */}
                    <div className="absolute left-0 top-5 transform -translate-y-1/2 h-1 bg-gray-200 w-full z-0">
                      <div 
                        ref={progressBarRef}
                        className="h-full bg-blue-500 w-[0%]" 
                      />
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-700">Human Control</h4>
                      <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          ref={humanControlBarRef}
                          className="h-full bg-green-500 w-[100%]" 
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">Speed</h4>
                      <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          ref={speedBarRef}
                          className="h-full bg-blue-500 w-[16%]" 
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">AI Dependency</h4>
                      <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          ref={aiDependencyBarRef}
                          className="h-full bg-amber-500 w-[0%]" 
                        />
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
