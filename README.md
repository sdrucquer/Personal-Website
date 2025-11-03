# Futuristic Personal Website

Modern, animated resume experience for Alex Rivera – an entrepreneur and mechanical engineer blending sustainability with tech.

## Tech Stack
- [Next.js 14](https://nextjs.org/) with App Router
- React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion 11 for scroll-based animations

## Getting Started
```bash
pnpm install # or npm install / yarn install
pnpm dev     # start dev server at http://localhost:3000
```

## Project Structure
```
app/
  layout.tsx          # Global metadata + font loading
  page.tsx            # Home (all storytelling sections)
  projects/page.tsx   # Expanded project library
  contact/page.tsx    # Contact form and CTA
components/
  Hero.tsx            # Animated hero with parallax background
  JourneyTimeline.tsx # About/journey timeline
  ProjectsShowcase.tsx# Interactive project cards (reused on /projects)
  SkillsDashboard.tsx # Skill dashboard with hover micro-interactions
  ImpactGrowth.tsx    # Impact visualizations (graphs + team nodes)
  InfluenceSection.tsx# Social metrics counters
  VisionContact.tsx   # Outro CTA buttons
  ContactForm.tsx     # Simple client-side contact form
```

## Animation Tips
- **Scroll reveals:** Sections use `staggerContainer` + `fadeInUp` variants with `delayChildren: 0.2`. Maintain 0.7s duration for a smooth tech feel.
- **Hero parallax:** `useScroll` shifts circuit background by up to `-120px`; adjust range to tune parallax intensity on large screens.
- **Hover states:** Project cards and CTA buttons rely on Tailwind gradients and subtle scale/pulse animations. Keep scale under `1.08` to avoid motion sickness.
- **Responsive timing:** On mobile (`<768px`), consider reducing `staggerChildren` to `0.08` for snappier feedback.

## Deployment Notes
- Ready for Vercel out of the box. Ensure environment uses Node 18+.
- Replace `/AlexRivera_Resume.pdf` with an actual resume in `public/` before deploying.
- Update social metadata in `app/layout.tsx` for production URLs.

## Assets
- `public/images/og-preview.svg` – Open Graph preview placeholder.
- Add imagery or Lottie animations for projects under `public/images/` as needed.
