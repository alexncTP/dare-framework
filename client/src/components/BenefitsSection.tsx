import React from 'react';
import { Button } from '@/components/ui/button';

type BenefitProps = {
  title: string;
  description: string;
  stat: string;
  statText: string;
};

function BenefitCard({ title, description, stat, statText }: BenefitProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:border-blue-100 border border-gray-100 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-blue-100 pb-2">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="flex items-center mt-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 text-center shadow-sm">
            <span className="block text-blue-600 text-2xl font-bold">{stat}</span>
            <span className="text-blue-600 text-sm font-medium">{statText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  const benefits: BenefitProps[] = [
    {
      title: "Boosted Productivity",
      description: "Cut down on repetitive tasks and speed up design project delivery.",
      stat: "+30%",
      statText: "Average productivity increase"
    },
    {
      title: "Accelerated Innovation",
      description: "Explore more variations and creative possibilities with AI, expanding your innovation horizon.",
      stat: "3x",
      statText: "More ideas explored"
    },
    {
      title: "Balanced Control",
      description: "Keep the right balance between automation and creative direction by choosing the right level for each project.",
      stat: "100%",
      statText: "Process control"
    },
    {
      title: "Scalability",
      description: "Scale AI usage to match project complexity—from small tasks to full systems.",
      stat: "5x",
      statText: "Scalability capacity"
    },
    {
      title: "Enhanced Collaboration",
      description: "Streamline collaboration between designers, developers, and stakeholders with AI-assisted workflows.",
      stat: "-40%",
      statText: "Fewer revisions"
    },
    {
      title: "Continuous Learning",
      description: "Adopt AI gradually, giving your team time to learn, adapt, and grow their skills.",
      stat: "+25%",
      statText: "Skill growth"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            BENEFITS
          </h2>
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Why Adopt the DARE Framework
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how the DARE Framework can transform your design process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              stat={benefit.stat}
              statText={benefit.statText}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#framework">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
              Explore the Framework Levels
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
