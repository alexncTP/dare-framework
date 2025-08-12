import { FrameworkLevel } from "@/lib/types";

export const frameworkLevels: FrameworkLevel[] = [
  {
    id: 0,
    name: "Level 0 – Fully Manual",
    shortName: "Fully Manual",
    tagline: "No AI. Just brain, hands, and hustle.",
    description: "Purely old-school design. The designer owns research, creation, and delivery using traditional tools—no AI involved.",
    appropriateUses: [
      "Brand-sensitive projects",
      "Strict brand guidelines",
      "Final production assets"
    ],
    pros: [
      "Maximum creative control",
      "Pixel-perfect refinement",
      "Clear authorship"
    ],
    cons: [
      "Slow pace",
      "Limited scalability",
      "High manual workload"
    ],
    risks: "Inefficient for repetitive work; potentially longer timelines; higher hourly cost."
  },
  {
    id: 1,
    name: "Level 1 – Assistive AI",
    shortName: "Assistive AI",
    tagline: "AI supports you—but doesn’t design.",
    description: "Light AI usage for operational tasks: summarizing research, organizing data, editing text, and surfacing insights.",
    tools: ["ChatGPT", "FigJam AI", "Notion AI", "MonkeyLearn"],
    pros: [
      "Speeds up without changing the visual result",
      "Keeps creative direction intact",
      "Low risk of off-brand output"
    ],
    cons: [
      "No direct acceleration of design work",
      "Limited value for purely visual workflows"
    ],
    risks: "Over-relying on unverified AI insights; hidden data bias influencing design decisions."
  },
  {
    id: 2,
    name: "Level 2 – AI as Visual Accelerator",
    shortName: "Visual Accelerator",
    tagline: "You lead the concept—AI fills in the gaps.",
    description: "AI generates design elements (images, copy, icons, patterns) that you integrate into your composition.",
    tools: ["Midjourney", "DALL·E", "Runway", "Magician for Figma"],
    pros: [
      "Saves time on repetitive or exploratory tasks",
      "Broadens creative possibilities",
      "Reduces dependency on stock assets"
    ],
    cons: [
      "Risk of inconsistent styles",
      "May feel generic without strong art direction",
      "Relies on well-crafted prompts"
    ],
    risks: "Potential copyright concerns; uneven visual consistency; derivative aesthetics."
  },
  {
    id: 3,
    name: "Level 3 – AI as Copilot",
    shortName: "Copilot",
    tagline: "You drive—AI suggests the route.",
    description: "AI proposes layouts, flows, content, and transitions. You refine, remix, and adjust to fit the vision.",
    tools: ["Figma AI", "Galileo AI", "Uizard", "Firefly"],
    pros: [
      "Rapid prototyping",
      "Instant variation generation",
      "Significant creative speed boost"
    ],
    cons: [
      "Requires sharp editorial judgment",
      "Risk of creative complacency",
      "Can feel formulaic without strong oversight"
    ],
    risks: "Erosion of core design skills; visual sameness; dilution of brand uniqueness."
  },
  {
    id: 4,
    name: "Level 4 – Modular Co-creation",
    shortName: "Modular Co-creation",
    tagline: "AI assembles—you direct the show.",
    description: "AI generates full screens, animations, or partial brand identities from prompts. Your role shifts toward art direction.",
    tools: ["Runway Gen-2", "Visily", "Design-to-code tools"],
    pros: [
      "Blazing-fast output",
      "Perfect for sprints, MVPs, and rapid testing",
      "Empowers non-designers to produce starting points"
    ],
    cons: [
      "Lacks fine polish",
      "Needs heavy refinement for production",
      "May drift from business objectives"
    ],
    risks: "Undetected usability issues; incoherent visual systems; limited by your ability to prompt effectively."
  },
  {
    id: 5,
    name: "Level 5 – Prompt-Guided Automation",
    shortName: "Prompt-Guided Automation",
    tagline: "You describe—it delivers.",
    description: "Almost the entire design is generated via natural language: layout, copy, visuals, and even functional prototypes—ready to review.",
    tools: ["V0.dev", "GPT-Engineer", "Custom AI models"],
    pros: [
      "Full prototypes or pages in minutes",
      "Ultra-fast for concept validation",
      "Makes design more accessible to everyone"
    ],
    cons: [
      "Low creative control",
      "Often generic outputs",
      "Critical QA is non-negotiable"
    ],
    risks: "Misalignment with business needs; accessibility gaps; homogeneous experiences; undervaluing professional design expertise."
  }
];
