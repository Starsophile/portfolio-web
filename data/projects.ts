import { Project, ProjectCategory, DashboardId } from '../types';

export const projects: Project[] = [
  {
    id: 'samsung-india-strategy',
    title: 'Reframing Samsung’s Strategy',
    subtitle: 'A student-led product analysis focused on clarity, execution, and consumer perception in the Indian mid-range market.',
    category: ProjectCategory.STRATEGY,
    date: 'Jan 2026',
    tags: ['Market Strategy', 'Product Portfolio', 'India Market', 'Analysis'],
    summary: 'Samsung is trusted, but its mid-range lineup (A, M, F series) suffers from confusing positioning and spec-sheet dilution. This project proposes a constraint-aware restructuring to halt market share decline (24% to 17%) without damaging retail margins.',
    heroVisual: {
        displayText: 'SAMSUNG',
        subText: 'Portfolio Restructuring',
        gradientFrom: 'from-blue-900/20',
        gradientTo: 'to-zinc-900/20'
    },
    sections: [
      {
        title: '01. Market Context',
        type: 'grid',
        content: 'Snapshot of the decline despite high brand trust.',
        items: [
          { heading: 'The Decline', body: 'Samsung’s market share in India has dropped from ~24% to ~17% in recent quarters.' },
          { heading: 'The Competition', body: 'Vivo, Oppo, and Xiaomi are gaining ground by offering clearer value propositions.' },
          { heading: 'The Insight', body: 'Samsung is trusted as a brand, but no longer exciting or clearly positioned in the mid-range segment.' }
        ]
      },
      {
        title: '02. Consumer Reality',
        type: 'row',
        content: 'Insights from an independent survey of ~100 users regarding expectations vs. reality.',
        items: [
          { heading: 'Users ACTUALLY Care About', body: '• Smooth daily performance\n• Reliable battery life\n• Consistent camera output\n• Device lifespan (3+ years)' },
          { heading: 'Users DO NOT Care About', body: '• Obscure RAM type names\n• Storage speed marketing labels\n• Marginal spec-sheet battles' }
        ]
      },
      {
        title: '03. Portfolio Diagnosis',
        type: 'grid',
        content: 'Different series exist, but none have a clear "why".',
        items: [
          { heading: 'A Series', body: 'Covers too many price points. Confused positioning between budget and premium-mid. Offline-heavy but diluting its own premium allure.' },
          { heading: 'M Series', body: 'Originally for heavy users, now diluted. Hybrid distribution has muddled its identity. "Big Battery" is no longer a unique selling point.' },
          { heading: 'F Series', body: 'Online-first but restricted by exclusivity contracts (Flipkart). Lacks a long-term role in the ecosystem.' }
        ]
      },
      {
        title: '03A. Phase 1 — Experience Stabilization (0–6 Months)',
        type: 'grid',
        content: 'Phase 1 focuses on fixing perception, stability, and trust without changing hardware, pricing, or portfolio structure.',
        items: [
          { heading: 'Inclusive Beta Testing (A/M Series)', body: '• Expand One UI beta programs beyond flagships\n• Allow voluntary enrollment for mid-range users\n• Treat mid-range stability issues as release blockers' },
          { heading: 'Stability-First One UI Tuning', body: '• Prioritize frame consistency over animation richness\n• Reduce background task competition during UI interaction\n• Optimize for perceived smoothness, not benchmark scores' },
          { heading: 'Battery & Performance Transparency', body: '• Clear in-UI explanations for battery drain causes\n• Actionable suggestions instead of vague system warnings\n• Reduce post-update blame by improving visibility' }
        ]
      },
      {
        title: '03B. Phase 2 — Portfolio Role Clarity (6–18 Months)',
        type: 'grid',
        content: 'Phase 2 restructures roles, not products — aligning each series with a single, clear job.',
        items: [
          { heading: 'A Series — Retail Reliability Line', body: '• Ultra-budget to lower mid-range\n• First-time buyers and offline customers\n• Simple features, predictable experience, high margins' },
          { heading: 'M Series — The Core Daily Driver', body: '• Mid-range sweet spot (₹15k–₹35k)\n• Balanced performance, longevity, clean software\n• Online + offline parity' },
          { heading: 'F Series — Online Tactical Experiments', body: '• Under ₹15k experimentation\n• No retail pressure, fast refresh cycles\n• Used for demand testing and price aggression' },
          { heading: 'FE Series — Aspirational Bridge', body: '• Flagship DNA at accessible pricing\n• Camera + performance focus\n• Clear step-up from M series' }
        ]
      },
      {
        title: '05. Constraints & Reality',
        type: 'list',
        content: '- Retail margins must be protected; offline retailers are key partners.\n- Manufacturing & supply chain are global; India-specific changes take time.\n- Existing contracts with Flipkart/Amazon cannot be breached overnight.\n- No internal cannibalization allowed.'
      },
      {
        title: '06. Why This Works',
        type: 'highlight',
        content: 'Execution beats explanation. Samsung already has the trust; it just needs clarity. Simplifying the portfolio reduces decision fatigue for consumers and sales friction for retailers.'
      }
    ],
    keyLearnings: [
      'Product decisions are about trade-offs, not perfection.',
      'Clarity is more valuable than innovation noise.',
      'A PM’s job is to reduce confusion, not add features.'
    ]
  },
  {
    id: 'hardware-shortage-analysis',
    title: 'Hardware Shortage Impact Analysis',
    subtitle: 'Balancing pricing, experience, and trust during global supply constraints.',
    category: ProjectCategory.ANALYSIS,
    date: 'Dec 2025',
    tags: ['Supply Chain', 'Consumer Trust', 'Product Strategy', 'Crisis Management'],
    summary: 'Global semiconductor and component shortages (RAM, storage, chips) have forced smartphone brands into a difficult corner: raise prices or silently downgrade hardware. This analysis explores how to navigate these trade-offs without breaking consumer trust.',
    heroVisual: {
        displayText: 'CRISIS',
        subText: 'Supply vs Demand',
        gradientFrom: 'from-orange-900/20',
        gradientTo: 'to-red-900/20'
    },
    sections: [
      {
        title: '01. The Context',
        type: 'grid',
        content: 'The unseen crisis affecting every shelf.',
        items: [
          { heading: 'The Supply Shock', body: 'Rising AI infrastructure demand has squeezed the supply of high-speed RAM and storage chips globally.' },
          { heading: 'The Cost Surge', body: 'Component costs have risen 15-20% YoY, erasing thin margins in the budget segment.' },
          { heading: 'The Dilemma', body: 'Brands must choose: Show higher prices (and lose sales) or use cheaper parts (and risk reputation).' }
        ]
      },
      {
        title: '02. Engineering vs. Perception',
        type: 'row',
        content: 'Why specifications on paper do not equal experience in hand.',
        items: [
          { heading: 'The "Silent Downgrade" Trap', body: 'Swapping UFS 3.1 for 2.2 storage saves money but causes micro-stutters. Users feel this lag but can\'t identify the cause, leading to vague "brand rot" sentiment.' },
          { heading: 'The "Megapixel" Decoy', body: 'Brands often compensate for weaker processors by marketing higher megapixel counts, distracting users from the degraded core experience.' }
        ]
      },
      {
        title: '03. Strategic Takeaways',
        type: 'grid',
        content: 'How product teams should handle constraints.',
        items: [
          { heading: 'Transparency Wins', body: 'Consumers forgive higher prices for quality. They punish "hidden" downgrades with permanent churn.' },
          { heading: 'Software Over Specs', body: 'When hardware is constrained, invest in software optimization. A well-tuned Snapdragon 6 Gen 1 beats a poorly optimized 7 Gen 3.' },
          { heading: 'Protect the Core', body: 'Never compromise the "daily driver" metrics (battery, basic app load times) for flashy gimmicks.' }
        ]
      },
      {
        title: '04. The Verdict',
        type: 'highlight',
        content: 'Trust is a non-renewable resource. In times of shortage, maintain the experience floor, even if it means sacrificing the specification ceiling.'
      }
    ],
    keyLearnings: [
      'Consumers feel lag before they read specs.',
      'Silent compromises destroy long-term brand equity.',
      'Optimization is the only sustainable hedge against hardware inflation.'
    ]
  },
  {
    id: 'indian-smartphone-survey',
    title: 'Indian Smartphone Consumer Survey',
    subtitle: 'A ground-level study of ~100 users regarding trust, specs, and value.',
    category: ProjectCategory.RESEARCH,
    date: 'Aug 2025',
    tags: ['User Research', 'Data Analysis', 'Consumer Behavior', 'India Market'],
    dashboardId: DashboardId.SMARTPHONE_SURVEY,
    summary: 'To understand the disconnect between what brands market and what users actually buy, I conducted a survey of ~100 Indian smartphone users. The goal: decode the "Value for Money" equation beyond the spec sheet.',
    heroVisual: {
        displayText: 'INSIGHTS',
        subText: '100+ User Study',
        gradientFrom: 'from-emerald-900/20',
        gradientTo: 'to-teal-900/20'
    },
    sections: [
      {
        title: '01. Intent & Methodology',
        type: 'list',
        content: '- Survey conducted via Google Forms & direct interviews.\n- Demographics: Age 18-35 (Primary smartphone buyers).\n- Locations: Tier 1 & Tier 2 cities in India.\n- Focus: Perception of price, brand loyalty, and feature usage.'
      },
      {
        title: '02. Behavioral Observations',
        type: 'grid',
        content: 'Non-technical realities of the Indian buyer.',
        items: [
          { heading: 'The "Repair" Fear', body: 'Users fear expensive screen replacements more than slow processors. Durability > Speed.' },
          { heading: 'The "Resale" Math', body: 'iPhones are viewed as assets; Androids are viewed as consumables. This dictates the initial budget willingness.' },
          { heading: 'The "Box" Effect', body: 'The in-hand feel and unboxing experience significantly alters the perception of "premium" regardless of internal specs.' }
        ]
      },
      {
        title: '03. Strategic Insights',
        type: 'row',
        content: 'What this means for Product Managers.',
        items: [
          { heading: 'Stop "Spec-Warring"', body: 'Only 5% of users check benchmarks. 95% ask a friend. Word-of-mouth reliability is the ultimate metric.' },
          { heading: 'The 15k-20k Vacuum', body: 'This segment has high demand but low loyalty. A brand that offers consistent reliability here (no bloatware, good battery) can sweep the market.' }
        ]
      },
      {
        title: '04. Personal Learning',
        type: 'highlight',
        content: 'Data humanizes the user. I went in thinking people wanted faster phones; I came out realizing they just want phones that don\'t make them worry.'
      }
    ],
    keyLearnings: [
      'Specs are for marketing; Experience is for retention.',
      'Trust is built on reliability, not speed.',
      'The Indian consumer is value-conscious, not just price-conscious.'
    ]
  }
];