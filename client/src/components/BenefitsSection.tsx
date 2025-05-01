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
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="flex items-center mt-auto">
          <div className="bg-blue-100 rounded-lg p-3 text-center">
            <span className="block text-blue-700 text-2xl font-bold">{stat}</span>
            <span className="text-blue-600 text-sm">{statText}</span>
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
    <section id="vantagens" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            VANTAGENS
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Benefícios de Adotar o DARE
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como o framework DARE pode transformar seu processo de design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

        <div className="mt-12 text-center">
          <a href="#framework">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg">
              Explorar os Níveis do Framework
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}