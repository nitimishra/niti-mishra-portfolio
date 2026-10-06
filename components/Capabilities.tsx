"use client";

import { skillCategories, languages, certifications } from "@/lib/data";

export default function Capabilities() {
  const toolRows = [
    {
      category: "Multi-Agent & Agentic AI",
      items: [
        "Multi-Agent Systems",
        "OpenAI Agent SDK",
        "CrewAI",
        "AutoGen",
        "Model Context Protocol (MCP)",
        "Guardrails",
        "Tool Calling & Function Execution",
      ],
    },
    {
      category: "Gen AI & LLMs",
      items: [
        "Transformers",
        "Large Language Models (LLMs)",
        "LangChain",
        "LangSmith",
        "Retrieval-Augmented Generation (RAG)",
        "Embeddings",
        "Vector Search",
        "Prompt Engineering",
      ],
    },
    {
      category: "AI / ML Foundations",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Computer Vision",
        "Natural Language Processing (NLP)",
        "Data Preprocessing",
        "Feature Engineering",
        "Model Evaluation",
      ],
    },
    {
      category: "Libraries & Frameworks",
      items: [
        "PyTorch",
        "TensorFlow / Keras",
        "Hugging Face",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Tkinter",
      ],
    },
    {
      category: "MLOps & Cloud Deployment",
      items: [
        "MLflow",
        "FastAPI",
        "Streamlit",
        "Docker",
        "Model Deployment",
        "Experiment Tracking",
        "AWS",
        "IBM Cloud",
        "Kubernetes (Basics)",
      ],
    },
    {
      category: "Languages & Engineering",
      items: [
        "Python",
        "SQL",
        "C",
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook",
        "REST APIs",
      ],
    },
    {
      category: "Certifications & Achievements",
      items: [
        "Anthropic AI-Fluency",
        "Anthropic Claude 101",
        "IIT Dhanbad UAS Drone Bootcamp",
        "Smart India Hackathon",
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-blueLight mb-2 font-semibold">
            04 / Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
            Toolkit
          </h2>
        </div>

        <div className="mt-14 space-y-2">
          {toolRows.map((row) => (
            <div
              key={row.category}
              className="grid gap-x-8 gap-y-3 py-7 border-t border-white/[0.08] md:grid-cols-[220px_1fr]"
            >
              <h3 className="font-mono text-xs uppercase tracking-wide text-zinc-500 pt-1">
                {row.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08] hover:border-accent-blue/50 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
