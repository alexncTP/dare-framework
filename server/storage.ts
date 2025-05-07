import { 
  User, 
  InsertUser, 
  Contribution, 
  InsertContribution, 
  FrameworkLevel, 
  InsertFrameworkLevel,
  users,
  contributions,
  frameworkLevels
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
}

// Use the DatabaseStorage implementation instead of MemStorage
export const storage = new DatabaseStorage();
