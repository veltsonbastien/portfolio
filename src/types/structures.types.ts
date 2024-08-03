export interface SiteLink {
  name: string;
  url: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
}

export enum WriteUpTag {
  REACT = "React",
  NEXTJS = "NextJS",
  TYPESCRIPT = "TypeScript",
  BACKEND = "Backend",
  FULLSTACK = "Fullstack",
  OOP = "OOP",
}

export interface WriteUpType {
  title: string;
  description: string;
  cta: string;
  link: string;
  tags: WriteUpTag[];
  documentId?: string;
}
