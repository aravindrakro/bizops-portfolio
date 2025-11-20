import { ExperienceItem, EducationItem, CertificationItem, SkillCategory, ContactInfo } from './types';
import { Briefcase, BarChart2, Cpu, PenTool, Database } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Aravind Agoramurthi",
  title: "Business Operations Specialist",
  summary: "Business Operations Specialist with 2+ years of experience in driving efficient sales and business operations. Specializes in supporting core sales and revenue operations processes, ensuring seamless execution, strategic alignment, and process consistency across teams. Focuses on CRM optimization and operational visibility, streamlining workflows, and enhancing team productivity.",
};

export const CONTACT_INFO: ContactInfo = {
  phone: "+91 99448 64090",
  email: "a.aravindkkl@gmail.com",
  location: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/aravind-agoramurthi/"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp1",
    company: "Korcomptenz Inc",
    role: "Business Operations - Executive",
    period: "Jan 2025 - Present",
    description: [
      "Streamlined business processes by optimizing workflows in HubSpot and Microsoft Dynamics 365, reducing data entry errors by 25% and enhancing lead management efficiency.",
      "Led training sessions for over 10 team members on HubSpot CRM, boosting CRM adoption by 30% and ensuring uniform usage across departments.",
      "Developed over 15 Power BI dashboards, cutting down reporting time by 40% and empowering leadership with timely, actionable insights.",
      "Designed and implemented comprehensive SOPs for sales, marketing, and lead generation activities.",
      "Utilized ZoomInfo to pinpoint 500+ high-potential clients, driving a 20% increase in lead conversion."
    ]
  },
  {
    id: "exp2",
    company: "Korcomptenz Inc",
    role: "Sales Operations Trainee",
    period: "Aug 2023 - Dec 2024",
    description: [
      "Spearheaded the optimization and maintenance of CRM systems (HubSpot and Microsoft Dynamics 365).",
      "Streamlined sales processes by automating workflows within HubSpot, reducing manual tasks.",
      "Developed custom reports and dashboards using Power BI for improved sales performance visibility.",
      "Worked closely with sales, marketing, and finance teams to align strategies with business objectives.",
      "Managed the sales pipeline and forecasting process, ensuring accurate tracking of leads."
    ]
  },
  {
    id: "exp3",
    company: "DevRev",
    role: "Strategic Operations - Intern",
    period: "Jun 2022 - Feb 2023",
    description: [
      "Analyzed 10,000+ data points using Looker Studio & Excel, generating insights that improved business strategy alignment by 20%.",
      "Managed CRM workflows, reducing lead processing time by 30% and improving customer engagement tracking.",
      "Utilized SEO techniques and data reporting for website performance and decision-making.",
      "Collaborated effectively in multicultural environments with diverse teams."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu1",
    institution: "SRM Institute of Science and Technology",
    degree: "MBA (Business Analytics and Operations)",
    period: "2021 - 2023",
    details: "CGPA: 9.01"
  },
  {
    id: "edu2",
    institution: "Panimalar Engineering College",
    degree: "B.E. (Mechanical Engineering)",
    period: "2016 - 2020",
    details: "CGPA: 7.0"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "CRM & Sales Ops",
    skills: ["HubSpot CRM", "Microsoft Dynamics 365", "Salesforce", "DevRev", "SendGrid", "Outplay"],
    score: 95
  },
  {
    name: "Data Analytics",
    skills: ["Power BI", "Excel (Pivot/Macros)", "Looker Studio", "BigQuery", "SQL (Basics)"],
    score: 90
  },
  {
    name: "Sales Intel",
    skills: ["6sense", "ZoomInfo", "LinkedIn Sales Navigator", "Infotelligent", "Apollo", "Kendo"],
    score: 85
  },
  {
    name: "Project Mgmt",
    skills: ["Microsoft Project", "Airtable", "Microsoft Visio", "DevRev"],
    score: 80
  },
  {
    name: "Design & Comm",
    skills: ["PowerPoint", "Figma", "Canva", "Photoshop"],
    score: 75
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { id: "c1", name: "HubSpot Sales Software Certification", issuer: "HubSpot", category: "CRM" },
  { id: "c2", name: "Salesforce CRM (Pursuing)", issuer: "Salesforce", category: "CRM" },
  { id: "c3", name: "Analyzing & Visualizing Data in Looker", issuer: "Google", category: "Analytics" },
  { id: "c4", name: "Google Generative AI (LLM)", issuer: "Google", category: "AI/Tech" },
  { id: "c5", name: "Zapier Automation Fundamentals", issuer: "Zapier", category: "Automation" },
  { id: "c6", name: "Project Management Foundations", issuer: "PMI", category: "Management" },
  { id: "c7", name: "Agile Foundations", issuer: "PMI", category: "Management" }
];

export const CATEGORY_ICONS = {
  "CRM & Sales Ops": Briefcase,
  "Data Analytics": BarChart2,
  "Sales Intel": Database,
  "Project Mgmt": Cpu,
  "Design & Comm": PenTool
};