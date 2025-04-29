export interface FrameworkLevel {
  id: number;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  tools?: string[];
  appropriateUses?: string[];
  pros: string[];
  cons: string[];
  risks: string;
}

export interface Contribution {
  id: number;
  title: string;
  author: string;
  date: Date;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
}
