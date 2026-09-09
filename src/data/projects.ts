export type ProjectCategory = "AI" | "Software" | "Data" | "Research" | "IoT";

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  categories: ProjectCategory[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  architecture?: string[];
}

export const projects: Project[] = [
  {
    id: "rag-matcher",
    name: "RAG-Matcher",
    description:
      "A RAG-based module that builds semantic matching between different data sources against a defined target, suggesting SQL evolution operations applicable on the target side.",
    longDescription:
      "Retrieval-Augmented Generation module for semantic schema matching. Given heterogeneous data sources and a target schema, it retrieves relevant context and proposes SQL evolution/migration operations to align the source with the target — directly related to the doctoral and master's research on schema matching and decision support system evolution.",
    technologies: ["Python", "Jupyter Notebook", "RAG", "Embeddings", "SQL"],
    categories: ["AI", "Research", "Data"],
    githubUrl: "https://github.com/ZoubairMabrouk/RAG-MATCHER",
    featured: true,
    architecture: ["Data Sources", "Embedding & Retrieval", "RAG / LLM Matching", "SQL Evolution Suggestion"],
  },
  {
    id: "api-rest",
    name: "API-REST (.NET)",
    description:
      "A REST API built with C# and ASP.NET Core implementing CRUD operations, authentication, and a client-side consumer.",
    longDescription:
      "A full CRUD + authentication REST API built on ASP.NET Core, demonstrating clean API design and a consuming client — the same architectural foundations (C#, ASP.NET Core, REST APIs) used in the EDI-Solutions decision support platform.",
    technologies: ["C#", "ASP.NET Core", "REST APIs"],
    categories: ["Software"],
    githubUrl: "https://github.com/ZoubairMabrouk/API-REST",
    featured: true,
    architecture: ["Client", "REST API (ASP.NET Core)", "Authentication", "Database"],
  },
  {
    id: "smart-event-manager",
    name: "Smart Event Manager",
    description:
      "Intelligent management platform for events (conferences, trade shows, training) with smart ticketing, targeted notifications, online payment, and real-time statistics, built on microservices.",
    technologies: ["TypeScript", "Microservices"],
    categories: ["Software", "Data"],
    githubUrl: "https://github.com/ZoubairMabrouk/SMART-EVENT-MANAGER",
    featured: true,
  },
  {
    id: "javafx-graph",
    name: "JavaFX PCC Oriented Graph",
    description:
      "Desktop application in JavaFX to model graphs and compute shortest paths, applying SOLID principles with design patterns as the design backbone.",
    technologies: ["Java", "JavaFX", "SOLID", "Design Patterns"],
    categories: ["Software"],
    githubUrl: "https://github.com/ZoubairMabrouk/JAVAFX-PCC-ORIENTED-GRAPH",
  },
  {
    id: "custom-inventory",
    name: "Custom Inventory Management",
    description: "A custom inventory management module developed for Odoo 16.",
    technologies: ["Python", "Odoo"],
    categories: ["Software", "Data"],
    githubUrl: "https://github.com/ZoubairMabrouk/Custum-Inventory-Management",
  },
  {
    id: "soretras",
    name: "Bus Ticket Reservation – Soretras",
    description:
      "Cross-platform bus ticket reservation app for inter-city travel, built with Flutter and Firebase.",
    technologies: ["Dart", "Flutter", "Firebase"],
    categories: ["Software", "IoT"],
    githubUrl: "https://github.com/ZoubairMabrouk/R-servation-de-ticket-en-ligne-Soretras",
  },
];

export const categoryLabels: Record<"All" | ProjectCategory, string> = {
  All: "All",
  AI: "AI",
  Software: "Software",
  Data: "Data",
  Research: "Research",
  IoT: "IoT",
};
