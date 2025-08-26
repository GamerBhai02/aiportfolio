
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}

export interface Certification {
  title:string;
  issuer: string;
  date: string;
  skills: string[];
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}
