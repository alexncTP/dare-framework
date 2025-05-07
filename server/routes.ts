import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for framework levels
  app.get("/api/framework-levels", async (req, res) => {
    try {
      const levels = await storage.getAllFrameworkLevels();
      res.json(levels);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch framework levels", error: (error as Error).message });
    }
  });

  app.get("/api/framework-levels/:id", async (req, res) => {
    try {
      const level = await storage.getFrameworkLevel(parseInt(req.params.id));
      if (!level) {
        return res.status(404).json({ message: "Framework level not found" });
      }
      res.json(level);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch framework level", error: (error as Error).message });
    }
  });

  // API routes for contributions
  app.get("/api/contributions", async (req, res) => {
    try {
      const contributions = await storage.getAllContributions();
      res.json(contributions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contributions", error: (error as Error).message });
    }
  });

  app.post("/api/contributions", async (req, res) => {
    try {
      const contribution = await storage.createContribution(req.body);
      res.status(201).json(contribution);
    } catch (error) {
      res.status(500).json({ message: "Failed to create contribution", error: (error as Error).message });
    }
  });

  app.get("/api/contributions/:id", async (req, res) => {
    try {
      const contribution = await storage.getContribution(parseInt(req.params.id));
      if (!contribution) {
        return res.status(404).json({ message: "Contribution not found" });
      }
      res.json(contribution);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contribution", error: (error as Error).message });
    }
  });

  // User routes
  app.post("/api/users", async (req, res) => {
    try {
      const user = await storage.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to create user", error: (error as Error).message });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const user = await storage.getUser(parseInt(req.params.id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user", error: (error as Error).message });
    }
  });

  // Article routes
  app.get("/api/articles", async (req, res) => {
    try {
      const articles = await storage.getAllArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch articles", error: (error as Error).message });
    }
  });

  app.get("/api/articles/featured", async (req, res) => {
    try {
      const articles = await storage.getFeaturedArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured articles", error: (error as Error).message });
    }
  });

  app.get("/api/articles/tag/:tag", async (req, res) => {
    try {
      const articles = await storage.getArticlesByTag(req.params.tag);
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch articles by tag", error: (error as Error).message });
    }
  });

  app.get("/api/articles/:id", async (req, res) => {
    try {
      const article = await storage.getArticle(parseInt(req.params.id));
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch article", error: (error as Error).message });
    }
  });

  app.post("/api/articles", async (req, res) => {
    try {
      const article = await storage.createArticle(req.body);
      res.status(201).json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to create article", error: (error as Error).message });
    }
  });

  app.put("/api/articles/:id", async (req, res) => {
    try {
      const article = await storage.updateArticle(parseInt(req.params.id), req.body);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to update article", error: (error as Error).message });
    }
  });

  app.delete("/api/articles/:id", async (req, res) => {
    try {
      const success = await storage.deleteArticle(parseInt(req.params.id));
      if (!success) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete article", error: (error as Error).message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
