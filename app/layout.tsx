import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nitimishra.dev"),
  title: "Niti Mishra | AI Engineer",
  description:
    "Portfolio of Niti Mishra, AI Engineer specializing in Computer Vision, RAG Pipelines, Deep Learning, and High-Performance Intelligent Systems.",
  keywords: [
    "Niti Mishra",
    "AI Engineer",
    "Computer Vision",
    "U-Net",
    "Semantic Segmentation",
    "Generative AI",
    "RAG",
    "LangChain",
    "Deep Learning",
    "Docker",
    "IIT Indore",
    "IBM Cloud",
  ],
  openGraph: {
    title: "Niti Mishra | AI Engineer",
    description:
      "AI Engineer specializing in Computer Vision, RAG Pipelines, Deep Learning, and Intelligent Systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niti Mishra | AI Engineer",
    description:
      "AI Engineer specializing in Computer Vision, RAG Pipelines, Deep Learning, and Intelligent Systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#09090D] text-zinc-300 antialiased selection:bg-[#f59e0b] selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
