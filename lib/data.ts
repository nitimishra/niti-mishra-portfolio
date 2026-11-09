export const profile = {
  name: "Niti Mishra",
  shortName: "Niti",
  role: "AI Engineer",
  titleSuffix: "AI Engineer",
  tagline: "Computer Vision · Generative AI & RAG · Deep Learning · Cloud Microservices",
  statement:
    "AI Engineer with hands-on experience in Computer Vision, Retrieval-Augmented Generation (RAG), and Cloud Infrastructure. Proven track record engineering custom deep learning architectures at IIT Indore and deploying containerized cloud workflows at IBM. Dedicated to building reliable, high-performance, production-ready AI applications.",
  email: "nitimishra2004@gmail.com",
  phone: "+91 8858478713",
  github: "https://github.com/nitimishra",
  linkedin: "https://www.linkedin.com/in/niti-mishra21",
  resumeHref: "/resume.pdf",
  location: "Delhi, India",
  availability: "Available for AI Engineer Roles",
  status: "Open to Work",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const keyStats = [
  {
    value: "04",
    label: "Core AI Projects",
    detail: "Computer Vision, RAG, NLP & Cryptography",
  },
  {
    value: "02",
    label: "Research & Industry Internships",
    detail: "AI Research at IIT Indore & Cloud at IBM",
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

export const aboutHighlights = [
  {
    title: "Computer Vision & Deep Learning",
    description:
      "Trained and evaluated custom convolutional neural networks (U-Net) with skip connections for multi-class semantic segmentation and high-resolution spatial feature retention.",
    tag: "Vision Systems",
    icon: "Scan",
  },
  {
    title: "Generative AI & RAG Pipelines",
    description:
      "Architected modular contextual Q&A engines with history-aware query reformulation in LangChain, dense vector similarity search, and strict document grounding.",
    tag: "LLMs & Retrieval",
    icon: "Brain",
  },
  {
    title: "Multi-Agent & Agentic Workflows",
    description:
      "Experienced with autonomous agent frameworks (CrewAI, AutoGen, OpenAI Agent SDK), Model Context Protocol (MCP), and safety guardrails for reliable tool execution.",
    tag: "Agentic AI",
    icon: "Bot",
  },
  {
    title: "MLOps & Cloud Containerization",
    description:
      "Containerized models using Docker, implemented FastAPI REST endpoints, and orchestrated deployments with CI/CD across AWS and IBM Cloud environments.",
    tag: "Production & DevOps",
    icon: "Cloud",
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
  solution: string;
  highlights: string[];
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
    tech: ["Python", "TensorFlow", "Keras", "U-Net", "NumPy", "Scikit-learn", "OpenCV", "PIL"],
    github: "https://github.com/nitimishra/aerial-unet",
    status: "Model Validated · 6 Classes",
    metrics: [
      { label: "Semantic Classes", value: "6 Land-Cover Classes" },
      { label: "Patch Resolution", value: "512 × 512 Pixels" },
      { label: "Architecture", value: "Skip-Connection U-Net" },
      { label: "Framework", value: "TensorFlow / Keras" },
    ],
    problem:
      "Aerial imagery contains intricate, overlapping terrain structures (roads, vegetation, water bodies, and buildings). Traditional bounding-box classification fails to isolate fine spatial borders required for urban planning and environmental monitoring.",
    solution:
      "Engineered an end-to-end semantic segmentation pipeline featuring multi-class mask encoding, patch-based preprocessing, and a custom U-Net encoder-decoder network retaining high-frequency spatial details.",
    highlights: [
      "Architected custom U-Net with contracting and expanding paths linked by skip connections to preserve edge fidelity.",
      "Preprocessed high-resolution aerial tiles into 512×512 patches and mapped RGB labels to 6 semantic classes.",
      "Evaluated model predictions with pixel-accuracy loss curves and visual segmentation overlays.",
    ],
  },
  {
    id: "rag-application",
    badge: "GENERATIVE AI & RAG",
    category: "Generative AI",
    title: "RAG Pipeline — Document Q&A Application",
    subtitle: "Contextual Document Intelligence with History-Aware Query Reformulation",
    period: "July 2026",
    description:
      "A production-ready Retrieval-Augmented Generation application that grounds LLM answers in documents, featuring conversation history reformulation to eliminate context loss across sequential queries.",
    tech: ["Python", "LangChain", "LLMs", "Vector Search", "Embeddings", "Docker", "FastAPI"],
    github: "https://github.com/nitimishra/RAG-Application",
    status: "100% Deployed · Dockerized",
    metrics: [
      { label: "Architecture", value: "Modular Ingestion & Retrieval" },
      { label: "Query Context", value: "History-Aware Reformulation" },
      { label: "Reliability", value: "Strict Document Grounding" },
      { label: "Deployment", value: "Docker Containerized" },
    ],
    problem:
      "Standard document chatbots hallucinate when answers are missing from source text, and degrade rapidly in multi-turn dialogues when follow-up queries lack standalone context.",
    solution:
      "Designed a modular RAG pipeline separating chunking, embedding, vector retrieval, and LLM generation, incorporating a conversational query rewriter that converts vague follow-ups into explicit search queries.",
    highlights: [
      "Implemented conversational memory and contextual query reformulation to prevent multi-turn context drift.",
      "Built dense vector index search ensuring high recall of semantically relevant passages.",
      "Packaged the entire application into a Docker container for reproducible, environment-agnostic deployment.",
    ],
  },
  {
    id: "poetic-text-generation",
    badge: "APPLIED NLP & DEEP LEARNING",
    category: "Natural Language Processing",
    title: "Poetic-Text-Generation",
    subtitle: "Character-Level LSTM Recurrent Neural Network for Stylistic Sequence Synthesis",
    period: "June 2026",
    description:
      "A character-level recurrent neural network using stacked LSTM layers trained on Shakespeare's corpus to generate stylistically coherent and rhythmically consistent poetic text.",
    tech: ["Python", "TensorFlow", "Keras", "LSTM", "NLP", "Sequence Windowing", "NumPy"],
    github: "https://github.com/nitimishra/Poetic-Text-Generation",
    status: "Model Trained · Shakespeare Corpus",
    metrics: [
      { label: "Architecture", value: "Multi-Layer Stacked LSTM" },
      { label: "Inference Control", value: "Temperature-Based Sampling" },
      { label: "Training Corpus", value: "Classic Shakespeare Works" },
      { label: "Input Tokenization", value: "Character-Level Sliding Window" },
    ],
    problem:
      "Generating text that respects archaic grammatical cadence, meter, and vocabulary without billions of parameters requires specialized sequence modeling.",
    solution:
      "Engineered character-level tokenization and sliding window datasets fed into a multi-layer Long Short-Term Memory network, combined with adjustable temperature sampling to balance creativity and structural syntax.",
    highlights: [
      "Custom text preprocessing pipeline with bi-directional character-to-index mapping and sequence slicing.",
      "Multi-layer LSTM architecture designed to retain long-range temporal character dependencies.",
      "Implemented stochastic temperature sampling permitting exploration of both conservative and creative output texts.",
    ],
  },
  {
    id: "telegram-bot",
    badge: "SECURITY & AUTOMATION",
    category: "Security & Tools",
    title: "Secure Password Generator Telegram Bot",
    subtitle: "Cryptographically Secure Chat-Native Password Generation Utility",
    period: "Oct 2024 – Dec 2024",
    description:
      "An interactive Telegram bot delivering cryptographically secure passwords resistant to brute-force attacks, built with Python's secrets module and python-telegram-bot.",
    tech: ["Python", "python-telegram-bot", "Cryptographic Secrets", "Telegram API", "AsyncIO"],
    github: "https://github.com/nitimishra/Telegram-bot",
    status: "Active Bot · Chat-Native",
    metrics: [
      { label: "Entropy Source", value: "CSPRNG secrets Module" },
      { label: "Batch Delivery", value: "5 Passwords / Request" },
      { label: "Privacy Model", value: "Zero Data Retention" },
      { label: "Interface", value: "Chat-Native Telegram Bot" },
    ],
    problem:
      "Users often use predictable passwords or rely on questionable web generators that log inputs, store generated credentials, or run trackers.",
    solution:
      "Created a private, chat-native Telegram utility utilizing Python's cryptographically secure pseudo-random number generator (secrets) with immediate batch generation and zero persistent storage.",
    highlights: [
      "Leveraged OS-level cryptographic entropy resisting rainbow table and brute-force attacks.",
      "Interactive commands for length customization and batch generation of 5 passwords per command.",
      "Strict privacy-first architecture with zero external logging or database persistence.",
    ],
  },
];

export const skillCategories = [
  {
    title: "Multi-Agent & Agentic AI",
    badge: "Autonomous Systems",
    icon: "Bot",
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
    title: "Generative AI & LLMs",
    badge: "Modern AI",
    icon: "Sparkles",
    skills: [
      "Large Language Models (LLMs)",
      "Transformers",
      "LangChain",
      "LangSmith",
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings & Vector Search",
      "Prompt Engineering",
    ],
  },
  {
    title: "AI & Deep Learning Foundations",
    badge: "Core Modeling",
    icon: "Cpu",
    skills: [
      "Neural Networks",
      "Computer Vision",
      "Image Segmentation (U-Net)",
      "Natural Language Processing (NLP)",
      "Feature Engineering",
      "Model Evaluation & Loss Optimization",
    ],
  },
  {
    title: "Frameworks & Libraries",
    badge: "Tooling",
    icon: "Boxes",
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
    badge: "Production",
    icon: "Cloud",
    skills: [
      "Docker",
      "FastAPI",
      "Streamlit",
      "MLflow",
      "AWS",
      "IBM Cloud",
      "Kubernetes (Basics)",
      "CI/CD Pipelines",
      "Git & GitHub",
    ],
  },
  {
    title: "Programming Languages & Core",
    badge: "Fundamentals",
    icon: "Code2",
    skills: [
      "Python",
      "SQL",
      "C",
      "REST APIs",
      "Linux / Bash",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
    ],
  },
];

export const experience = [
  {
    org: "IIT Indore",
    role: "AI Research Intern",
    period: "July 2026 – August 2026 (2 Months)",
    location: "Indore / Delhi, India",
    tag: "AI Research & Computer Vision",
    type: "Research Internship",
    description:
      "Conducted research in image segmentation and computer vision under academic mentorship at the Indian Institute of Technology Indore.",
    points: [
      "Engineered pixel-level semantic segmentation pipelines to identify and classify complex aerial land-cover structures.",
      "Trained custom deep convolutional networks (U-Net) with skip connections, managing data preparation, configuration, hyperparameter tuning, and validation curves.",
      "Performed high-fidelity dataset annotation and mask labeling, building clean ground truth datasets for supervised vision modeling.",
    ],
    tech: ["Python", "TensorFlow", "Keras", "U-Net", "Computer Vision", "Data Annotation", "Deep Learning"],
  },
  {
    org: "IBM",
    role: "Cloud Computing Virtual Intern",
    period: "June 2026 – August 2026",
    location: "Remote / Delhi, India",
    tag: "Cloud & DevOps",
    type: "Industry Internship",
    description:
      "Completed a specialized Virtual Internship in Cloud Computing through the IBM Career Education Program (IBMCEP/FSP).",
    points: [
      "Acquired hands-on expertise with AWS and IBM Cloud infrastructure for hosting scalable microservices and workloads.",
      "Used Docker for containerizing applications and Kubernetes for container orchestration and automated scaling.",
      "Engineered CI/CD pipeline workflows for continuous integration, testing, and cloud deployment automation.",
    ],
    tech: ["AWS", "IBM Cloud", "Docker", "Kubernetes", "CI/CD", "DevOps", "Linux"],
  },
];

export const education = [
  {
    school: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    program: "Bachelor of Technology in Computer Systems Engineering",
    period: "2023 – Present (Final Year)",
    location: "Uttar Pradesh, India",
    institution: "Shambhunath Institute of Engineering and Technology",
    note: "Specializing in Artificial Intelligence and Machine Learning with coursework in Deep Learning, Algorithms, Systems Architecture, and Software Engineering.",
  },
  {
    school: "Kendriya Vidyalaya",
    program: "Intermediate (Class XII)",
    period: "2020 – 2022",
    location: "India",
    institution: "Kendriya Vidyalaya Sangathan",
    note: "Science Stream: Mathematics, Physics, Chemistry, and Computer Science.",
  },
];

export const certifications = [
  {
    name: "AI-Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "August 2026",
    badge: "GenAI Foundations",
    description:
      "Comprehensive certification verifying proficiency in modern Generative AI principles, prompt architecture, and LLM reasoning workflows.",
    icon: "Award",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    date: "August 2026",
    badge: "Prompt Engineering & LLMs",
    description:
      "Advanced prompt design, context optimization, structured output generation, and tool integration with Anthropic Claude models.",
    icon: "Sparkles",
  },
  {
    name: "Bootcamp on Unmanned Aerial Systems (UAS)",
    issuer: "IIT Dhanbad",
    date: "1 Month Intensive",
    badge: "Aerial Vision & UAS",
    description:
      "Practical training on unmanned aerial systems, remote sensing payloads, and spatial computer vision algorithms.",
    icon: "Compass",
  },
  {
    name: "Smart India Hackathon (SIH)",
    issuer: "Ministry of Education / SIH",
    date: "2026",
    badge: "Shortlisted Team (College Level)",
    description:
      "Selected at the college level to tackle real-world national technical challenges, building rapid prototypes under competitive hackathon conditions.",
    icon: "Trophy",
  },
];
