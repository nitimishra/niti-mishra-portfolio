export const profile = {
  name: "Niti Mishra",
  shortName: "Niti",
  role: "AI & Machine Learning Engineer",
  tagline: "Python · PyTorch · LLMs · LangChain · RAG · Computer Vision",
  statement:
    "AI/ML-focused final year CS undergrad skilled in Python, PyTorch, LLMs, LangChain, and RAG. Experienced in building production-ready AI applications to solve real-world problems. Seeking an AI/ML opportunity to drive impact and expand technical expertise.",
  email: "nitimishra2004@gmail.com",
  phone: "+91 8858478713",
  github: "https://github.com/nitimishra",
  linkedin: "https://www.linkedin.com/in/niti-mishra21",
  resumeHref: "/resume.pdf",
  location: "Delhi, India",
  availability: "Seeking AI/ML Engineering Opportunities",
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Workflow", href: "#workflow" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
];

export const keyStats = [
  {
    value: "04",
    label: "Core AI/ML Projects",
    detail: "GenAI, RAG, Computer Vision & Cryptographic Bot",
  },
  {
    value: "02",
    label: "Industry & Research Internships",
    detail: "AI Research at IIT Indore & Cloud Computing at IBM",
  },
  {
    value: "06",
    label: "Aerial Semantic Classes",
    detail: "Pixel-Level Segmentation via Custom U-Net",
  },
  {
    value: "04",
    label: "Certifications & Achievements",
    detail: "Anthropic Claude & AI-Fluency, IIT Dhanbad, SIH",
  },
];

export const techMarquee = [
  { name: "Multi-Agent Systems", category: "Agentic AI" },
  { name: "OpenAI Agent SDK", category: "Agent Framework" },
  { name: "CrewAI", category: "Agent Orchestration" },
  { name: "AutoGen", category: "Multi-Agent AI" },
  { name: "MCP (Model Context Protocol)", category: "Agent Protocol" },
  { name: "Guardrails", category: "AI Safety" },
  { name: "Transformers", category: "Deep Learning" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "LangChain", category: "GenAI" },
  { name: "LangSmith", category: "LLMOps" },
  { name: "IIT Indore", category: "AI Research" },
  { name: "IBM Cloud", category: "Cloud & DevOps" },
  { name: "Docker", category: "Containerization" },
  { name: "FastAPI", category: "API Serving" },
  { name: "TensorFlow / Keras", category: "Deep Learning" },
  { name: "OpenCV", category: "Computer Vision" },
  { name: "Python", category: "Primary Language" },
];

export const highlightOrbits = [
  {
    quote: "Engineered pixel-level semantic segmentation across 6 land-cover classes on 512×512 aerial images using a custom U-Net.",
    author: "aerial-unet",
    role: "Computer Vision",
  },
  {
    quote: "Implemented history-aware retrieval query reformulation in LangChain to eliminate multi-turn hallucination.",
    author: "RAG Pipeline",
    role: "Generative AI",
  },
  {
    quote: "Trained character-level LSTM networks with temperature sampling to capture long-range literary patterns.",
    author: "Poetic-Text-Generation",
    role: "Natural Language Processing",
  },
  {
    quote: "Conducted end-to-end model training, data annotation, and CV segmentation research at IIT Indore.",
    author: "IIT Indore",
    role: "AI Research Internship",
  },
];

export type Project = {
  id: string;
  badge: string;
  category: "Computer Vision" | "Generative AI" | "Natural Language Processing" | "Security & Tools";
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  period: string;
  metrics: { label: string; value: string }[];
  problem: string;
  approach: string[];
  features: string[];
  result: string;
  status: string;
};

