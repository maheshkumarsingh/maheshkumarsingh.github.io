export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  personal: string;
  address: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Certification {
  title: string;
  code: string;
  date: string;
}

export interface Award {
  title: string;
  description: string;
  date: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate?: string;
  location: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  link: string | null;
  github: string | null;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  year: string;
  grade: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  title: string;
  role: string;
  location: string;
  contact: ContactInfo;
  summary: string[];
  skills: Skill[];
  certifications: Certification[];
  awards: Award[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  socialLinks: SocialLink[];
}
