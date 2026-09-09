export const profile = {
  name: 'Manish Y M',
  nameJp: 'マニッシュ · Y · M',
  title: 'Full-Stack Developer & AI/ML Engineer',
  bounty: '3,000,000,000',
  wantedPoster: '/wanted-poster.jpg',
  resume: '/ManishYM-Resume.pdf',
  intro:
    'A CS engineer sailing the Grand Line of code — building AI systems, full-stack apps, and real-time data pipelines that scale.',
  summary:
    'Computer Science student at Polaris School of Technology specializing in AI/ML, full-stack development, and data systems. Experienced in scalable dashboards, real-time pipelines, and production-grade AI solutions across internships at AutoMeta.ai and IndiaWantsToKnow.',
  journalEntry:
    'Day 847 on the dev seas. Built agentic infrastructure, automated quiz pipelines, and enterprise data connectors. Still chasing the One Piece of clean, scalable code.',
  links: {
    github: 'https://github.com/Manishym956',
    linkedin: 'https://www.linkedin.com/in/manish-y-m-233496326/',
    portfolio: 'https://portfolio-lake-eta-58.vercel.app',
    leetcode: 'https://leetcode.com/u/Manishym956/',
    codechef: 'https://www.codechef.com/users/Manishym956',
    codeforces: 'https://codeforces.com/profile/Manishym956',
  },
  stats: { repos: 46, followers: 11 },
  quote: {
    lead: "If it's one-on-one, always bet on",
    name: 'Manish Y M',
  },
}

export const heroPanels = {
  left: [
    { src: '/assets/panels/01-captain.jpg', alt: 'The Captain — Who I Am' },
    { src: '/assets/panels/02-arsenal.jpg', alt: 'The Arsenal — What I Build With' },
  ],
  right: [
    { src: '/assets/panels/03-adventures.jpg', alt: "The Adventures — What I've Built" },
    { src: '/assets/panels/04-horizon.jpg', alt: 'The Continuing Quest — Pathway to Purpose' },
  ],
}

export const prologuePanels = [
  { src: '/assets/prologue/01-beginning.jpg', alt: '01 — The Beginning · Curiosity Came First' },
  { src: '/assets/prologue/02-first-code.jpg', alt: '02 — First Code · Hello, World' },
  { src: '/assets/prologue/03-the-grind.jpg', alt: '03 — The Grind · Learn. Break. Debug. Repeat.' },
  { src: '/assets/prologue/04-first-principles.jpg', alt: '04 — First Principles' },
  { src: '/assets/prologue/05-first-quest.jpg', alt: '05 — First Real Quest' },
  { src: '/assets/prologue/06-why-i-build.jpg', alt: '06 — Why I Build · Because There\'s Always Another Island' },
]

export const navLinks = [
  { id: 'prologue', label: 'The Prologue' },
  { id: 'navigators', label: 'Navigators' },
  { id: 'repositories', label: 'The Repositories' },
  { id: 'adventures', label: 'Adventures' },
  { id: 'battles', label: 'Battles' },
  { id: 'final-spread', label: 'The Final Spread' },
]

export const skillInventory = [
  { name: 'Python', level: 92 },
  { name: 'JavaScript / TypeScript', level: 88 },
  { name: 'React / Next.js', level: 85 },
  { name: 'Node.js / Express', level: 82 },
  { name: 'Machine Learning', level: 80 },
  { name: 'PostgreSQL / MongoDB', level: 78 },
  { name: 'Docker / Cloud (GCP, AWS)', level: 75 },
  { name: 'System Design', level: 72 },
]

export const specialists = [
  {
    role: 'The Navigator',
    roleJp: '航海士',
    description: 'Charts the frontend seas — React, Next.js, and pixel-perfect UI routes.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    role: 'The Swordsman',
    roleJp: '剣士',
    description: 'Cuts through backend complexity with Node, Express, and REST architecture.',
    tools: ['Node.js', 'Express', 'Prisma', 'REST APIs'],
  },
  {
    role: 'The Sniper',
    roleJp: '狙撃手',
    description: 'Precision ML strikes — models, pipelines, and data-driven predictions.',
    tools: ['Python', 'XGBoost', 'Scikit-learn', 'NLP'],
  },
  {
    role: 'The Shipwright',
    roleJp: '船大工',
    description: 'Builds the hull — Docker, cloud infra, Redis queues, and CI/CD.',
    tools: ['Docker', 'GCP', 'Redis', 'BullMQ'],
  },
]