export const projects: Project[] = [
  {
    id: "aerial-unet",
    badge: "COMPUTER VISION",
    category: "Computer Vision",
    title: "aerial-unet",
    subtitle: "Custom U-Net Model for Pixel-Level Semantic Segmentation of Aerial Imagery",
    period: "July 2026 – August 2026",
    description:
      "A deep learning semantic segmentation pipeline built with TensorFlow and Keras to classify aerial imagery into 6 distinct semantic classes with pixel-level precision.",
    tech: ["Python", "TensorFlow", "Keras", "U-Net", "NumPy", "Scikit-learn", "PIL", "Matplotlib"],
    github: "https://github.com/nitimishra/aerial-unet",
    status: "Model Validated · 6 Classes",
    metrics: [
      { label: "Semantic Classes", value: "6 Classes" },
      { label: "Patch Resolution", value: "512 × 512" },
      { label: "Framework", value: "TensorFlow / Keras" },
    ],
    problem:
      "Aerial imagery captures complex environments with overlapping terrain, urban structures, roads, and water bodies. High-fidelity land-cover mapping requires pixel-level classification rather than simple whole-image tagging.",
    approach: [
      "Preprocessed high-resolution aerial images and encoded segmentation masks into 6 distinct semantic classes.",
      "Architected and trained a custom U-Net convolutional neural network with skip connections to preserve fine spatial boundaries.",
      "Trained, evaluated, and visualized model predictions against ground-truth segmentation masks.",
    ],
    features: [
      "Custom U-Net encoder-decoder architecture implemented in TensorFlow/Keras",
      "512×512 image patch preprocessing and multi-class mask encoding",
      "Comprehensive evaluation and prediction visualization pipeline",
    ],
    result:
      "Successfully produced pixel-level segmentation maps across 6 semantic categories, accurately isolating land, buildings, roads, vegetation, and water bodies.",
  },
  {
    id: "rag-application",
    badge: "GENERATIVE AI & RAG",
    category: "Generative AI",
    title: "RAG Pipeline — Document Q&A Application",
    subtitle: "Modular Contextual Q&A System with History-Aware Query Reformulation",
    period: "July 2026",
    description:
      "A production-ready Retrieval-Augmented Generation application that grounds LLM answers in documents, featuring conversation history reformulation to eliminate context loss across sequential queries.",
    tech: ["Python", "LLMs", "Retrieval-Augmented Generation", "LangChain", "Vector Search", "Docker"],
    github: "https://github.com/nitimishra/RAG-Application",
    status: "100% Deployed · Dockerized",
    metrics: [
      { label: "Architecture", value: "Modular Ingestion & Retrieval" },
      { label: "Query Context", value: "History-Aware Reformulation" },
      { label: "Packaging", value: "Docker Containerized" },
    ],
    problem:
      "Standard document Q&A chatbots hallucinate when answers are missing from source text, and break down during multi-turn conversations when follow-up questions lack explicit standalone context.",
    approach: [
      "Built a modular pipeline separating document ingestion, vector retrieval, and answer-generation stages.",
      "Implemented a history-aware retrieval component that reformulates follow-up queries using prior dialogue context.",
      "Used dense vector embeddings and similarity search to retrieve strictly relevant chunks, reducing hallucinations.",
      "Containerized the entire application with Docker for consistent and portable execution across environments.",
    ],
    features: [
      "Modular ingestion, chunking, and vector embedding pipeline",
      "History-aware retrieval reformulating multi-turn follow-up queries",
      "Strict document grounding reducing LLM hallucination",
      "Dockerized container setup for immediate reproducibility",
    ],
    result:
      "Delivered a dependable conversational search engine that maintains dialogue state and accurately answers complex document queries.",
  },
  {
    id: "poetic-text-generation",
    badge: "APPLIED NLP & DEEP LEARNING",
    category: "Natural Language Processing",
    title: "Poetic-Text-Generation",
    subtitle: "Character-Level LSTM Neural Network for Stylistic Text Synthesis",
    period: "June 2026",
    description:
      "A character-level recurrent neural network using stacked LSTM layers trained on Shakespeare's corpus to generate stylistically coherent and rhythmically consistent poetic text.",
    tech: ["Python", "TensorFlow", "Keras", "LSTM", "NLP", "Sequence Windowing"],
    github: "https://github.com/nitimishra/Poetic-Text-Generation",
    status: "Model Trained · Shakespeare Corpus",
    metrics: [
      { label: "Architecture", value: "Multi-Layer LSTM" },
      { label: "Sampling Method", value: "Temperature-Based" },
      { label: "Dataset", value: "Shakespeare Corpus" },
    ],
    problem:
      "Text generation models often struggle to capture poetic meter, vocabulary cadence, and long-range syntactic dependencies without large parameter footprints.",
    approach: [
      "Engineered a custom text preprocessing pipeline with character-to-index mapping and sequence windowing.",
      "Built and trained a multi-layer Long Short-Term Memory (LSTM) network in TensorFlow/Keras to model character transitions.",
      "Implemented temperature-based sampling to control creativity and stylistic coherence during text generation.",
    ],
    features: [
      "Custom character-level tokenization and sliding window dataset builder",
      "Multi-layer LSTM architecture tuned for sequence memory retention",
      "Adjustable temperature sampling for diverse stylistic text output",
    ],
    result:
      "Generated syntactically structured, poetic passages mirroring the stylistic tone and vocabulary of the training corpus.",
  },
  {
    id: "telegram-bot",
    badge: "SECURITY & AUTOMATION",
    category: "Security & Tools",
    title: "Secure Password Generator Telegram Bot",
    subtitle: "Cryptographically Secure Chat-Native Password Generation Tool",
    period: "Oct 2024 – Dec 2024",
    description:
      "An interactive Telegram bot delivering cryptographically secure passwords resistant to brute-force attacks, built with Python's secrets module and python-telegram-bot.",
    tech: ["Python", "python-telegram-bot", "Cryptographic Randomness", "secrets module", "Telegram API"],
    github: "https://github.com/nitimishra/Telegram-bot",
    status: "Active Bot · Chat-Native",
    metrics: [
      { label: "Entropy Source", value: "Python secrets" },
      { label: "Batch Size", value: "5 Passwords / Request" },
      { label: "Interface", value: "Telegram Chat Bot" },
    ],
    problem:
      "Users frequently resort to weak, predictable passwords or untrusted web generators prone to telemetry and clipboard logging.",
    approach: [
      "Integrated Python's cryptographically strong `secrets` module to ensure high entropy and resist brute-force attacks.",
      "Developed command handlers allowing custom password length and immediate batch generation of 5 secure passwords.",
      "Designed a responsive, privacy-focused Telegram chat interface with clean error handling.",
    ],
    features: [
      "Cryptographically secure randomness resistant to rainbow table and brute-force attacks",
      "User-defined password length configuration",
      "Privacy-first, chat-native execution without external database storage",
    ],
    result:
      "A fast, lightweight, and secure Telegram utility enabling instant cryptographic password generation directly inside chats.",
  },
];

