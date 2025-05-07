import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useRoute } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Article } from '@shared/schema';
import { format } from 'date-fns';

export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [match, params] = useRoute("/artigos/:id");
  
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['/api/articles'],
    queryFn: async () => {
      const response = await fetch('/api/articles');
      if (!response.ok) throw new Error('Failed to fetch articles');
      return response.json() as Promise<Article[]>;
    }
  });

  const { data: featuredArticles, isLoading: isFeaturedLoading } = useQuery({
    queryKey: ['/api/articles/featured'],
    queryFn: async () => {
      const response = await fetch('/api/articles/featured');
      if (!response.ok) throw new Error('Failed to fetch featured articles');
      return response.json() as Promise<Article[]>;
    }
  });

  // Get unique tags from all articles
  const allTags = React.useMemo(() => {
    if (!articles) return [];
    const tags = new Set<string>();
    
    articles.forEach(article => {
      if (article.tags && Array.isArray(article.tags)) {
        (article.tags as string[]).forEach(tag => tags.add(tag));
      }
    });
    
    return Array.from(tags);
  }, [articles]);

  // Filter articles based on active tab
  const filteredArticles = React.useMemo(() => {
    if (!articles) return [];
    
    if (activeTab === "all") return articles;
    if (activeTab === "featured") return featuredArticles || [];
    
    // Filter by tag
    return articles.filter(article => {
      if (!article.tags) return false;
      const tags = article.tags as string[];
      return tags.includes(activeTab);
    });
  }, [articles, featuredArticles, activeTab]);

  if (error) return <div className="container py-12 text-center">Erro ao carregar artigos.</div>;

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Artigos e Recursos
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Explore artigos, guias e recursos sobre o DARE Framework e como integrar IA em processos de design de forma responsável.
          </p>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <div className="relative mb-4">
              <div className="overflow-x-auto pb-4 flex items-center scrollbar-thin">
                <TabsList className="h-12 mr-2 bg-gray-100/80 p-1 backdrop-blur-sm">
                  <TabsTrigger 
                    value="all" 
                    className="text-base px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-blue-600"
                  >
                    Todos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="featured" 
                    className="text-base px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-blue-600"
                  >
                    Destaque
                  </TabsTrigger>
                </TabsList>
                
                {allTags.length > 0 && (
                  <TabsList className="h-12 bg-gray-100/80 p-1 backdrop-blur-sm">
                    {allTags.map(tag => (
                      <TabsTrigger 
                        key={tag} 
                        value={tag}
                        className="text-base px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-blue-600"
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                )}
              </div>
              
              {/* Scroll indicators */}
              <div className="absolute top-0 right-0 bottom-0 w-12 pointer-events-none bg-gradient-to-l from-white to-transparent">
              </div>
            </div>

            {/* Articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                Array(6).fill(0).map((_, i) => (
                  <ArticleSkeleton key={i} />
                ))
              ) : (
                filteredArticles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))
              )}
            </div>

            {filteredArticles.length === 0 && !isLoading && (
              <div className="py-12 text-center">
                <p className="text-gray-500 mb-4">Nenhum artigo encontrado para esta categoria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab("all")}
                >
                  Ver todos os artigos
                </Button>
              </div>
            )}
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const formattedDate = format(new Date(article.publishedAt), 'dd/MM/yyyy');
  
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        {article.featured === 1 && (
          <Badge className="self-start bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
            Destaque
          </Badge>
        )}
        <CardTitle className="text-xl font-semibold">{article.title}</CardTitle>
        <CardDescription className="text-sm flex items-center justify-between">
          <span>{article.author}</span>
          <span className="text-gray-500">{formattedDate}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-gray-600">{article.summary}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags && (article.tags as string[]).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Link to={`/artigos/${article.id}`}>
          <Button variant="default" className="mt-auto">
            Ler artigo
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function ArticleSkeleton() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-7 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <Skeleton className="h-20 w-full" />
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-0">
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-10 w-28" />
      </CardFooter>
    </Card>
  );
}
