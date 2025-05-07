import { 
  User, 
  InsertUser, 
  Contribution, 
  InsertContribution, 
  FrameworkLevel, 
  InsertFrameworkLevel,
  Article,
  InsertArticle,
  users,
  contributions,
  frameworkLevels,
  articles
} from "@shared/schema";
import { frameworkLevels as initialFrameworkLevels } from "../client/src/data/frameworkLevels";
import { db } from "./db";
import { eq, desc, SQL, asc } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Framework Level methods
  getFrameworkLevel(id: number): Promise<FrameworkLevel | undefined>;
  getAllFrameworkLevels(): Promise<FrameworkLevel[]>;
  createFrameworkLevel(level: InsertFrameworkLevel): Promise<FrameworkLevel>;
  updateFrameworkLevel(id: number, level: Partial<InsertFrameworkLevel>): Promise<FrameworkLevel | undefined>;
  deleteFrameworkLevel(id: number): Promise<boolean>;

  // Contribution methods
  getContribution(id: number): Promise<Contribution | undefined>;
  getAllContributions(): Promise<Contribution[]>;
  createContribution(contribution: InsertContribution): Promise<Contribution>;
  updateContributionStatus(id: number, status: 'pending' | 'approved' | 'rejected'): Promise<Contribution | undefined>;
  deleteContribution(id: number): Promise<boolean>;

  // Article methods
  getArticle(id: number): Promise<Article | undefined>;
  getAllArticles(): Promise<Article[]>;
  getFeaturedArticles(): Promise<Article[]>;
  getArticlesByTag(tag: string): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article | undefined>;
  deleteArticle(id: number): Promise<boolean>;

  // Database initialization
  initializeDatabase(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async initializeDatabase(): Promise<void> {
    // Check if we have any framework levels already
    const existingLevels = await db.select().from(frameworkLevels);
    
    if (existingLevels.length === 0) {
      console.log("Initializing database with framework levels...");
      
      // Insert initial framework levels
      const levelsToInsert = initialFrameworkLevels.map(level => ({
        name: level.name,
        shortName: level.shortName,
        tagline: level.tagline,
        description: level.description,
        tools: level.tools || [],
        appropriateUses: level.appropriateUses || [],
        pros: level.pros,
        cons: level.cons,
        risks: level.risks,
        order: level.id,
      }));
      
      await db.insert(frameworkLevels).values(levelsToInsert);
      console.log("Framework levels initialized successfully.");
    }

    // Initialize some sample articles if needed
    try {
      const existingArticles = await db.select().from(articles);
      
      if (existingArticles.length === 0) {
        console.log("Initializing database with sample articles...");
        
        // These would typically come from a data file or API
        const sampleArticles = [
          {
            title: "Introdução ao DARE Framework",
            summary: "Uma visão geral do framework e seus níveis.",
            content: `
              <h2>O que é o DARE Framework?</h2>
              <p>O DARE (Design AI Reliable Engagement) Framework é uma metodologia para adoção de IA no design, organizada em níveis de 0 a 5.</p>
              <p>Cada nível representa um grau diferente de uso da inteligência artificial nos processos de design, desde o completamente manual até o altamente automatizado.</p>
              <h2>Por que usar o DARE Framework?</h2>
              <p>O framework oferece uma abordagem estruturada para designers e organizações que querem incorporar IA em seus processos de forma responsável e eficaz.</p>
            `,
            author: "Equipe DARE",
            tags: ["introdução", "visão geral", "níveis"],
            featured: 1
          },
          {
            title: "Como aplicar o Nível 2 em projetos de UI/UX",
            summary: "Exemplos práticos de uso do Nível 2 do DARE Framework em projetos de interface.",
            content: `
              <h2>O Nível 2 em prática</h2>
              <p>No Nível 2 (Assistência com Supervisão Humana), designers podem usar ferramentas de IA para gerar ideias e protótipos iniciais, mas sempre com supervisão direta.</p>
              <p>Este artigo explora estratégias eficazes para incorporar essas ferramentas sem comprometer a qualidade ou perder o controle do processo criativo.</p>
              <h3>Exemplos de fluxos de trabalho</h3>
              <ul>
                <li>Geração de wireframes com revisão manual</li>
                <li>Exploração de paletas de cores assistida por IA</li>
                <li>Criação de protótipos rápidos para testes iniciais</li>
              </ul>
            `,
            author: "Ana Silva",
            tags: ["nível 2", "ui/ux", "casos práticos"],
            featured: 0
          },
          {
            title: "Considerações éticas sobre IA no design",
            summary: "Uma análise das questões éticas relacionadas ao uso de IA em processos criativos.",
            content: `
              <h2>Ética e IA no Design</h2>
              <p>À medida que as ferramentas de IA se tornam mais integradas ao processo de design, surgem importantes questões éticas que precisam ser consideradas.</p>
              <p>Este artigo examina os dilemas éticos relacionados à autenticidade, propriedade intelectual, vieses algorítmicos e o impacto no mercado de trabalho.</p>
              <h3>Principais pontos de discussão</h3>
              <ul>
                <li>Transparência no uso de IA em projetos de design</li>
                <li>Atribuição apropriada e créditos em trabalhos assistidos por IA</li>
                <li>Identificação e mitigação de vieses em sistemas de IA para design</li>
                <li>Responsabilidade humana em decisões assistidas por IA</li>
              </ul>
            `,
            author: "Carlos Mendes",
            tags: ["ética", "responsabilidade", "propriedade intelectual"],
            featured: 1
          }
        ];
        
        await db.insert(articles).values(sampleArticles);
        console.log("Sample articles initialized successfully.");
      }
    } catch (error) {
      console.error("Error initializing articles:", error);
    }
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Framework Level methods
  async getFrameworkLevel(id: number): Promise<FrameworkLevel | undefined> {
    const [level] = await db.select().from(frameworkLevels).where(eq(frameworkLevels.id, id));
    return level;
  }

  async getAllFrameworkLevels(): Promise<FrameworkLevel[]> {
    return db.select().from(frameworkLevels).orderBy(asc(frameworkLevels.order));
  }

  async createFrameworkLevel(level: InsertFrameworkLevel): Promise<FrameworkLevel> {
    const [newLevel] = await db
      .insert(frameworkLevels)
      .values(level)
      .returning();
    return newLevel;
  }

  async updateFrameworkLevel(id: number, level: Partial<InsertFrameworkLevel>): Promise<FrameworkLevel | undefined> {
    const [updatedLevel] = await db
      .update(frameworkLevels)
      .set({
        ...level,
        updatedAt: new Date()
      })
      .where(eq(frameworkLevels.id, id))
      .returning();
    return updatedLevel;
  }

  async deleteFrameworkLevel(id: number): Promise<boolean> {
    const result = await db
      .delete(frameworkLevels)
      .where(eq(frameworkLevels.id, id));
    return !!result;
  }

  // Contribution methods
  async getContribution(id: number): Promise<Contribution | undefined> {
    const [contribution] = await db.select().from(contributions).where(eq(contributions.id, id));
    return contribution;
  }

  async getAllContributions(): Promise<Contribution[]> {
    return db
      .select()
      .from(contributions)
      .orderBy(desc(contributions.createdAt));
  }

  async createContribution(insertContribution: InsertContribution): Promise<Contribution> {
    const [contribution] = await db
      .insert(contributions)
      .values({
        ...insertContribution,
        status: 'pending'
      })
      .returning();
    return contribution;
  }

  async updateContributionStatus(id: number, status: 'pending' | 'approved' | 'rejected'): Promise<Contribution | undefined> {
    const [updatedContribution] = await db
      .update(contributions)
      .set({ 
        status,
        updatedAt: new Date()
      })
      .where(eq(contributions.id, id))
      .returning();
    return updatedContribution;
  }

  async deleteContribution(id: number): Promise<boolean> {
    const result = await db
      .delete(contributions)
      .where(eq(contributions.id, id));
    return !!result;
  }

  // Article methods
  async getArticle(id: number): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.id, id));
    return article;
  }

  async getAllArticles(): Promise<Article[]> {
    return db
      .select()
      .from(articles)
      .orderBy(desc(articles.publishedAt));
  }

  async getFeaturedArticles(): Promise<Article[]> {
    return db
      .select()
      .from(articles)
      .where(eq(articles.featured, 1))
      .orderBy(desc(articles.publishedAt));
  }

  async getArticlesByTag(tag: string): Promise<Article[]> {
    // This requires some SQL array operations, simplified for now
    // In a real implementation would use a proper JSONB query to find articles with the tag
    const allArticles = await this.getAllArticles();
    return allArticles.filter(article => {
      if (!article.tags) return false;
      const tags = article.tags as string[];
      return tags.includes(tag);
    });
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const [article] = await db
      .insert(articles)
      .values(insertArticle)
      .returning();
    return article;
  }

  async updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article | undefined> {
    const [updatedArticle] = await db
      .update(articles)
      .set({
        ...article,
        updatedAt: new Date()
      })
      .where(eq(articles.id, id))
      .returning();
    return updatedArticle;
  }

  async deleteArticle(id: number): Promise<boolean> {
    const result = await db
      .delete(articles)
      .where(eq(articles.id, id));
    return !!result;
  }
}

// Use the DatabaseStorage implementation instead of MemStorage
export const storage = new DatabaseStorage();