export const skillCategories = [
  {
    title: "Multi-Agent & Agentic AI",
    tag: "Autonomous Systems",
    skills: [
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
    title: "Gen AI & LLMs",
    tag: "Modern AI",
    skills: [
      "Large Language Models (LLMs)",
      "Transformers",
      "LangChain",
      "LangSmith",
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings",
      "Vector Search",
      "Prompt Engineering",
    ],
  },
  {
    title: "AI / Machine Learning",
    tag: "Core Modeling",
    skills: [
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
    title: "Libraries & Frameworks",
    tag: "Tooling",
    skills: [
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
    title: "MLOps & Cloud Deployment",
    tag: "Production",
    skills: [
      "MLflow",
      "FastAPI",
      "Streamlit",
      "Docker",
      "Model Deployment",
      "Experiment Tracking",
      "AWS",
      "IBM Cloud",
      "Kubernetes (Basics)",
      "Git & GitHub",
    ],
  },
];

export const languages = ["Python", "SQL", "C"];

export const workflowRoadmap = [
  {
    step: "01",
    title: "Problem Formulation & Analysis",
    desc: "Define objectives, establish evaluation criteria, and analyze data constraints for AI/ML tasks.",
  },
  {
    step: "02",
    title: "Data Pipeline & Preprocessing",
    desc: "Perform data annotation, character/sequence tokenization, document chunking, and feature normalization.",
  },
  {
    step: "03",
    title: "Architecture & Model Training",
    desc: "Build custom neural networks (U-Net, LSTM) and configure RAG retrieval chains with vector embeddings.",
  },
  {
    step: "04",
    title: "Validation & Performance Evaluation",
    desc: "Evaluate segmentation masks, analyze temperature sampling, and verify retrieval grounding without hallucinations.",
  },
  {
    step: "05",
    title: "Packaging & Container Deployment",
    desc: "Containerize applications with Docker, expose clean APIs via FastAPI, and build interactive Streamlit UIs.",
  },
];

export const experience = [
  {
    org: "IIT Indore",
    role: "AI Research Intern",
    period: "July 2026 – August 2026 (2 Months)",
    location: "Delhi, India",
    tag: "AI Research & Vision",
    points: [
      "Image Segmentation: Worked on image segmentation tasks to identify and classify specific regions or objects within images, gaining practical experience with computer vision and deep learning techniques.",
      "Model Training: Learned and applied the end-to-end process of training deep learning models, including data preparation, model configuration, training, validation, and performance evaluation.",
      "Data Annotation: Performed image data annotation and labeling to create high-quality datasets for supervised machine learning and computer vision model development.",
    ],
  },
  {
    org: "IBM",
    role: "Cloud Computing Virtual Intern",
    period: "June 2026 – August 2026",
    location: "Delhi, India (Remote)",
    tag: "Cloud & DevOps",
    points: [
      "Completed a Virtual Internship in Cloud Computing through FSP (IBMCEP), gaining practical exposure to AWS and IBM Cloud.",
      "Worked with Docker and Kubernetes for containerization and application orchestration, along with cloud-based deployment.",
      "Gained hands-on understanding of CI/CD pipelines and DevOps workflows for automated application build, testing, and deployment.",
    ],
  },
];

export const education = [
  {
    school: "APJ Abdul Kalam Technical University (AKTU)",
    program: "Bachelor's Degree in Computer Systems Engineering",
    period: "In Progress (Final Year)",
    note: "AI/ML focus with coursework in Deep Learning, Data Structures, and Systems Engineering.",
  },
  {
    school: "Kendriya Vidyalaya",
    program: "Intermediate (Class XII)",
    period: "2020 – 2022",
    note: "Science stream (Mathematics, Physics, Chemistry, Computer Science).",
  },
];

export const certifications = [
  {
    name: "AI-Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "August 2026",
    badge: "GenAI Foundations",
    location: "Delhi, India",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    date: "August 2026",
    badge: "Prompt & LLM Engineering",
    location: "Delhi, India",
  },
  {
    name: "Bootcamp on Unmanned Aerial Systems",
    issuer: "IIT Dhanbad",
    date: "1 Month",
    badge: "UAS & Aerial Vision",
    location: "Delhi, India",
  },
  {
    name: "Shortlisted Team (College Level)",
    issuer: "Smart India Hackathon",
    date: "2026",
    badge: "National Hackathon",
    location: "Delhi, India",
  },
];
