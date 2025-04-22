import { 
  User, 
  InsertUser, 
  Contribution, 
  InsertContribution, 
  FrameworkLevel, 
  InsertFrameworkLevel 
} from "@shared/schema";
import { frameworkLevels as initialFrameworkLevels } from "../client/src/data/frameworkLevels";

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
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contributions: Map<number, Contribution>;
  private frameworkLevels: Map<number, FrameworkLevel>;
  private userId: number;
  private contributionId: number;
  private frameworkLevelId: number;

  constructor() {
    this.users = new Map();
    this.contributions = new Map();
    this.frameworkLevels = new Map();
    this.userId = 1;
    this.contributionId = 1;
    this.frameworkLevelId = 0;

    // Initialize with example framework levels
    this.initializeFrameworkLevels();
  }

  private initializeFrameworkLevels() {
    initialFrameworkLevels.forEach(level => {
      const newLevel: FrameworkLevel = {
        ...level,
        order: level.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.frameworkLevels.set(level.id, newLevel);
      this.frameworkLevelId = Math.max(this.frameworkLevelId, level.id + 1);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Framework Level methods
  async getFrameworkLevel(id: number): Promise<FrameworkLevel | undefined> {
    return this.frameworkLevels.get(id);
  }

  async getAllFrameworkLevels(): Promise<FrameworkLevel[]> {
    return Array.from(this.frameworkLevels.values())
      .sort((a, b) => a.order - b.order);
  }

  async createFrameworkLevel(level: InsertFrameworkLevel): Promise<FrameworkLevel> {
    const id = this.frameworkLevelId++;
    const newLevel: FrameworkLevel = {
      ...level,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.frameworkLevels.set(id, newLevel);
    return newLevel;
  }

  async updateFrameworkLevel(id: number, level: Partial<InsertFrameworkLevel>): Promise<FrameworkLevel | undefined> {
    const existingLevel = this.frameworkLevels.get(id);
    if (!existingLevel) return undefined;

    const updatedLevel: FrameworkLevel = {
      ...existingLevel,
      ...level,
      updatedAt: new Date(),
    };
    this.frameworkLevels.set(id, updatedLevel);
    return updatedLevel;
  }

  async deleteFrameworkLevel(id: number): Promise<boolean> {
    return this.frameworkLevels.delete(id);
  }

  // Contribution methods
  async getContribution(id: number): Promise<Contribution | undefined> {
    return this.contributions.get(id);
  }

  async getAllContributions(): Promise<Contribution[]> {
    return Array.from(this.contributions.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createContribution(insertContribution: InsertContribution): Promise<Contribution> {
    const id = this.contributionId++;
    const contribution: Contribution = {
      ...insertContribution,
      id,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.contributions.set(id, contribution);
    return contribution;
  }

  async updateContributionStatus(id: number, status: 'pending' | 'approved' | 'rejected'): Promise<Contribution | undefined> {
    const existingContribution = this.contributions.get(id);
    if (!existingContribution) return undefined;

    const updatedContribution: Contribution = {
      ...existingContribution,
      status,
      updatedAt: new Date(),
    };
    this.contributions.set(id, updatedContribution);
    return updatedContribution;
  }

  async deleteContribution(id: number): Promise<boolean> {
    return this.contributions.delete(id);
  }
}

export const storage = new MemStorage();
