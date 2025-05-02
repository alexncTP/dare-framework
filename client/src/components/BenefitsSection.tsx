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
      title: "Produtividade Aumentada",
      description: "Reduza o tempo gasto em tarefas repetitivas e aumente a velocidade de entrega de projetos de design.",
      stat: "+30%",
      statText: "Aumento médio de produtividade"
    },
    {
      title: "Inovação Acelerada",
      description: "Explore mais variações e possibilidades criativas com a ajuda da IA, ampliando o horizonte de inovação.",
      stat: "3x",
      statText: "Mais ideias exploradas"
    },
    {
      title: "Controle Equilibrado",
      description: "Mantenha o equilíbrio entre automação e controle criativo, escolhendo o nível adequado para cada projeto.",
      stat: "100%",
      statText: "Controle sobre o processo"
    },
    {
      title: "Escalabilidade",
      description: "Adapte o uso de IA conforme a complexidade e escala dos projetos, desde pequenas tarefas até sistemas completos.",
      stat: "5x",
      statText: "Capacidade de escala"
    },
    {
      title: "Colaboração Aprimorada",
      description: "Facilite a colaboração entre designers, desenvolvedores e stakeholders com processos assistidos por IA.",
      stat: "-40%",
      statText: "Redução em revisões"
    },
    {
      title: "Aprendizado Contínuo",
      description: "Evolua gradualmente na adoção de IA, permitindo que a equipe aprenda e se adapte em seu próprio ritmo.",
      stat: "+25%",
      statText: "Aumento em habilidades"
    }
  ];

  return (
    <section id="vantagens" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            VANTAGENS
          </h2>
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Benefícios de Adotar o DARE
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como o framework DARE pode transformar seu processo de design
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
              Explorar os Níveis do Framework
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}