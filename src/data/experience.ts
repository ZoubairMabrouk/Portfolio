export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "edi-solutions",
    company: "EDI-Solutions",
    role: "Final-Year Engineering Internship",
    period: "February – July 2026",
    summary:
      "Designed and developed an intelligent decision support platform built on a .NET microservices architecture.",
    bullets: [
      "Designed and developed an intelligent decision support platform.",
      "Developed a .NET microservices architecture with an API Gateway.",
      "Designed and integrated APIs for the different platform services.",
      "Implemented automatic generation of MDX queries from natural language using RAG approaches.",
      "Integrated dynamic dashboards and a multidimensional ETL pipeline.",
      "Containerized services using Docker and integrated local AI components.",
    ],
    technologies: ["C#", "ASP.NET Core", "SQL Server", "SSAS", "MDX", "Docker", "LangChain", "FAISS", "Ollama"],
  },
  {
    id: "eritech",
    company: "ERITECH Groups",
    role: "Engineering Internship",
    period: "July – August 2025",
    summary: "Adapted, integrated, and customized open-source home automation solutions.",
    bullets: ["Adapted, integrated, and customized open-source home automation solutions."],
    technologies: ["Home Automation", "Open Source Integration"],
  },
  {
    id: "triki",
    company: "Confiserie Triki le Moulin",
    role: "Final-Year Bachelor's Internship",
    period: "February – June 2022",
    location: "Sfax",
    summary: "Designed an Industry 4.0 monitoring platform with real-time mobile dashboarding.",
    bullets: [
      "Designed an Industry 4.0-based monitoring platform.",
      "Developed a mobile application for real-time monitoring and dashboarding.",
      "Integrated industrial data using OPC UA.",
    ],
    technologies: ["JavaScript", "Java (Android)", "Firebase", "Raspberry Pi 3", "Linux", "OPC UA", "Industry 4.0"],
  },
];
