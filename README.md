# Niti Mishra — Portfolio

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before deploying

1. **Photo** — add your professional photo as `public/profile.jpg` (square,
   at least 600×600px). Until then, the hero shows a placeholder with your
   initials.
2. **Resume** — add your resume PDF as `public/resume.pdf`. The "Download
   resume" and "View resume" buttons already point at `/resume.pdf`.
3. **Certificate links** — the certification cards have disabled "View
   certificate" buttons as placeholders. Add real links in
   `lib/data.ts` → `certifications` and re-enable the buttons in
   `components/Certifications.tsx` once you have them.
4. **Contact form** — the form is visual-only (no backend wired up), so it
   shows a confirmation but doesn't send an email. Wire it to a service like
   Formspree, Resend, or a small API route when you're ready.
5. **Live demo links** — none of the projects currently have a public demo
   URL. Add a `demo` field to a project in `lib/data.ts` to show a "Live
   Demo" button for it.

## Deploy on Vercel

Push this repo to GitHub, then import it at https://vercel.com/new — no
extra configuration needed.
