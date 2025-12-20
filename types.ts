
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  location: string;
  year: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum SectionId {
  HERO = 'hero',
  PHILOSOPHY = 'philosophy',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}
