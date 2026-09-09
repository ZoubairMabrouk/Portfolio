export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  topic?: string;
}

export const education: EducationItem[] = [
  {
    id: "phd",
    degree: "PhD in Computer Science",
    institution: "FSEGS – University of Sfax, Tunisia",
    period: "2026 – Present",
    topic: "Intelligent Monitoring and Automated Anomaly Detection in the Cloud-Edge Continuum",
  },
  {
    id: "masters",
    degree: "Research Master's Degree in Computer Science",
    institution: "FSEGS – University of Sfax, Tunisia",
    period: "2024 – 2025",
    topic: "Intelligent Evolution of Decision Support Systems and Semantic Integration",
  },
  {
    id: "engineering",
    degree: "National Engineering Degree in Software Engineering and Decision Support Systems",
    institution: "International Institute of Technology (IIT), Tunisia",
    period: "2023 – 2026",
  },
  {
    id: "bachelor",
    degree: "Bachelor's Degree in Computer Science – Embedded Systems",
    institution: "ISET Sfax, Tunisia",
    period: "2020 – 2022",
  },
];

export const certifications = [
  { id: "nvidia", name: "Getting Started with Deep Learning", issuer: "NVIDIA", year: "2026" },
  { id: "spark", name: "Big Data & Machine Learning with Apache Spark", issuer: "Certification", year: "2024" },
  { id: "python-oop", name: "Python Object-Oriented Programming", issuer: "Certification", year: "2024" },
];
