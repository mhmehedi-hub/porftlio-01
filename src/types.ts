export interface Project {
  id: string;
  title: string;
  category: 'branding' | 'ui-ux' | 'render' | 'typography';
  description: string;
  longDescription: string;
  image: string;
  date: string;
  client: string;
  tags: string[];
  dimensions?: string;
  fileSize?: string;
  colors: string[];
  role: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Core Design' | 'Software' | 'Aesthetics';
  iconName: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'agency' | 'freelance' | 'award';
}
