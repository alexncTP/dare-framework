import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="recursos" className="py-16 bg-gray-50">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
                  "Replit para gerar código front-end automatizado"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderLevelCard(4, "Co-criação", [
                  "Galileo AI para geração automática de UI, criando layouts interativos",
                  "Uizard para transformação de rascunhos e wireframes em protótipos de alta fidelidade",
                  "Diagram para ideação visual, geração de ideias e conceitos gráficos",
                  "v0 (Vercel) para criação de sistemas de design escaláveis",
                  "Replit para gerar código front-end automatizado"
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

function renderLevelCard(level: number, title: string, tools: string[], compact = false) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 w-full">
              Saiba mais
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}