// DARE Framework Main JavaScript

// DOM Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.getElementById('header');
const levelButtons = document.getElementById('level-buttons');
const levelDetails = document.getElementById('level-details');
const frameworkSteps = document.getElementById('framework-steps');
const humanControlBar = document.getElementById('human-control-bar');
const speedBar = document.getElementById('speed-bar');
const aiDependencyBar = document.getElementById('ai-dependency-bar');
const mobileHumanControl = document.getElementById('mobile-human-control');
const mobileSpeed = document.getElementById('mobile-speed');
const mobileAiDependency = document.getElementById('mobile-ai-dependency');
const currentYear = document.getElementById('current-year');

// State
let levels = [];
let activeLevel = 0;

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  // Set copyright year
  currentYear.textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Scroll effect for header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.remove('bg-black/70', 'backdrop-blur-md');
      header.classList.add('bg-white', 'shadow-md');
      
      // Update text colors for links
      const navLinks = header.querySelectorAll('a');
      navLinks.forEach(link => {
        link.classList.remove('text-white', 'hover:bg-white/10');
        link.classList.add('text-gray-700', 'hover:text-primary', 'hover:bg-gray-50');
      });
      
      // Update mobile menu toggle
      if (mobileMenuToggle) {
        mobileMenuToggle.classList.remove('text-white', 'hover:bg-white/10');
        mobileMenuToggle.classList.add('text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100');
      }
    } else {
      header.classList.remove('bg-white', 'shadow-md');
      header.classList.add('bg-black/70', 'backdrop-blur-md');
      
      // Update text colors for links
      const navLinks = header.querySelectorAll('a');
      navLinks.forEach(link => {
        link.classList.remove('text-gray-700', 'hover:text-primary', 'hover:bg-gray-50');
        link.classList.add('text-white', 'hover:bg-white/10');
      });
      
      // Update mobile menu toggle
      if (mobileMenuToggle) {
        mobileMenuToggle.classList.remove('text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100');
        mobileMenuToggle.classList.add('text-white', 'hover:bg-white/10');
      }
    }
  });
  
  // Load framework levels
  try {
    const response = await fetch('data/levels.json');
    if (!response.ok) {
      throw new Error('Failed to fetch framework levels');
    }
    
    levels = await response.json();
    levels.sort((a, b) => a.order - b.order);
    
    // Initialize framework display
    renderLevelButtons();
    renderLevelDetails(activeLevel);
    renderFrameworkSteps();
    updateMetrics(activeLevel);
    
  } catch (error) {
    console.error('Error initializing framework:', error);
    // Show error message
    if (levelDetails) {
      levelDetails.innerHTML = `
        <div class="p-8 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Erro ao carregar os dados</h3>
          <p class="text-gray-600">Não foi possível carregar os níveis do framework. Por favor, tente novamente mais tarde.</p>
        </div>
      `;
    }
  }
});

// Render level selector buttons
function renderLevelButtons() {
  if (!levelButtons) return;
  
  levelButtons.innerHTML = levels.map((level, index) => `
    <button
      data-level="${index}"
      class="level-btn min-w-[130px] px-4 py-3 text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-center transition-all duration-200 ${
        activeLevel === index
          ? 'text-white bg-primary shadow-md hover:bg-primary/90'
          : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
      }"
    >
      <span class="block text-xs opacity-75 mb-1">Nível ${index}</span>
      <span class="block">${level.shortName}</span>
    </button>
  `).join('');
  
  // Add event listeners
  document.querySelectorAll('[data-level]').forEach(button => {
    button.addEventListener('click', () => {
      const levelIndex = parseInt(button.dataset.level);
      setActiveLevel(levelIndex);
    });
  });
}

