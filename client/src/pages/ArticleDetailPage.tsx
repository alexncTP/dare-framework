import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Article } from '@shared/schema';

export default function ArticleDetailPage() {
  const [match, params] = useRoute("/artigos/:id");
  const articleId = params?.id;

  const { data: article, isLoading, error } = useQuery({
    queryKey: ['/api/articles', articleId],
    queryFn: async () => {
      if (!articleId) throw new Error('No article ID provided');
      const response = await fetch(`/api/articles/${articleId}`);
      if (!response.ok) throw new Error('Failed to fetch article');
      return response.json() as Promise<Article>;
    },
    enabled: !!articleId
  });

  if (!articleId) return <div>Article ID not provided</div>;
  
  if (isLoading) return <ArticleDetailSkeleton />;
  
  if (error || !article) return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl mb-4">Artigo não encontrado</h1>
          <Link to="/artigos">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar para artigos
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
  
  // Format the date
  const formattedDate = format(new Date(article.publishedAt), 'dd MMMM, yyyy');

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link to="/artigos">
              <Button variant="ghost" className="pl-0 hover:bg-transparent">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Voltar para artigos
              </Button>
            </Link>
          </div>
          
          {/* Article header */}
          <div className="mb-10">
            {article.featured === 1 && (
              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500">
                Artigo em destaque
              </Badge>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <span className="mr-4">Por {article.author}</span>
              <span>{formattedDate}</span>
            </div>
            
            {article.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {(article.tags as string[]).map(tag => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
            <p className="text-xl text-gray-600 italic">
              {article.summary}
            </p>
          </div>
          
          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* External link if available */}
          {article.url && (
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Referência externa</h3>
              <p className="mb-4">Quer aprofundar mais neste tema? Confira o artigo original:</p>
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {article.url}
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function ArticleDetailSkeleton() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-10 w-32 mb-8" />
          
          <div className="mb-10">
            <Skeleton className="h-8 w-32 mb-4" />
            <Skeleton className="h-16 w-full mb-4" />
            
            <div className="flex items-center mb-6">
              <Skeleton className="h-6 w-40 mr-4" />
              <Skeleton className="h-6 w-32" />
            </div>
            
            <div className="flex gap-2 mb-6">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-16" />
            </div>
            
            <Skeleton className="h-24 w-full" />
          </div>
          
          <div className="space-y-4">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-36 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
