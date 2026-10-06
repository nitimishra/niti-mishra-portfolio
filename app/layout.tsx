import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nitimishra.dev"),
  title: "Niti Mishra | AI & Machine Learning Engineer",
  description:
    "AI/ML-focused final year CS undergrad skilled in Python, PyTorch, LLMs, LangChain, and RAG. Experienced in building production-ready AI applications to solve real-world problems.",
  keywords: [
    "Niti Mishra",
    "AI Engineer",
    "Machine Learning Engineer",
    "IIT Indore",
    "IBM Cloud",
    "Computer Vision",
    "U-Net",
    "Generative AI",
    "RAG",
    "LangChain",
    "Docker",
  ],
  openGraph: {
    title: "Niti Mishra | AI & Machine Learning Engineer",
    description:
      "AI/ML-focused final year CS undergrad skilled in Python, PyTorch, LLMs, LangChain, and RAG. Experienced in building production-ready AI applications.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niti Mishra | AI & Machine Learning Engineer",
    description:
      "AI/ML-focused final year CS undergrad skilled in Python, PyTorch, LLMs, LangChain, and RAG. Experienced in building production-ready AI applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background-primary text-text-muted antialiased selection:bg-accent-blue selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
