import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ResourceModal from "./ResourceModal";

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalData, setModalData] = useState({
    isOpen: false,
    level: 0,
    title: "",
    content: ""
  });

  // Function to open the modal with data for the selected level
  const openModal = (level: number) => {
    let title = "";
    let content = "";

    switch (level) {
      case 0:
        title = "Level 0 – Fully Manual";
        content = `
          <p><strong>At Level 0, the designer works completely without AI assistance.</strong></p>
          
          <p>The entire creative process is handled manually—from early concept to final delivery—using only traditional design tools like Figma, Sketch, or Adobe XD for wireframes and prototypes.</p>

          <h4>Appropriate for:</h4>
          <ul>
            <li>Projects that require a purely human approach</li>
            <li>Engagements where the client requires full control and authorship</li>
            <li>Situations with strict intellectual property requirements</li>
          </ul>

          <h4>Pros:</h4>
          <ul>
            <li>Complete creative control and clear authorship</li>
            <li>Guaranteed originality in solutions</li>
            <li>No AI-related intellectual property concerns</li>
          </ul>

          <h4>Cons:</h4>
          <ul>
            <li>Significantly slower process</li>
            <li>Higher client cost due to the time involved</li>
            <li>Limited to the individual designer’s technical skills</li>
          </ul>

          <p><strong>Risk level:</strong> No risks related to AI usage, but longer development time.</p>
        `;
        break;
      case 1:
        title = "Level 1 – Basic Assistance";
        content = `
          <p><strong>At Level 1, the designer uses AI for organization and research.</strong></p>
          
          <p>AI is used only for secondary tasks like structuring information, data analysis, and generating preliminary insights. All visual and creative work remains 100% human-made by the designer.</p>

          <h4>Appropriate for:</h4>
          <ul>
            <li>Projects that need efficient research and organization</li>
            <li>Work with large volumes of information to analyze</li>
            <li>Scenarios that rely on human creativity but benefit from structural support</li>
          </ul>

          <h4>Pros:</h4>
          <ul>
            <li>Faster research and organization phases</li>
            <li>Deeper data and trend analysis</li>
            <li>Maintains fully human creative authorship</li>
          </ul>

          <h4>Cons:</h4>
          <ul>
            <li>Limited productivity gains</li>
            <li>Possible bias in AI-structured information</li>
            <li>Human verification of suggestions is required</li>
          </ul>

          <p><strong>Risk level:</strong> Minimal—primarily ethical considerations about data sources and quality.</p>
        `;
        break;
      case 2:
        title = "Level 2 – Targeted Support";
        content = `
          <p><strong>At Level 2, the designer incorporates AI image generation as visual inspiration.</strong></p>
          
          <p>AI is used to create mood boards, references, and graphic elements that serve as a starting point, while the designer retains full control over development and finalization.</p>

          <h4>Appropriate for:</h4>
          <ul>
            <li>Projects that need rapid visual exploration</li>
            <li>Creating mood boards and early aesthetic directions</li>
            <li>Generating complementary visual assets</li>
          </ul>

          <h4>Pros:</h4>
          <ul>
            <li>Broader visual repertoire and creative possibilities</li>
            <li>Faster generation of references and concepts</li>
            <li>Ability to test different directions quickly</li>
          </ul>

          <h4>Cons:</h4>
          <ul>
            <li>Risk of aesthetic homogenization</li>
            <li>Potential copyright issues with generated images</li>
            <li>Outcome quality depends on prompt craft</li>
          </ul>

          <p><strong>Risk level:</strong> Moderate—mainly around copyright of generated images and originality.</p>
        `;
        break;
      case 3:
        title = "Level 3 – Accelerated Design";
        content = `
          <p><strong>At Level 3, the designer uses AI to accelerate specific parts of the design process.</strong></p>
          
          <p>AI assists tasks like layout creation, variation generation, and element refinement. The designer keeps creative direction and makes final decisions, using AI as a process accelerator.</p>

          <h4>Appropriate for:</h4>
          <ul>
            <li>Projects with tight deadlines</li>
            <li>Need to test multiple variations quickly</li>
            <li>Refinement and iteration of established concepts</li>
          </ul>

          <h4>Pros:</h4>
          <ul>
            <li>Significant productivity gains</li>
            <li>Explore more solutions in less time</li>
            <li>Automation of repetitive tasks</li>
          </ul>

          <h4>Cons:</h4>
          <ul>
            <li>Possible loss of nuance and project-specific detail</li>
            <li>Risk of more generic solutions</li>
            <li>Requires ongoing quality oversight</li>
          </ul>

          <p><strong>Risk level:</strong> Moderate to high—transparency with clients about AI-assisted steps is important.</p>
        `;
        break;
      case 4:
        title = "Level 4 – Co-creation";
        content = `
          <p><strong>At Level 4, the designer works in direct partnership with AI in a co-creation process.</strong></p>
          
          <p>AI generates full layouts, interfaces, and visual elements that the designer evaluates, selects, refines, and integrates. Creative responsibility is shared, with the designer acting as curator and director.</p>

          <h4>Appropriate for:</h4>
          <ul>
            <li>Experimental or innovation-focused projects</li>
            <li>Situations where efficiency is the top priority</li>
            <li>Clients open to deeper AI integration in the process</li>
          </ul>

          <h4>Pros:</h4>
          <ul>
            <li>Extremely high productivity</li>
            <li>Potential for surprising, innovative results</li>
            <li>Capacity to take on more projects simultaneously</li>
          </ul>

          <h4>Cons:</h4>
          <ul>
            <li>Ethical questions around authorship and originality</li>
            <li>Potential homogenization of solutions</li>
            <li>Demands full transparency with clients</li>
          </ul>

          <p><strong>Risk level:</strong> High—requires clear client communication and specific IP agreements.</p>
        `;
        break;
      case 5:
        title = "Level 5 – Component Automation";
        content = `
          <p><strong>At Level 5, AI automates the creation of functional components and code from design.</strong></p>
          
          <p>Beyond visual co-creation, AI transforms designs into code, generates functional prototypes, and automates implementation. The designer oversees the process to ensure quality and consistency.</p>

          <h4>Appropriate for:</h4>
          <ul>
            <li>Projects that require rapid functional prototyping</li>
            <li>MVPs and digital products on short timelines</li>
            <li>Clients fully open to innovative methods</li>
          </ul>

          <h4>Pros:</h4>
          <ul>
            <li>Direct integration between design and implementation</li>
            <li>Extraordinary delivery speed</li>
            <li>Greater room for technical experimentation</li>
          </ul>

          <h4>Cons:</h4>
          <ul>
            <li>High technical complexity</li>
            <li>Significant quality assurance challenges</li>
            <li>Deeper questions about the designer’s role</li>
          </ul>

          <p><strong>Risk level:</strong> Very high—requires specific contractual agreements and full transparency on AI use throughout.</p>
        `;
        break;
      default:
        break;
    }

    setModalData({
      isOpen: true,
      level,
      title,
      content
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  // Function to render a card for each level
  const renderLevelCard = (level: number, title: string, tools: string[], compact = false) => {
    return (
      <Card key={level} className="overflow-hidden snap-center shrink-0 w-[260px] sm:w-[280px] md:w-[300px] border-0 hover:shadow-xl transition-all duration-300 rounded-xl bg-white shadow-md relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 z-0"></div>
        <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-lg transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
        
        <CardContent className={`p-0 ${compact ? 'h-full' : ''} relative z-10`}>
          <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">{title}</h3>
              <span className="bg-white text-blue-600 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                Level {level + 1}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">Key Tools</h4>
              <ul className="space-y-3 mb-5 text-sm text-gray-700">
                {tools.map((tool, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                    </span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full text-sm font-medium bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:bg-blue-100 hover:text-blue-700 transition-colors rounded-lg shadow-sm"
              onClick={() => openModal(level)}
            >
              View full details
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="resources" className="py-24 bg-gradient-to-b from-blue-50/10 to-blue-100/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      
      {/* Modal with details for each level */}
      <ResourceModal 
        isOpen={modalData.isOpen}
        onClose={closeModal}
        level={modalData.level}
        title={modalData.title}
        content={modalData.content}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 rounded-full bg-blue-100/50 text-blue-700 font-medium text-sm mb-4">
            Level 1 to Level 6
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Recommended Tools
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Explore the AI tools suited to each level of the framework
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-sm mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-4 py-2 rounded-full inline-flex items-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M15 18l-6-6 6-6"/><path d="M9 18l-6-6 6-6"/></svg>
              <span className="font-medium">Swipe to browse</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m9 18 6-6-6-6"/><path d="m15 18 6-6-6-6"/></svg>
            </span>
          </div>
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="overflow-x-auto pb-2 max-w-full">
              <div className="bg-white/60 p-2 rounded-xl shadow-sm backdrop-blur-sm max-w-2xl mx-auto">
                <TabsList className="flex justify-start md:justify-center mb-0 space-x-1 bg-blue-50/80 rounded-lg p-1 min-w-max mx-auto">
                  <TabsTrigger value="all" className="rounded-md px-4 sm:px-5 py-2.5 text-sm font-medium whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200">
                    All Levels
                  </TabsTrigger>
                  <TabsTrigger value="basic" className="rounded-md px-4 sm:px-5 py-2.5 text-sm font-medium whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200">
                    Basic (1–2)
                  </TabsTrigger>
                  <TabsTrigger value="intermediate" className="rounded-md px-4 sm:px-5 py-2.5 text-sm font-medium whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200">
                    Intermediate (3–4)
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="rounded-md px-4 sm:px-5 py-2.5 text-sm font-medium whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200">
                    Advanced (5–6)
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <TabsContent value="all" className="mt-4">
              <div className="relative snap-x-container">
                <div className="flex overflow-x-auto scrollbar-hide pb-10 pt-4 space-x-4 md:space-x-6 snap-x px-2 md:px-4 rounded-lg mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {renderLevelCard(0, "Fully Manual", [
                    "Pen and paper for early sketches",
                    "Figma or Adobe XD for simple wireframes and basic prototypes",
                    "Analog design processes with no AI automation"
                  ], true)}
                  
                  {renderLevelCard(1, "Basic Assistance", [
                    "ChatGPT for organizing research, summaries, and insights",
                    "Notion AI for project documentation and information organization",
                    "Miro AI Assist for mind maps and brainstorming"
                  ], true)}
                  
                  {renderLevelCard(2, "Targeted Support", [
                    "Midjourney for high-quality image generation and mood boards",
                    "DALL·E for custom visual asset creation",
                    "Leonardo.ai for textures, patterns, and illustrations",
                    "GPT-Image 1 for realistic images from text prompts",
                    "Ideogram to create detailed, innovative images from descriptions"
                  ], true)}
                  
                  {renderLevelCard(3, "Accelerated Design", [
                    "Figma AI to autocomplete layouts, suggest designs, and organize components",
                    "Adobe Firefly for fast editing and generation of images/graphics",
                    "Framer AI for rapid prototyping and interactive design",
                    "Sora for workflow automation and real-time collaboration",
                    "Lovable to streamline collaborative design experience"
                  ], true)}
                  
                  {renderLevelCard(4, "Co-creation", [
                    "Galileo AI for automatic UI generation and interactive layouts",
                    "Uizard to transform sketches and wireframes into high-fidelity prototypes",
                    "Diagram for visual ideation, idea generation, and graphic concepts",
                    "v0 (Vercel) for building scalable design systems",
                    "Replit to generate functional code for small MVPs with light database integration (requires some technical knowledge)"
                  ], true)}
                  
                  {renderLevelCard(5, "Component Automation", [
                    "Builder.io for automated, dynamic React component creation",
                    "Anima to convert design to code (HTML, CSS, React)",
                    "Locofy.ai to generate code from UI designs and layouts",
                    "Bolt for rapid MVP creation and design-to-code automation"
                  ], true)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
                  <span className="h-1.5 w-24 bg-blue-200 rounded-full"></span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="basic" className="mt-4">
              <div className="relative snap-x-container">
                <div className="flex overflow-x-auto scrollbar-hide pb-10 pt-4 space-x-4 md:space-x-6 snap-x px-2 md:px-4 rounded-lg mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {renderLevelCard(0, "Fully Manual", [
                    "Pen and paper for early sketches",
                    "Figma or Adobe XD for simple wireframes and basic prototypes",
                    "Analog design processes with no AI automation"
                  ])}
                  
                  {renderLevelCard(1, "Basic Assistance", [
                    "ChatGPT for organizing research, summaries, and insights",
                    "Notion AI for project documentation and information organization",
                    "Miro AI Assist for mind maps and brainstorming"
                  ])}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
                  <span className="h-1.5 w-16 bg-blue-200 rounded-full"></span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="mt-4">
              <div className="relative snap-x-container">
                <div className="flex overflow-x-auto scrollbar-hide pb-10 pt-4 space-x-4 md:space-x-6 snap-x px-2 md:px-4 rounded-lg mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {renderLevelCard(2, "Targeted Support", [
                    "Midjourney for high-quality image generation and mood boards",
                    "DALL·E for custom visual asset creation",
                    "Leonardo.ai for textures, patterns, and illustrations",
                    "GPT-Image 1 for realistic images from text prompts",
                    "Ideogram to create detailed, innovative images from descriptions"
                  ])}
                  
                  {renderLevelCard(3, "Accelerated Design", [
                    "Figma AI to autocomplete layouts, suggest designs, and organize components",
                    "Adobe Firefly for fast editing and generation of images/graphics",
                    "Framer AI for rapid prototyping and interactive design",
                    "Sora for workflow automation and real-time collaboration",
                    "Lovable to streamline collaborative design experience"
                  ])}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
                  <span className="h-1.5 w-16 bg-blue-200 rounded-full"></span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-4">
              <div className="relative snap-x-container">
                <div className="flex overflow-x-auto scrollbar-hide pb-10 pt-4 space-x-4 md:space-x-6 snap-x px-2 md:px-4 rounded-lg mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {renderLevelCard(4, "Co-creation", [
                    "Galileo AI for automatic UI generation and interactive layouts",
                    "Uizard to transform sketches and wireframes into high-fidelity prototypes",
                    "Diagram for visual ideation, idea generation, and graphic concepts",
                    "v0 (Vercel) for building scalable design systems",
                    "Replit to generate functional code for small MVPs with light database integration (requires some technical knowledge)"
                  ])}
                  
                  {renderLevelCard(5, "Component Automation", [
                    "Builder.io for automated, dynamic React component creation",
                    "Anima to convert design to code (HTML, CSS, React)",
                    "Locofy.ai to generate code from UI designs and layouts",
                    "Bolt for rapid MVP creation and design-to-code automation"
                  ])}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
                  <span className="h-1.5 w-16 bg-blue-200 rounded-full"></span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
