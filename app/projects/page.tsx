import Link from "next/link";
import { Metadata } from "next";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Projects | Entrepreneurial Engineer",
  description: "Dive deeper into Iconic Cleanup, Battle Bot, and AI automations projects driving sustainable growth."
};

export default function ProjectsPage() {
  return (
    <main className="space-y-16 pb-24">
      <section className="section-wrapper pt-32">
        <div className="glass-panel px-6 py-12 sm:px-10">
          <h1 className="font-sora text-4xl text-white">Project Library</h1>
          <p className="mt-4 max-w-2xl text-softGray/70">
            Explore the systems thinking and storytelling fueling each venture.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-forest transition hover:text-white"
          >
            ← Back to home
          </Link>
        </div>
      </section>
      <ProjectsShowcase />
    </main>
  );
}
