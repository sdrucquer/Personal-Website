import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Entrepreneurial Engineer",
  description: "Reach out to collaborate on engineering, AI automation, or sustainable venture building."
};

export default function ContactPage() {
  return (
    <main className="space-y-16 pb-24">
      <section className="section-wrapper pt-32">
        <div className="glass-panel px-6 py-12 sm:px-10">
          <h1 className="font-sora text-4xl text-white">Let&apos;s Build Together</h1>
          <p className="mt-4 max-w-2xl text-softGray/70">
            Whether it&apos;s automation roadmaps, mechanical design, or storytelling for investors, I&apos;m ready to collaborate.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-forest transition hover:text-white"
          >
            ← Back to home
          </Link>
        </div>
      </section>
      <section className="section-wrapper">
        <ContactForm />
      </section>
    </main>
  );
}
