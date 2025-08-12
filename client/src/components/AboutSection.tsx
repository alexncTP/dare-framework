import { ArrowRightIcon, UsersIcon, BrainIcon, EyeIcon, LightbulbIcon } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-medium">
              What is the DARE Framework?
            </div>
            <h2 className="gradient-text">About the DARE Framework</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              The Design AI Reliable Engagement (DARE) Framework gives designers, agencies, and organizations 
              a structured approach to adopting artificial intelligence in design workflows—spanning UI, UX, motion, and branding.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Community-Driven</h3>
                <p className="mt-2 text-gray-600">
                  Inspired by models like Creative Commons, the DARE Framework is open for public contribution and adaptation—creating a living system that evolves alongside AI technology.
                </p>
                <a href="#contribute" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>Learn how to contribute</span>
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
                <h3 className="text-xl font-semibold text-gray-900">Human-Centered</h3>
                <p className="mt-2 text-gray-600">
                  DARE emphasizes that AI should enhance—not replace—human creativity, with guidelines that protect the integrity of design work while leveraging AI’s strengths.
                </p>
                <a href="#manifesto" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>Read our manifesto</span>
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
                <h3 className="text-xl font-semibold text-gray-900">Transparency</h3>
                <p className="mt-2 text-gray-600">
                  The framework sets clear guidelines for disclosing AI use in design work—helping establish ethical standards and building trust with clients and users.
                </p>
                <a href="#framework" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>Understand the levels</span>
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
                <h3 className="text-xl font-semibold text-gray-900">Practical</h3>
                <p className="mt-2 text-gray-600">
                  Each level of the framework includes specific tools, processes, and considerations—making it immediately actionable for real-world design challenges.
                </p>
                <a href="#framework" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>Explore the tools</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              A framework for every stage of adoption
            </div>
            <h3 className="text-2xl font-bold text-gray-900">From Fully Manual to AI-Guided Automation</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              The DARE Framework maps AI adoption across six distinct levels—helping design teams integrate artificial intelligence in a controlled, ethical way.
            </p>
            
            <div className="mt-8 inline-flex shadow-sm overflow-hidden rounded-lg">
              <a 
                href="#framework" 
                className="px-6 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Explore the Framework Levels
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