// Render level details
function renderLevelDetails(levelIndex) {
  if (!levelDetails) return;
  
  const level = levels[levelIndex];
  
  levelDetails.innerHTML = `
    <div class="transition-opacity duration-300 block opacity-100">
      <!-- Navigation Buttons -->
      <div class="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 hidden md:block">
        <button
          id="prev-level"
          class="ml-2 bg-white/80 shadow-sm hover:bg-white p-2 rounded-full"
          ${levelIndex === 0 ? 'disabled' : ''}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
      </div>
      <div class="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 hidden md:block">
        <button
          id="next-level"
          class="mr-2 bg-white/80 shadow-sm hover:bg-white p-2 rounded-full"
          ${levelIndex === levels.length - 1 ? 'disabled' : ''}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div class="flex justify-between p-4 border-b md:hidden">
        <button
          id="mobile-prev-level"
          class="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-md border border-gray-300 text-gray-600 disabled:opacity-50"
          ${levelIndex === 0 ? 'disabled' : ''}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span>Anterior</span>
        </button>
        
        <span class="flex items-center text-sm text-gray-500 font-medium">
          Nível ${activeLevel + 1} de ${levels.length}
        </span>
        
        <button
          id="mobile-next-level"
          class="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-md border border-gray-300 text-gray-600 disabled:opacity-50"
          ${levelIndex === levels.length - 1 ? 'disabled' : ''}
        >
          <span>Próximo</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="bg-gradient-to-br from-primary to-blue-700 text-white p-8 relative overflow-hidden">
          <!-- Decorative pattern -->
          <div class="absolute inset-0 opacity-10">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="grid-pattern-level" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20h40M20 0v40" stroke="white" stroke-width="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern-level)" />
            </svg>
          </div>
          
          <div class="relative">
            <div class="inline-block px-2 py-1 bg-white/10 text-white border-white/20 rounded mb-4">
              Nível ${level.id}
            </div>
            
            <h3 class="text-2xl font-bold">${level.name}</h3>
            <p class="mt-3 text-blue-100 italic text-lg">"${level.tagline}"</p>
            
            ${level.tools && level.tools.length > 0 ? `
              <div class="mt-8">
                <div class="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2 text-blue-200">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                  <h4 class="font-semibold text-lg">Ferramentas</h4>
                </div>
                <div class="flex flex-wrap gap-2">
                  ${level.tools.map(tool => `
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors">
                      ${tool}
                    </span>
                  `).join('')}
                </div>
              </div>
            ` : ''}
            
            ${level.appropriateUses && level.appropriateUses.length > 0 ? `
              <div class="mt-8">
                <div class="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2 text-blue-200">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h4 class="font-semibold text-lg">Usos Apropriados</h4>
                </div>
                <ul class="space-y-2 text-blue-50">
                  ${level.appropriateUses.map(use => `
                    <li class="flex items-start">
                      <div class="flex-shrink-0 h-5 w-5 rounded-full bg-blue-400/30 flex items-center justify-center mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-white">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span>${use}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        </div>
        
        <div class="p-8 lg:col-span-2">
          <div class="prose max-w-none">
            <div class="flex items-center gap-2 mb-4">
              <div class="p-2 bg-primary/10 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <span class="text-sm font-medium text-primary">Descrição</span>
            </div>
            <p class="text-gray-700 text-lg">${level.description}</p>
            
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-5 rounded-lg border border-green-100">
                <div class="flex items-center text-green-700 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h4 class="font-medium text-green-800">Prós</h4>
                </div>
                <ul class="mt-2 space-y-2">
                  ${level.pros.map(pro => `
                    <li class="flex items-start text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>${pro}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              
              <div class="bg-red-50 p-5 rounded-lg border border-red-100">
                <div class="flex items-center text-red-700 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <h4 class="font-medium text-red-800">Contras</h4>
                </div>
                <ul class="mt-2 space-y-2">
                  ${level.cons.map(con => `
                    <li class="flex items-start text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <span>${con}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
            
            <div class="mt-8 bg-amber-50 p-5 rounded-lg border border-amber-100">
              <div class="flex items-center text-amber-700 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <h4 class="font-medium text-amber-800">Riscos</h4>
              </div>
              <div class="text-gray-700">
                ${level.risks}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add navigation event listeners
  document.getElementById('prev-level')?.addEventListener('click', () => {
    if (activeLevel > 0) {
      setActiveLevel(activeLevel - 1);
    }
  });
  
  document.getElementById('next-level')?.addEventListener('click', () => {
    if (activeLevel < levels.length - 1) {
      setActiveLevel(activeLevel + 1);
    }
  });
  
  document.getElementById('mobile-prev-level')?.addEventListener('click', () => {
    if (activeLevel > 0) {
      setActiveLevel(activeLevel - 1);
    }
  });
  
  document.getElementById('mobile-next-level')?.addEventListener('click', () => {
    if (activeLevel < levels.length - 1) {
      setActiveLevel(activeLevel + 1);
    }
  });
}

// Render framework steps
function renderFrameworkSteps() {
  if (!frameworkSteps) return;
  
  frameworkSteps.innerHTML = levels.map((level, index) => `
    <div 
      data-level="${index}" 
      class="flex flex-col items-center relative z-10 cursor-pointer ${
        activeLevel === index ? 'scale-110 transition-transform duration-200' : ''
      }"
    >
      <div 
        class="w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
          activeLevel === index 
            ? 'bg-primary text-white shadow-md ring-4 ring-primary/20' 
            : index < activeLevel 
              ? 'bg-primary/80 text-white'
              : 'bg-gray-200 text-gray-700'
        }"
      >
        <span class="font-bold">${index}</span>
      </div>
      <p class="${
        activeLevel === index
          ? 'mt-3 font-medium text-primary' 
          : 'mt-3 font-medium text-gray-500'
      }">${level.shortName}</p>
    </div>
  `).join('');
  
  // Add progress bar
  frameworkSteps.innerHTML += `
    <div class="absolute left-0 top-6 mt-3 transform -translate-y-1/2 h-2 bg-gray-200 w-full z-0 rounded-full">
      <div id="progress-bar" class="h-full bg-primary rounded-full transition-all duration-700 ease-in-out" style="width: ${(activeLevel / (levels.length - 1)) * 100}%"></div>
    </div>
  `;
  
  // Add event listeners
  document.querySelectorAll('[data-level]').forEach(step => {
    step.addEventListener('click', () => {
      const levelIndex = parseInt(step.dataset.level);
      setActiveLevel(levelIndex);
    });
  });
}

// Update metrics based on level
function updateMetrics(levelIndex) {
  // Define metrics values for each level
  const humanControlValues = [100, 90, 75, 60, 40, 20];
  const speedValues = [16, 30, 50, 70, 85, 95];
  const aiDependencyValues = [0, 15, 35, 60, 80, 95];
  
  // Update desktop metrics
  if (humanControlBar) {
    humanControlBar.style.width = `${humanControlValues[levelIndex]}%`;
  }
  
  if (speedBar) {
    speedBar.style.width = `${speedValues[levelIndex]}%`;
  }
  
  if (aiDependencyBar) {
    aiDependencyBar.style.width = `${aiDependencyValues[levelIndex]}%`;
  }
  
  // Update mobile metrics
  if (mobileHumanControl) {
    mobileHumanControl.style.width = `${humanControlValues[levelIndex]}%`;
  }
  
  if (mobileSpeed) {
    mobileSpeed.style.width = `${speedValues[levelIndex]}%`;
  }
  
  if (mobileAiDependency) {
    mobileAiDependency.style.width = `${aiDependencyValues[levelIndex]}%`;
  }
  
  // Update progress bar
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.width = `${(levelIndex / (levels.length - 1)) * 100}%`;
  }
}

// Set active level
function setActiveLevel(levelIndex) {
  activeLevel = levelIndex;
  
  // Update buttons
  document.querySelectorAll('[data-level]').forEach((el, index) => {
    if (index === levelIndex) {
      el.classList.remove('text-gray-700', 'bg-gray-100', 'hover:bg-gray-200');
      el.classList.add('text-white', 'bg-primary', 'shadow-md', 'hover:bg-primary/90');
    } else {
      el.classList.remove('text-white', 'bg-primary', 'shadow-md', 'hover:bg-primary/90');
      el.classList.add('text-gray-700', 'bg-gray-100', 'hover:bg-gray-200');
    }
  });
  
  // Update framework steps
  renderFrameworkSteps();
  
  // Update level details
  renderLevelDetails(levelIndex);
  
  // Update metrics
  updateMetrics(levelIndex);
}