import { Hero } from "@/components/Hero";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { SkillsDashboard } from "@/components/SkillsDashboard";
import { ImpactGrowth } from "@/components/ImpactGrowth";
import { InfluenceSection } from "@/components/InfluenceSection";
import { VisionContact } from "@/components/VisionContact";

export default function HomePage() {
  return (
    <main className="space-y-6">
      <Hero />
      <JourneyTimeline />
      <ProjectsShowcase />
      <SkillsDashboard />
      <ImpactGrowth />
      <InfluenceSection />
      <VisionContact />
    </main>
  );
}
