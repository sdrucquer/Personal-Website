import type { Metadata } from "next";
import "./globals.css";
import { Sora, Inter } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Entrepreneurial Engineer | Futuristic Resume",
  description:
    "Animated resume and portfolio for an entrepreneur and mechanical engineer blending sustainability with futuristic tech.",
  openGraph: {
    title: "Entrepreneurial Engineer | Futuristic Resume",
    description:
      "Scroll-based storytelling website highlighting projects, impact, and vision of an entrepreneur & mechanical engineer.",
    url: "https://iconic-land.vercel.app",
    siteName: "Iconic Personal Website",
    images: [
      {
        url: "/images/og-preview.svg",
        width: 1200,
        height: 630,
        alt: "Futuristic green and navy gradient with engineering motifs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@iconic_cleanup"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-navy text-softGray antialiased">
        {children}
      </body>
    </html>
  );
}
