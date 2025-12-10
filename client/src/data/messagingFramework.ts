// GTM 2026 Messaging Framework extracted from Our Message page
export const gtm2026Messaging = {
  tagline: "Make Your Data Work for You",
  narrative: {
    setup: "The AI Era Demands Readiness",
    problem: "Intelligence Requires a New Way to Work With Information",
    solution: "GoodData Intelligence Layer"
  },
  coreMessage: "This is an amplification of who we already are — and what we uniquely built. The AI Era didn't change our mission. It validated it.",
  
  marketProblems: [
    {
      title: "Dashboards Are Hitting Their Limits",
      description: "They are static, backward-looking, and require people to do the interpretation. They slow decisions rather than accelerate them."
    },
    {
      title: "Data Pipelines Are Fragile",
      description: "Classic BI stacks bury logic in dashboards. Pipelines break daily. Metrics drift. Definitions live everywhere and nowhere. AI cannot reason over any of it."
    },
    {
      title: "Architectural Costs Are Exploding",
      description: "Companies are spending millions to 'modernize' warehouses and lakes — only to end up with faster dashboards instead of true intelligence."
    },
    {
      title: "Everyone Wants AI, But Almost No One Is AI-Ready",
      description: "The problem is not desire. The problem is foundation. The systems of the dashboard era cannot support the intelligence era."
    }
  ],
  
  whatWeBuilt: [
    "A governed, machine-readable semantic layer",
    "A programmable, flexible, analytics-as-code foundation",
    "An explainable, auditable, safe environment for AI",
    "A platform that embeds intelligence directly into workflows",
    "An architecture designed for scale, trust, and automation"
  ],
  
  valueStatement: "We didn't build this because dashboards needed improving. We built it because the future of data was always going to be intelligence, not visualization."
};

// Play-specific value propositions extracted from pillar pages
export const playValueProps = {
  "decision-intelligence": {
    persona: "For Business Leaders",
    title: "Decision Intelligence",
    tagline: "Turn data into enterprise intelligence",
    description: "Give your business AI-driven clarity, trusted insights, and real-time decisioning that accelerate outcomes and competitive advantage.",
    benefits: [
      "AI-powered analysis on demand",
      "Trusted, governed intelligence",
      "ROI you can measure"
    ],
    painPoints: [
      "Need faster, smarter decisions",
      "Struggling with slow, manual analysis",
      "Can't trust current insights",
      "Need to prove ROI of data investments"
    ],
    idealCustomer: {
      personas: ["CEO", "CFO", "COO"],
      industries: ["Finance", "Retail", "Healthcare"]
    }
  },
  
  "embedded-intelligence": {
    persona: "For Product Leaders",
    title: "Embedded Intelligence",
    tagline: "Move beyond dashboards",
    description: "Deliver AI agents that analyze signals, explain changes, and recommend next actions directly inside your product.",
    benefits: [
      "Agent framework",
      "Context-aware reasoning",
      "Multi-region scale"
    ],
    painPoints: [
      "Product needs intelligent features",
      "Customers want AI capabilities",
      "Static dashboards aren't enough",
      "Need to differentiate product offering"
    ],
    idealCustomer: {
      personas: ["CPO", "VP Product", "CTO"],
      industries: ["SaaS", "Fintech", "Martech"]
    }
  },
  
  "ai-modernization": {
    persona: "For Analytics & Data Teams",
    title: "AI Modernization",
    tagline: "Eliminate BI complexity and technical debt",
    description: "Rebuild a governed semantic foundation that delivers faster analytics and prepares for AI.",
    benefits: [
      "Convert brittle logic",
      "Fix modeling drift",
      "Enterprise governance"
    ],
    painPoints: [
      "BI stack is slow and brittle",
      "Technical debt is overwhelming",
      "Metrics definitions are inconsistent",
      "Can't scale current architecture"
    ],
    idealCustomer: {
      personas: ["CDO", "VP Analytics", "Data Lead"],
      industries: ["Enterprise", "F500", "Tech"]
    }
  },
  
  "ai-architecture": {
    persona: "For Platform & Data Leaders",
    title: "AI Architecture",
    tagline: "Deliver a unified, AI-native intelligence platform",
    description: "Replace fragmented stacks and accelerate time-to-value with a production-grade foundation.",
    benefits: [
      "Unified Intelligence Layer",
      "Production-Grade Platform",
      "AI-Native by Design"
    ],
    painPoints: [
      "Need scalable, AI-ready architecture",
      "Fragmented data stack",
      "Can't support AI workloads",
      "Need faster time-to-value"
    ],
    idealCustomer: {
      personas: ["CTO", "Enterprise Architect", "VP Engineering"],
      industries: ["Cloud-native", "Data-intensive", "Tech"]
    }
  }
};

// Email messaging templates that integrate GTM 2026 narrative
export const emailMessagingTemplates = {
  opening: {
    problemFocused: "The AI Era is here, but most enterprises are discovering their current systems can't support it.",
    valueFocused: "What if your data could work for you — not the other way around?",
    trendFocused: "Across {industry}, leaders are realizing dashboards alone won't carry them into the intelligence era."
  },
  
  transition: {
    marketShift: "The market is saying clearly: the old way is dying. Enterprises need intelligence — not interpretation.",
    urgency: "Companies are spending millions to 'modernize' only to end up with faster dashboards instead of true intelligence.",
    opportunity: "The systems of the dashboard era cannot support the intelligence era. That's where we come in."
  },
  
  solution: {
    intro: "GoodData Intelligence Layer accelerates how enterprises embed intelligence, modernize analytics, and operate AI-ready systems — without disruption.",
    differentiation: "We didn't build this because dashboards needed improving. We built it because the future of data was always going to be intelligence, not visualization.",
    proof: "For five years, we've been building what the market suddenly needs: a governed, machine-readable semantic layer that makes AI safe, scalable, and explainable."
  }
};
