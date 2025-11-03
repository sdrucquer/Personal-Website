export type Project = {
  title: string;
  subtitle: string;
  metrics: string;
  description: string;
  tags: string[];
  cta?: string;
};

export const projects: Project[] = [
  {
    title: "Iconic Cleanup",
    subtitle: "Eco-friendly landscaping and cleanup startup",
    metrics: "$15K → $150K revenue, 25+ teammates",
    description:
      "Built a sustainable operations flywheel with AI-assisted scheduling, reducing waste and maximizing crew coverage across three counties.",
    tags: ["Sustainability", "Operations", "Growth"],
    cta: "https://iconic.land"
  },
  {
    title: "Battle Bot",
    subtitle: "ASME design league champion robot",
    metrics: "Designed drivetrain + modular armor",
    description:
      "Led CAD and manufacturing sprints for a 120lb combat robot, introducing rapid-swap armor plates that cut repair time by 40%.",
    tags: ["Mechanical Design", "Leadership", "Fabrication"],
    cta: "https://www.asme.org"
  },
  {
    title: "AI Automations",
    subtitle: "Workflow co-pilots for business ops",
    metrics: "5+ hours saved weekly",
    description:
      "Prototyped AI agents that reconcile CRM notes, trigger customer follow-ups, and track crew KPIs with a Notion + Make stack.",
    tags: ["AI", "Automation", "Product"],
    cta: "https://www.linkedin.com/in/iconiccleanup"
  }
];