export const flagshipProjects = [
  {
    codename: 'FLOWSYNC',
    subtitle: 'Enterprise Data Integration',
    description:
      'Distributed platform synchronizing REST APIs, FHIR healthcare systems, and messaging services through asynchronous BullMQ workers with idempotency and fault tolerance.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    url: 'https://github.com/Manishym956/FlowSync',
    homepage: null as string | null,
    chartLabel: 'Pipeline Throughput',
    chartData: [32, 48, 44, 62, 58, 74, 88, 92] as number[],
    nodes: null as string[] | null,
  },
  {
    codename: 'RETENTIONBRAIN',
    subtitle: 'Customer Churn Prediction',
    description:
      'ML pipeline for customer churn prediction with EDA, feature engineering, and optimized Logistic Regression & XGBoost models achieving strong ROC-AUC performance.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn'],
    url: 'https://github.com/Manishym956/RetentionBrain',
    homepage: 'https://retention-brain.vercel.app',
    chartLabel: 'ROC-AUC Score',
    chartData: [0.72, 0.78, 0.84, 0.87, 0.89, 0.91, 0.93, 0.94] as number[],
    nodes: null as string[] | null,
  },
  {
    codename: 'CRISISLENS',
    subtitle: 'Crisis Monitoring & Analytics',
    description:
      'Data analytics and visualization platform for crisis monitoring and insight generation — surfacing patterns and actionable intelligence from complex datasets.',
    tech: ['Python', 'Jupyter', 'Pandas', 'Data Analysis', 'Visualization'],
    url: 'https://github.com/Manishym956/CrisisLens',
    homepage: null as string | null,
    chartLabel: 'Alert Volume Index',
    chartData: [18, 24, 31, 28, 42, 38, 55, 61] as number[],
    nodes: null as string[] | null,
  },
  {
    codename: 'MULTI-AGENT-SYSTEM',
    subtitle: 'Collaborative AI Agents',
    description:
      'Multi-agent orchestration system where specialized AI agents collaborate on tasks — routing work, sharing context, and producing structured outputs through coordinated workflows.',
    tech: ['Python', 'LLM APIs', 'AI Agents', 'Orchestration'],
    url: 'https://github.com/Manishym956/multi-agent_system',
    homepage: null as string | null,
    chartLabel: null as string | null,
    chartData: null as number[] | null,
    nodes: ['Task', 'Planner', 'Researcher', 'Writer', 'Output'],
  },
  {
    codename: 'EATRIGHT.AI',
    subtitle: 'Smart Nutrition Analysis',
    description:
      'AI-powered nutrition system analyzing food consumption patterns, classifying food items with ML, and recommending healthier alternatives based on calorie and nutrient profiles.',
    tech: ['Python', 'Machine Learning', 'NLP', 'Pandas', 'API Integration'],
    url: 'https://github.com/Manishym956/EatRight.AI',
    homepage: 'https://eat-right-ai.vercel.app',
    chartLabel: 'Recommendation Accuracy',
    chartData: [0.65, 0.71, 0.76, 0.8, 0.84, 0.87, 0.9] as number[],
    nodes: null as string[] | null,
  },
]

export const battles = [
  {
    tag: 'Lesson 01',
    date: 'Mar 2026',
    title: 'The Pipeline Surprise',
    excerpt:
      'When n8n workflows silently fail at 3 AM — how anomaly detection and structured logging saved an AutoMeta deployment.',
  },
  {
    tag: 'Lesson 02',
    date: 'May 2026',
    title: 'The Cold Start Problem',
    excerpt:
      'Scaling real-time dashboards under burst load taught me Redis caching patterns and graceful degradation strategies.',
  },
  {
    tag: 'Lesson 03',
    date: 'Jun 2026',
    title: 'The Quiz Generation Gambit',
    excerpt:
      'Building IWTK\'s LLM quiz pipeline — deduplication, structured output validation, and Telegram approval flows.',
  },
]

export const experience = [
  {
    role: 'Founding Tech Intern',
    company: 'AutoMeta.ai',
    period: 'Mar – Jun 2026',
  },
  {
    role: 'AI Automation Intern',
    company: 'IndiaWantsToKnow',
    period: 'Jun 2026',
  },
]

export const education = {
  degree: 'B.Tech Computer Science & Engineering',
  school: 'Polaris School of Technology, Bengaluru',
  period: '2024 – 2028',
  grade: '7.8 CGPA',
}
