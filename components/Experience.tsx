"use client";

import { experience, education } from "@/lib/data";

export default function Experience() {
  const iitChips = ["Python", "TensorFlow", "Keras", "U-Net", "Computer Vision", "Deep Learning", "Image Segmentation"];
  const ibmChips = ["AWS", "IBM Cloud", "Docker", "Kubernetes", "CI/CD", "DevOps"];

  return (
    <section id="experience" className="scroll-mt-20 py-24 md:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-blueLight mb-2 font-semibold">
            02 / Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
            Experience
          </h2>
        </div>

        <div className="mt-14 space-y-12">
          {/* IIT Indore */}
          <article className="grid gap-x-8 gap-y-4 py-8 border-t border-white/[0.08] md:grid-cols-[200px_1fr]">
            <div className="font-mono text-xs uppercase tracking-wide text-zinc-500">
              July 2026 &mdash; Aug 2026
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">
                AI Research Intern <span className="text-zinc-400">&mdash; IIT Indore</span>
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li className="flex gap-3 leading-relaxed text-zinc-300 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blueLight" />
                  <span><strong>Image Segmentation:</strong> Worked on image segmentation tasks to identify and classify specific regions or objects within images, gaining practical experience with computer vision and deep learning techniques.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-zinc-300 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blueLight" />
                  <span><strong>Model Training:</strong> Learned and applied the end-to-end process of training deep learning models, including data preparation, model configuration, training, validation, and performance evaluation.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-zinc-300 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blueLight" />
                  <span><strong>Data Annotation:</strong> Performed image data annotation and labeling to create high-quality datasets for supervised machine learning and computer vision model development.</span>
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {iitChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* IBM Cloud */}
          <article className="grid gap-x-8 gap-y-4 py-8 border-t border-white/[0.08] md:grid-cols-[200px_1fr]">
            <div className="font-mono text-xs uppercase tracking-wide text-zinc-500">
              June 2026 &mdash; Aug 2026
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">
                Cloud Computing Virtual Intern <span className="text-zinc-400">&mdash; IBM</span>
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li className="flex gap-3 leading-relaxed text-zinc-300 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blueLight" />
                  <span>Completed a Virtual Internship in Cloud Computing through FSP (IBMCEP), gaining practical exposure to AWS and IBM Cloud.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-zinc-300 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blueLight" />
                  <span>Worked with Docker and Kubernetes for containerization and application orchestration, along with cloud-based deployment.</span>
                </li>
                <li className="flex gap-3 leading-relaxed text-zinc-300 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blueLight" />
                  <span>Gained hands-on understanding of CI/CD pipelines and DevOps workflows for automated application build, testing, and deployment.</span>
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {ibmChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Education */}
          <article className="grid gap-x-8 gap-y-2 py-8 border-t border-white/[0.08] md:grid-cols-[200px_1fr]">
            <div className="font-mono text-xs uppercase tracking-wide text-zinc-500">
              2023 &mdash; Present
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">
                B.Tech in Computer Systems Engineering <span className="text-zinc-400">&mdash; AKTU</span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Shambhunath Institute of Engineering and Technology &bull; AI/ML Focus
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
