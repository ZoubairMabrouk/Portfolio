export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "software",
    name: "Software Engineering",
    skills: [
      "C#", "ASP.NET Core", "Java", "Spring Boot", "React", "TypeScript",
      "REST APIs", "Microservices", "Software Architecture", "Git", "CI/CD",
    ],
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    skills: [
      "Python", "PyTorch", "TensorFlow", "NLP", "Transformers", "LLMs",
      "RAG", "Sentence Transformers", "Embeddings", "FAISS", "Scikit-learn", "Ollama",
    ],
  },
  {
    id: "data",
    name: "Data & Decision Support",
    skills: [
      "SQL Server", "PostgreSQL", "MongoDB", "Data Warehouse", "ETL", "OLAP",
      "SSIS", "SSAS", "Power BI", "MDX", "Data Integration", "Schema Matching",
    ],
  },
  {
    id: "infra",
    name: "Infrastructure",
    skills: ["Docker", "Linux", "Git/GitHub", "CI/CD", "API Gateway", "LangChain"],
  },
  {
    id: "bpm",
    name: "BPM & Process Management",
    skills: ["BPMN", "Process Mining", "Sustainable Business Process Management"],
  },
];

// Skill relationship graph for the "constellation" hover-highlight effect.
export const skillRelations: Record<string, string[]> = {
  "RAG": ["LLMs", "Embeddings", "FAISS", "LangChain", "Sentence Transformers"],
  "LLMs": ["RAG", "Transformers", "NLP", "Ollama"],
  "Embeddings": ["RAG", "FAISS", "Sentence Transformers"],
  "FAISS": ["RAG", "Embeddings", "LangChain"],
  "LangChain": ["RAG", "LLMs", "Ollama", "FAISS"],
  "Microservices": ["API Gateway", "REST APIs", "Docker", "Software Architecture"],
  "API Gateway": ["Microservices", "REST APIs", "ASP.NET Core"],
  "ETL": ["Data Warehouse", "OLAP", "SSIS", "MDX"],
  "OLAP": ["Data Warehouse", "SSAS", "MDX", "Power BI"],
  "MDX": ["SSAS", "OLAP", "Data Warehouse"],
  "Process Mining": ["BPMN", "Sustainable Business Process Management"],
};

export const buildPipeline = [
  { id: "idea", label: "Idea", items: ["Problem framing", "Requirements", "Research questions"] },
  { id: "architecture", label: "Architecture", items: ["Microservices", "APIs", "API Gateway"] },
  { id: "data", label: "Data", items: ["SQL", "ETL", "OLAP", "Data Warehouse"] },
  { id: "ai", label: "AI", items: ["LLMs", "RAG", "Embeddings"] },
  { id: "integration", label: "Integration", items: ["Dashboards", "Data pipelines", "Testing"] },
  { id: "deployment", label: "Deployment", items: ["Docker", "Linux", "CI/CD"] },
];
