import { pgTable, text, serial, integer, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Contributions table
export const contributions = pgTable("contributions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  type: text("type").notNull(), // 'framework-level', 'case-study', 'translation'
  status: text("status").notNull().default("pending"), // 'pending', 'approved', 'rejected'
  metadata: json("metadata"), // Can store level info, case study details, etc.
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertContributionSchema = createInsertSchema(contributions).pick({
  userId: true,
  title: true,
  content: true,
  type: true,
  metadata: true,
});

// Framework levels table
export const frameworkLevels = pgTable("framework_levels", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  shortName: text("short_name").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(),
  tools: json("tools"), // Array of tool names
  appropriateUses: json("appropriate_uses"), // Array of use cases
  pros: json("pros").notNull(), // Array of pros
  cons: json("cons").notNull(), // Array of cons
  risks: text("risks").notNull(),
  order: integer("order").notNull(), // For sorting levels
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertFrameworkLevelSchema = createInsertSchema(frameworkLevels).pick({
  name: true,
  shortName: true,
  tagline: true,
  description: true,
  tools: true,
  appropriateUses: true,
  pros: true,
  cons: true,
  risks: true,
  order: true,
});

// Articles table
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  imageUrl: text("image_url"),
  tags: json("tags"), // Array of tags
  publishedAt: timestamp("published_at").notNull().defaultNow(),
  url: text("url"), // External URL if applicable
  featured: integer("featured").default(0), // 0 = not featured, 1 = featured
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertArticleSchema = createInsertSchema(articles).pick({
  title: true,
  summary: true,
  content: true,
  author: true,
  imageUrl: true,
  tags: true,
  publishedAt: true,
  url: true,
  featured: true,
});

// Create types for ORM usage
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContribution = z.infer<typeof insertContributionSchema>;
export type Contribution = typeof contributions.$inferSelect;

export type InsertFrameworkLevel = z.infer<typeof insertFrameworkLevelSchema>;
export type FrameworkLevel = typeof frameworkLevels.$inferSelect;

export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;
