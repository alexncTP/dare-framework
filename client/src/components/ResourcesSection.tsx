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

  // Função para abrir o modal com os dados do nível selecionado
  const openModal = (level: number) => {
    let title = "";
    let content = "";

    switch (level) {
      case 0:
        title = "Nível 0 - Manual Total";
        content = `
          <p><strong>No Nível 0, o designer trabalha completamente sem assistência de IA.</strong></p>
          
          <p>Todo o processo criativo é realizado manualmente, desde a concepção inicial até a finalização, utilizando apenas ferramentas tradicionais de design como Figma, Sketch ou Adobe XD para wireframes e protótipos.</p>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Projetos que exigem uma abordagem puramente humana</li>
            <li>Trabalhos onde o cliente requer total controle e autoria</li>
            <li>Situações onde questões de propriedade intelectual são rigorosas</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>Total controle criativo e autoria clara</li>
            <li>Originalidade garantida nas soluções</li>
            <li>Sem preocupações com propriedade intelectual ligadas à IA</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Processo significativamente mais lento</li>
            <li>Maior custo para o cliente devido ao tempo envolvido</li>
            <li>Limitação às habilidades técnicas do designer individual</li>
          </ul>

          <p><strong>Nível de risco:</strong> Nenhum risco associado ao uso de IA, mas maior tempo de desenvolvimento.</p>
        `;
        break;
      case 1:
        title = "Nível 1 - Assistência Básica";
        content = `
          <p><strong>No Nível 1, o designer utiliza IA como ferramenta organizacional e de pesquisa.</strong></p>
          
          <p>A IA é utilizada apenas para tarefas secundárias como organização de informações, análise de dados e geração de insights preliminares. Todo o trabalho visual e criativo continua sendo 100% realizado pelo designer.</p>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Projetos que necessitam de pesquisa e organização eficiente</li>
            <li>Trabalhos com grandes volumes de informação a serem analisados</li>
            <li>Situações que exigem criatividade humana mas se beneficiam de apoio estrutural</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>Aceleração das fases de pesquisa e organização</li>
            <li>Análise mais profunda de dados e tendências</li>
            <li>Mantém a autoria criativa integralmente humana</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Benefícios de produtividade limitados</li>
            <li>Possíveis vieses na organização de informações pela IA</li>
            <li>Necessidade de verificação humana das sugestões</li>
          </ul>

          <p><strong>Nível de risco:</strong> Mínimo, com questões éticas relacionadas apenas à fonte e qualidade dos dados utilizados.</p>
        `;
        break;
      case 2:
        title = "Nível 2 - Auxílio Pontual";
        content = `
          <p><strong>No Nível 2, o designer incorpora geração de imagens por IA como fonte de inspiração visual.</strong></p>
          
          <p>A IA é usada para criar moodboards, referências visuais e elementos gráficos que servem como ponto de partida, mas o designer mantém total controle sobre o desenvolvimento e finalização do projeto.</p>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Projetos que necessitam de exploração visual rápida</li>
            <li>Criação de moodboards e direções estéticas preliminares</li>
            <li>Geração de ativos visuais complementares</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>Ampliação do repertório visual e possibilidades criativas</li>
            <li>Aceleração na geração de referências e conceitos</li>
            <li>Possibilidade de testar rapidamente diferentes direções visuais</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Risco de homogeneização estética</li>
            <li>Potenciais problemas de direitos autorais nas imagens geradas</li>
            <li>Dependência da qualidade dos prompts para resultados satisfatórios</li>
          </ul>

          <p><strong>Nível de risco:</strong> Moderado, principalmente relacionado a direitos autorais das imagens geradas e originalidade.</p>
        `;
        break;
      case 3:
        title = "Nível 3 - Design Acelerado";
        content = `
          <p><strong>No Nível 3, o designer utiliza IA para acelerar fluxos específicos do processo de design.</strong></p>
          
          <p>A IA é incorporada como ferramenta de auxílio em tarefas como criação de layouts, geração de variações, e refinamento de elementos. O designer mantém a direção criativa e toma as decisões finais, usando a IA como acelerador do processo.</p>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Projetos com prazos apertados</li>
            <li>Necessidade de testar múltiplas variações rapidamente</li>
            <li>Refinamento e iteração de conceitos já estabelecidos</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>Significativo aumento de produtividade</li>
            <li>Capacidade de explorar mais soluções em menos tempo</li>
            <li>Automação de tarefas repetitivas</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Possível perda de nuances e detalhes específicos</li>
            <li>Risco de soluções mais genéricas</li>
            <li>Necessidade de supervisão constante da qualidade</li>
          </ul>

          <p><strong>Nível de risco:</strong> Moderado a alto, exigindo transparência com clientes sobre os processos auxiliados por IA.</p>
        `;
        break;
      case 4:
        title = "Nível 4 - Co-criação";
        content = `
          <p><strong>No Nível 4, o designer trabalha em parceria direta com a IA, em um processo de co-criação.</strong></p>
          
          <p>A IA é utilizada para gerar layouts, interfaces e elementos visuais completos, que o designer então avalia, seleciona, refina e integra ao projeto. A responsabilidade criativa é compartilhada, com o designer atuando como curador e diretor.</p>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Projetos experimentais ou inovadores</li>
            <li>Situações onde a eficiência é prioridade máxima</li>
            <li>Clientes abertos à integração profunda de IA no processo</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>Produtividade extremamente alta</li>
            <li>Possibilidade de resultados inesperados e inovadores</li>
            <li>Capacidade de atender mais projetos simultaneamente</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Questões éticas sobre autoria e originalidade</li>
            <li>Potencial homogeneização de soluções</li>
            <li>Exigência de transparência total com clientes</li>
          </ul>

          <p><strong>Nível de risco:</strong> Alto, requerendo comunicação clara com clientes e acordos específicos sobre propriedade intelectual.</p>
        `;
        break;
      case 5:
        title = "Nível 5 - Automação de Componentes";
        content = `
          <p><strong>No Nível 5, a IA automatiza a criação de componentes funcionais e código a partir do design.</strong></p>
          
          <p>Além da co-criação visual, a IA é utilizada para transformar designs em código, gerar protótipos funcionais e automatizar a implementação. O designer supervisiona o processo, garantindo qualidade e consistência.</p>

          <h4>Apropriado para:</h4>
          <ul>
            <li>Projetos que exigem rápida prototipação funcional</li>
            <li>MVPs e produtos digitais com prazos curtos</li>
            <li>Clientes com total abertura para métodos inovadores</li>
          </ul>

          <h4>Prós:</h4>
          <ul>
            <li>Integração direta entre design e implementação</li>
            <li>Extraordinária velocidade de entrega</li>
            <li>Potencial para maior experimentação técnica</li>
          </ul>

          <h4>Contras:</h4>
          <ul>
            <li>Alta complexidade técnica</li>
            <li>Desafios significativos de controle de qualidade</li>
            <li>Questões profundas sobre o papel do designer</li>
          </ul>

          <p><strong>Nível de risco:</strong> Muito alto, exigindo acordos contratuais específicos e total transparência sobre o uso de IA em todo o processo.</p>
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

  // Função para fechar o modal
  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  // Função para renderizar cards de cada nível
  const renderLevelCard = (level: number, title: string, tools: string[], compact = false) => {
    return (
      <Card key={level} className="overflow-hidden snap-center shrink-0 w-[280px] md:w-[300px] border-gray-200 hover:shadow-md transition-all">
        <CardContent className={`p-0 ${compact ? 'h-full' : ''}`}>
          <div className="p-4 bg-blue-600 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">{title}</h3>
              <span className="bg-white text-blue-600 text-xs px-2 py-1 rounded font-medium">
                Nível {level}
              </span>
            </div>
          </div>
          <div className="p-4">
            <ul className="space-y-1 mb-4 text-sm text-gray-700">
              {tools.map((tool, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              className="w-full text-sm font-medium"
              onClick={() => openModal(level)}
            >
              Saiba mais
            </Button>
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
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Ferramentas Recomendadas
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore as ferramentas de IA adequadas para cada nível do framework
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <div className="text-sm text-gray-500 mb-4 text-center">
            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M15 18l-6-6 6-6"/><path d="M9 18l-6-6 6-6"/></svg>
              <span>Deslize para navegar</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/><path d="m15 18 6-6-6-6"/></svg>
            </span>
          </div>
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full flex justify-center mb-8 space-x-2">
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4">
                Todos
              </TabsTrigger>
              <TabsTrigger value="basic" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4">
                Básico
              </TabsTrigger>
              <TabsTrigger value="intermediate" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4">
                Intermediário
              </TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none px-4">
                Avançado
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-2">
              <div className="relative snap-x-container">
                <div className="flex overflow-x-auto pb-6 pt-2 space-x-6 snap-x px-4 rounded justify-center md:justify-start">
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
              </div>
            </TabsContent>

            <TabsContent value="basic" className="mt-2">
              <div className="relative snap-x-container">
                <div className="flex overflow-x-auto pb-6 pt-2 space-x-6 snap-x px-4 rounded justify-center md:justify-start">
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
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="mt-2">
              <div className="relative snap-x-container">
                <div className="flex overflow-x-auto pb-6 pt-2 space-x-6 snap-x px-4 rounded justify-center md:justify-start">
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
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-2">
              <div className="relative snap-x-container">
                <div className="flex overflow-x-auto pb-6 pt-2 space-x-6 snap-x px-4 rounded justify-center md:justify-start">
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
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}