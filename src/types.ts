export interface ResearchProject {
  id: string;
  description: string;
  papers: Paper[];
  videos: Video[];
}

export interface Person {
  photoName?: string;
  name?: string;
  position?: string;
  university?: string;
  email?: string;
  googleScholar?: string;
  researchGate?: string;
  cv?: string;
  shortBio?: string;
  personalGithub?: string;
  labGithub?: string;
  linkedin?: string;
  researchAreas?: string[];
}

export interface Paper {
  name: string;
  url: string;
}

export interface Video {
  title: string;
  description: string;
  url: string;
}

export interface Info {
  title: string;
  description: string;
}
