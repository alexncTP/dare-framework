import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResourceModal from './ResourceModal';

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalData, setModalData] = useState<{ isOpen: boolean; level: number; title: string; content: string }>({
    isOpen: false,
    level: 0,
    title: "",
    content: ""
  });

  // Conteúdo detalhado para cada nível
  const levelDetails = {
    0: {
      title: "Manual Total",
      content: "No Nível 0, o design é realizado de maneira totalmente manual, sem o uso de IA. Essa fase é ideal para quando você precisa de total controle sobre cada aspecto do design, como esboços iniciais e wireframes simples. O uso de ferramentas tradicionais como Caneta e Papel ou plataformas como Figma e Adobe XD em sua versão manual são essenciais aqui. Este nível exige mais tempo e esforço, mas oferece um controle total sobre o produto final, sendo perfeito para projetos altamente personalizados ou quando a criatividade humana precisa estar no centro do processo."
    },
    1: {
      title: "Assistência Básica",
      content: "No Nível 1, a IA começa a atuar como assistente, ajudando com tarefas de organização e coleta de dados. Ferramentas como ChatGPT, Notion AI e Miro AI Assist ajudam a otimizar o processo de pesquisa, documentação e brainstorming. Neste nível, você mantém a responsabilidade criativa e o controle sobre as decisões, mas utiliza a IA para acelerar tarefas de suporte. Esse nível é ideal para quem está começando a explorar IA no design e quer aumentar a produtividade sem perder o controle do processo criativo."
    },
    2: {
      title: "Auxílio Pontual",
      content: "Nível 2 envolve a IA gerando partes específicas do trabalho, como imagens e elementos gráficos, para aliviar o designer de tarefas repetitivas. Ferramentas como Midjourney, DALL-E e Leonardo.ai podem ser usadas para gerar imagens, texturas e padrões personalizados que complementam o design. Neste nível, o designer ainda mantém o controle total do design, mas pode confiar em ferramentas de IA para acelerar a criação de ativos visuais e facilitar o processo de produção."
    },
    3: {
      title: "Design Acelerado",
      content: "No Nível 3, a IA começa a atuar como um copiloto, sugerindo e completando partes do design em tempo real. Ferramentas como Figma AI, Adobe Firefly e Framer AI ajudam a acelerar o processo de prototipagem e criação de layouts. A IA faz sugestões de arranjos e até preenche partes do design com base nas informações fornecidas, permitindo que o designer se concentre mais na direção criativa e nas decisões de alto nível. Esse nível é ideal quando você precisa de rapidez, mas ainda quer manter um papel ativo no processo de design."
    },
    4: {
      title: "Co-criação",
      content: "O Nível 4 é onde a IA começa a assumir um papel mais ativo no processo de design. Ferramentas como Galileo AI, Uizard e Diagram geram interfaces completas ou transformam rascunhos em protótipos interativos de alta fidelidade. Aqui, o designer e a IA trabalham juntos na criação de um produto de design mais refinado. A IA gera propostas iniciais, e o designer faz ajustes finos para garantir que o produto final esteja alinhado com os objetivos do projeto. Esse nível é ideal para prototipagem rápida e exploração de várias alternativas de design em um curto período de tempo."
    },
    5: {
      title: "Automação de Componentes",
      content: "No Nível 5, a IA começa a gerar componentes completos e funcionais a partir de descrições ou designs. Ferramentas como Builder.io, Anima e Locofy.ai convertem designs em código front-end, gerando interfaces que podem ser diretamente integradas ao desenvolvimento. Este nível permite que os designers se concentrem mais no layout e na estrutura geral, enquanto a IA cuida da implementação dos detalhes técnicos. Ideal para projetos em que a eficiência e a velocidade de entrega são prioridades, e quando há necessidade de iterar rapidamente entre design e desenvolvimento."
    }
  };

  const openModal = (level: number) => {
    const details = levelDetails[level as keyof typeof levelDetails];
    setModalData({
      isOpen: true,
      level,
      title: details.title,
      content: details.content
    });
  };

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  // Função para renderizar cards de cada nível
  const renderLevelCard = (level: number, title: string, tools: string[], compact = false) => {
    return (
      <Card key={level} className="overflow-hidden hover:shadow-lg transition-shadow w-full max-w-[calc(33%-1rem)] min-w-[280px] mx-auto">
        <CardContent className={`p-0 ${compact ? 'h-full' : ''}`}>
          <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <h3 className="font-bold text-lg mb-1">Nível {level}</h3>
            <p className="text-white/90">{title}</p>
          </div>
          <div className="p-5">
            <ul className="space-y-2 mb-4">
              {tools.map((tool, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Button 
                variant="outline" 
                className="text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 w-full"
                onClick={() => openModal(level)}
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="recursos" className="py-16 bg-gray-50">
      {/* Modal para detalhes de cada nível */}
      <ResourceModal 
        isOpen={modalData.isOpen}
        onClose={closeModal}
        level={modalData.level}
        title={modalData.title}
        content={modalData.content}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            RECURSOS
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Ferramentas Recomendadas por Nível
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore as melhores ferramentas de IA para cada estágio do framework DARE
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 gap-2">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Todos os Níveis
              </TabsTrigger>
              <TabsTrigger value="basic" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Básico (0-1)
              </TabsTrigger>
              <TabsTrigger value="intermediate" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Intermediário (2-3)
              </TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Avançado (4-5)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-2">
              <div className="flex flex-wrap justify-center gap-6">
                {renderLevelCard(0, "Manual Total", [
                  "Caneta e papel para esboços iniciais",
                  "Figma ou Adobe XD para wireframes simples e protótipos básicos",
                  "Processos analógicos de design, sem automação de IA"
                ], true)}
                
                {renderLevelCard(1, "Assistência Básica", [
                  "ChatGPT para organização de pesquisas, resumos e insights",
                  "Notion AI para documentação e organização de informações de projetos",
                  "Miro AI Assist para construção de mapas mentais e brainstorming"
                ], true)}
                
                {renderLevelCard(2, "Auxílio Pontual", [
                  "Midjourney para geração de imagens de alta qualidade e moodboards",
                  "DALL-E para criação de assets visuais personalizados",
                  "Leonardo.ai para geração de texturas, padrões e ilustrações",
                  "GPT-Image 1 para geração de imagens realistas baseadas em prompts textuais",
                  "Ideogram para criar imagens detalhadas e inovadoras a partir de descrições"
                ], true)}
                
                {renderLevelCard(3, "Design Acelerado", [
                  "Figma AI para autocompletar layouts, sugestões de design e organização de componentes",
                  "Adobe Firefly para edição rápida e criação de imagens e gráficos",
                  "Framer AI para prototipagem rápida e design interativo",
                  "Sora para automação de fluxos de trabalho de design e colaboração em tempo real",
                  "Lovable para otimizar a experiência de design colaborativo"
                ], true)}
                
                {renderLevelCard(4, "Co-criação", [
                  "Galileo AI para geração automática de UI, criando layouts interativos",
                  "Uizard para transformação de rascunhos e wireframes em protótipos de alta fidelidade",
                  "Diagram para ideação visual, geração de ideias e conceitos gráficos",
                  "v0 (Vercel) para criação de sistemas de design escaláveis",
                  "Replit para gerar código funcional, para pequenos MVPs que necessitem de uma leve integração com banco de dados, porém exige um pouco de conhecimento técnico"
                ], true)}
                
                {renderLevelCard(5, "Automação de Componentes", [
                  "Builder.io para criação de componentes React automatizados e dinâmicos",
                  "Anima para conversão de design para código (HTML, CSS, React)",
                  "Locofy.ai para gerar código a partir de designs e layouts de UI",
                  "Bolt para criação de MVPs rápidos e automação de design para código"
                ], true)}
              </div>
            </TabsContent>

            <TabsContent value="basic" className="mt-2">
              <div className="flex flex-wrap justify-center gap-6">
                {renderLevelCard(0, "Manual Total", [
                  "Caneta e papel para esboços iniciais",
                  "Figma ou Adobe XD para wireframes simples e protótipos básicos",
                  "Processos analógicos de design, sem automação de IA"
                ])}
                
                {renderLevelCard(1, "Assistência Básica", [
                  "ChatGPT para organização de pesquisas, resumos e insights",
                  "Notion AI para documentação e organização de informações de projetos",
                  "Miro AI Assist para construção de mapas mentais e brainstorming"
                ])}
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="mt-2">
              <div className="flex flex-wrap justify-center gap-6">
                {renderLevelCard(2, "Auxílio Pontual", [
                  "Midjourney para geração de imagens de alta qualidade e moodboards",
                  "DALL-E para criação de assets visuais personalizados",
                  "Leonardo.ai para geração de texturas, padrões e ilustrações",
                  "GPT-Image 1 para geração de imagens realistas baseadas em prompts textuais",
                  "Ideogram para criar imagens detalhadas e inovadoras a partir de descrições"
                ])}
                
                {renderLevelCard(3, "Design Acelerado", [
                  "Figma AI para autocompletar layouts, sugestões de design e organização de componentes",
                  "Adobe Firefly para edição rápida e criação de imagens e gráficos",
                  "Framer AI para prototipagem rápida e design interativo",
                  "Sora para automação de fluxos de trabalho de design e colaboração em tempo real",
                  "Lovable para otimizar a experiência de design colaborativo"
                ])}
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-2">
              <div className="flex flex-wrap justify-center gap-6">
                {renderLevelCard(4, "Co-criação", [
                  "Galileo AI para geração automática de UI, criando layouts interativos",
                  "Uizard para transformação de rascunhos e wireframes em protótipos de alta fidelidade",
                  "Diagram para ideação visual, geração de ideias e conceitos gráficos",
                  "v0 (Vercel) para criação de sistemas de design escaláveis",
                  "Replit para gerar código funcional, para pequenos MVPs que necessitem de uma leve integração com banco de dados, porém exige um pouco de conhecimento técnico"
                ])}
                
                {renderLevelCard(5, "Automação de Componentes", [
                  "Builder.io para criação de componentes React automatizados e dinâmicos",
                  "Anima para conversão de design para código (HTML, CSS, React)",
                  "Locofy.ai para gerar código a partir de designs e layouts de UI",
                  "Bolt para criação de MVPs rápidos e automação de design para código"
                ])}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}