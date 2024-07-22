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

export interface WriteUp {
  title: string;
  description: string;
  cta: string;
  link: string;
}
