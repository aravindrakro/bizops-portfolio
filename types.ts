export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  score: number; // For visualization purposes (1-100)
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
}