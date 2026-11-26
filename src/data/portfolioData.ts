export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'ai' | 'web' | 'fullstack' | 'hackathon';
  image: string;
  tags: string[];
  metrics?: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Proficient", "Advanced", "Intermediate"
  category: 'languages' | 'web' | 'aiml' | 'tools' | 'dsa';
  icon: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  badge?: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  metric?: string;
  link?: string;
  type: 'coding' | 'hackathon' | 'certification' | 'academic';
}

export const personalInfo = {
  name: "Princy Suman",
  shortName: "Princy",
  initials: "PS",
  headline: "Computer Science Student. AI Enthusiast. Future Innovator.",
  intro: "I build intelligent solutions, explore emerging technologies, and turn ideas into impactful digital experiences.",
  avatar: "/avatar.jpg",
  email: "princysuman@gmail.com",
  location: "India",
  status: "Available for Internships & Collaborations",
  tagline: "Learning. Building. Innovating.",
  animatedRoles: [
    "Aspiring Software Engineer",
    "AI/ML Enthusiast",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Innovator",
    "Agentic AI Explorer"
  ],
  stats: [
    { label: "DSA Problems Solved", value: "320+", change: "Across LeetCode & GFG" },
    { label: "Projects Completed", value: "15+", change: "AI & Full Stack" },
    { label: "Hackathons & Events", value: "5+", change: "Hackathons Participated" },
    { label: "Academic CGPA", value: "8.9 / 10", change: "B.Tech CSE (AI & ML)" }
  ],
  socials: {
    github: "https://github.com/princysuman52-hue",
    linkedin: "https://www.linkedin.com/in/princy-suman-a80541428/",
    leetcode: "https://leetcode.com/princysuman",
    codeforces: "https://codeforces.com/profile/princysuman",
    instagram: "https://www.instagram.com/prxc_i?gwpx=cHNwZGxqY2F4MnNi",
    email: "mailto:princysuman@gmail.com"
  }
};

export const aboutData = {
  bioParagraphs: [
    "I am an ambitious Computer Science and Engineering undergraduate specializing in Artificial Intelligence and Machine Learning. Passionate about software architecture, autonomous systems, and modern web applications, I thrive at the intersection of robust engineering and innovative intelligence.",
    "My journey revolves around turning challenging computational problems into elegant, user-centric software. Whether it's training machine learning models, architecting scalable full-stack applications with React & Node.js, or practicing data structures and algorithms, I approach every challenge with relentless curiosity and disciplined execution.",
    "Driven by the vision of becoming a software engineer and future tech founder, I actively participate in hackathons, collaborate on open-source initiatives, and experiment with the latest in Agentic AI and Large Language Models."
  ],
  coreFocus: [
    { title: "Specialization", value: "Artificial Intelligence & Machine Learning" },
    { title: "Degree", value: "B.Tech in Computer Science Engineering" },
    { title: "Expected Graduation", value: "2026" },
    { title: "Key Interests", value: "Agentic AI, Full-Stack Architecture, Algorithms, Distributed Systems" }
  ],
  journeyTimeline: [
    {
      year: "2022",
      title: "Commenced B.Tech in CSE (AI & ML)",
      description: "Stepped into computer science, mastered fundamentals of C++ & Java, and built strong mathematical foundations."
    },
    {
      year: "2023",
      title: "DSA Mastery & Web Development",
      description: "Solved 200+ LeetCode problems, learned modern React & Tailwind, and shipped first interactive full-stack projects."
    },
    {
      year: "2024",
      title: "Smart India Hackathon & AI Deep-Dive",
      description: "Built AI-powered triage and learning systems, competed in hackathons, and explored PyTorch, LangChain, and Agentic workflows."
    },
    {
      year: "2025 - 2026",
      title: "Building Scalable Systems & Innovations",
      description: "Developing production-grade applications, contributing to open source, and preparing for high-impact software engineering roles."
    }
  ]
};

export const skillsData: SkillItem[] = [
  // Programming Languages
  { name: "Python", level: "Proficient", category: "languages", icon: "Code2", description: "NumPy, Pandas, PyTorch, FastAPI" },
  { name: "C++", level: "Proficient", category: "languages", icon: "Binary", description: "DSA, STL, Competitive Programming" },
  { name: "Java", level: "Proficient", category: "languages", icon: "Coffee", description: "OOPs, Collections Framework, Backend" },
  { name: "JavaScript", level: "Proficient", category: "languages", icon: "FileCode", description: "ES6+, Async, DOM manipulation" },
  { name: "TypeScript", level: "Intermediate", category: "languages", icon: "FileCode2", description: "Type safety, Interfaces, Generics" },
  { name: "SQL", level: "Proficient", category: "languages", icon: "Database", description: "Complex queries, indexing, joins" },

  // Web Development
  { name: "React.js", level: "Proficient", category: "web", icon: "Layers", description: "Hooks, Context, State Management" },
  { name: "Tailwind CSS", level: "Proficient", category: "web", icon: "Palette", description: "Responsive layouts, Glassmorphism, animations" },
  { name: "Node.js", level: "Intermediate", category: "web", icon: "Server", description: "RESTful APIs, Express, middleware" },
  { name: "HTML5 & CSS3", level: "Proficient", category: "web", icon: "Layout", description: "Semantic markup, modern flexbox/grid" },
  { name: "Next.js", level: "Intermediate", category: "web", icon: "Globe", description: "App router, SSR, static generation" },

  // AI & Machine Learning
  { name: "Machine Learning", level: "Proficient", category: "aiml", icon: "BrainCircuit", description: "Supervised, unsupervised, regression, classification" },
  { name: "Generative AI", level: "Intermediate", category: "aiml", icon: "Sparkles", description: "Prompt engineering, LLM integration, embeddings" },
  { name: "Agentic AI", level: "Intermediate", category: "aiml", icon: "Bot", description: "Multi-agent workflows, autonomous tool use" },
  { name: "PyTorch & Scikit-Learn", level: "Intermediate", category: "aiml", icon: "Cpu", description: "Neural nets, model evaluation, data pipelines" },
  { name: "REST APIs & Integration", level: "Proficient", category: "aiml", icon: "Workflow", description: "FastAPI, Gemini API, OpenAI SDK" },

  // Developer Tools
  { name: "Git & GitHub", level: "Proficient", category: "tools", icon: "GitBranch", description: "Version control, branching, PR workflows" },
  { name: "VS Code", level: "Proficient", category: "tools", icon: "Laptop", description: "Extensions, debugging, productivity setups" },
  { name: "IntelliJ IDEA", level: "Proficient", category: "tools", icon: "TerminalSquare", description: "Java development, profiling, refactoring" },
  { name: "Postman", level: "Intermediate", category: "tools", icon: "Send", description: "API testing, collections, documentation" },
  { name: "Linux / Shell", level: "Intermediate", category: "tools", icon: "Terminal", description: "Bash scripting, environment setup" },

  // DSA & Problem Solving
  { name: "Data Structures", level: "Proficient", category: "dsa", icon: "Network", description: "Trees, Graphs, Heaps, HashMaps, Tries" },
  { name: "Algorithms", level: "Proficient", category: "dsa", icon: "Boxes", description: "DP, Greedy, Binary Search, Backtracking" },
  { name: "LeetCode", level: "320+ Solved", category: "dsa", icon: "Code", description: "Arrays, Strings, Dynamic Programming, Graphs" },
  { name: "Codeforces", level: "Active Contestant", category: "dsa", icon: "Trophy", description: "Timed competitive programming matches" }
];

export const projectsData: Project[] = [
  {
    id: "ai-learning-platform",
    title: "AI-Powered Personalized Learning Platform",
    shortDescription: "An intelligent learning system that adapts study roadmaps, generates personalized quizzes, and provides 24/7 AI-driven tutoring.",
    fullDescription: "Built an intelligent EdTech platform utilizing LLM embeddings and vector search to customize educational paths based on student performance. Features automatic quiz generation with instant explanations, knowledge graph gap-detection, and real-time interactive voice/text tutoring.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "FastAPI", "Python", "LangChain", "Vector DB", "Tailwind CSS"],
    metrics: "40% faster retention on test cohorts",
    highlights: [
      "Custom vector database integration for instant syllabus retrieval",
      "Dynamic difficulty adjustment engine using reinforcement heuristics",
      "Interactive analytics dashboard tracking topic-level mastery"
    ],
    githubUrl: "https://github.com/princysuman/ai-learning-platform",
    liveUrl: "https://ai-learning-demo.example.com",
    featured: true
  },
  {
    id: "smart-health-assistant",
    title: "Smart Healthcare Assistant & AI Triage",
    shortDescription: "A clinical symptom checker and triage assistant that analyzes natural language patient inputs and recommends preliminary actions.",
    fullDescription: "Developed an AI-driven healthcare advisory prototype designed to alleviate emergency room overcrowding. The system analyzes self-reported symptoms, cross-references clinical databases, categorizes urgency into three triage levels, and provides emergency first-aid guidance.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "Gemini API", "Streamlit", "Scikit-Learn", "FastAPI"],
    metrics: "94% triage triage concordance in testing",
    highlights: [
      "Integrated secure multi-lingual natural language symptom parsing",
      "Strict medical safety guardrails prohibiting diagnostic hallucinations",
      "Automated PDF appointment summary generation for doctors"
    ],
    githubUrl: "https://github.com/princysuman/smart-healthcare-assistant",
    liveUrl: "https://smart-health-demo.example.com",
    featured: true
  },
  {
    id: "student-management-system",
    title: "Student Management & Analytics Portal",
    shortDescription: "A secure, role-based full-stack administrative portal featuring automated attendance tracking, grade analytics, and report generation.",
    fullDescription: "Engineered a production-ready educational management system featuring discrete access roles for students, professors, and administrators. Built with React and Node.js with secure JWT authentication and comprehensive SQL relational schema.",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    tags: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    metrics: "Handles 1,000+ student records efficiently",
    highlights: [
      "Role-Based Access Control (RBAC) with secure JWT and BCrypt",
      "Interactive visual analytics depicting batch-wise grade trends",
      "Bulk CSV data import/export with automated validation pipelines"
    ],
    githubUrl: "https://github.com/princysuman/student-management-system",
    liveUrl: "https://sms-portal-demo.example.com",
    featured: true
  },
  {
    id: "agentic-ai-workspace",
    title: "Agentic AI Multi-Agent Task Orchestrator",
    shortDescription: "Autonomous multi-agent system where specialized AI agents collaborate to research topics, write code, and synthesize technical reports.",
    fullDescription: "Implemented an agentic workflow framework where multiple AI agents take on roles (Researcher, Code Synthesizer, Fact Checker, Reviewer) and execute complex multi-step user prompts with self-correction loops.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "Agentic AI", "LangGraph", "FastAPI", "React", "WebSockets"],
    metrics: "Autonomous execution of 5+ step workflows",
    highlights: [
      "Built loopback verification preventing logical hallucinations",
      "Real-time step-by-step reasoning streamed to React client",
      "Custom tool execution engine for web search and code execution"
    ],
    githubUrl: "https://github.com/princysuman/agentic-workspace",
    liveUrl: "https://agentic-workspace.example.com",
    featured: true
  },
  {
    id: "sih-hackathon-project",
    title: "EcoSmart: IoT & AI Municipal Waste Sorter",
    shortDescription: "Smart India Hackathon project leveraging computer vision to identify, categorize, and track municipal waste streams in real-time.",
    fullDescription: "Created for Smart India Hackathon (SIH), this project combines an edge-deployed computer vision model with an intuitive civic administration dashboard to classify recyclable, wet, and hazardous wastes with instant analytics.",
    category: "hackathon",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "YOLOv8", "OpenCV", "Flask", "React", "IoT"],
    metrics: "College Internal Hackathon",
    highlights: [
      "Trained custom YOLOv8 model on 5,000+ localized waste items",
      "Real-time webcam inference running at 35+ FPS on commodity hardware",
      "Interactive map dashboard highlighting municipal hotspot bins"
    ],
    githubUrl: "https://github.com/princysuman/ecosmart-sih",
    liveUrl: "https://ecosmart-waste.example.com",
    featured: false
  },
  {
    id: "personal-portfolio-pro",
    title: "Futuristic Developer Portfolio & Brand",
    shortDescription: "Ultra-modern, glassmorphic portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.",
    fullDescription: "The website you are currently experiencing! Designed from scratch with an Apple/Linear inspired dark aesthetic, interactive 3D-feeling cards, live GitHub stats, dynamic category filters, and smooth motion physics.",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    metrics: "100 Lighthouse Performance score",
    highlights: [
      "Zero clutter dark-charcoal UI with glowing purple/cyan accents",
      "Fully responsive architecture tested across all modern devices",
      "Interactive confetti, custom stateful modals, and modular design"
    ],
    githubUrl: "https://github.com/princysuman/portfolio",
    liveUrl: "https://princysuman.dev",
    featured: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "College Hackathon — AI & IoT Waste Sorter",
    role: "Team Lead & AI Developer",
    organization: "College Internal Hackathon",
    period: "2024",
    location: "India",
    badge: "National Hackathon",
    description: [
      "Led a 6-member engineering team to design and pitch an AI-driven automated municipal waste classification prototype.",
      "Trained computer vision models for real-time edge categorization, achieving high precision across varied real-world lighting.",
      "Delivered live prototype demonstration to jury panel and secured top ranking in internal college evaluations."
    ],
    skills: ["Computer Vision", "Team Leadership", "Python", "React", "Pitching"]
  },
  {
    id: "exp-2",
    title: "Technical Club & AI Division",
    role: "Core Technical Member & Workshop Lead",
    organization: "College Coding & AI Society",
    period: "2023 - Present",
    location: "Campus",
    badge: "Leadership & Community",
    description: [
      "Mentored 100+ junior students in foundational Data Structures & Algorithms and Python programming.",
      "Organized hands-on bootcamps covering Git, GitHub workflows, web development, and introduction to Machine Learning.",
      "Co-organized annual college hackathons, reviewing project submissions and managing live coding competitions."
    ],
    skills: ["Mentorship", "Public Speaking", "DSA", "Event Management", "Git"]
  },
  {
    id: "exp-3",
    title: "Open Source Contributor",
    role: "Open Source Enthusiast",
    organization: "GitHub / Hacktoberfest",
    period: "2023 - Present",
    location: "Remote",
    badge: "Community",
    description: [
      "Contributed bug fixes, UI enhancements, and documentation improvements across open-source developer tool repositories.",
      "Collaborated with global maintainers through pull requests, issue triaging, and code review feedback.",
      "Advocating for clean code standards and accessible developer tools."
    ],
    skills: ["Git", "GitHub PRs", "Code Review", "Documentation", "TypeScript"]
  },
  {
    id: "exp-4",
    title: "Academic Research & Innovation Project",
    role: "Undergraduate Researcher",
    organization: "Department of Computer Science & Engineering",
    period: "2024",
    location: "Campus",
    badge: "Research & Development",
    description: [
      "Investigated transformer attention mechanisms to optimize compute overhead on edge devices for NLP tasks.",
      "Synthesized benchmark comparisons between standard BERT models and quantized mobile-friendly alternatives.",
      "Prepared comprehensive project documentation and technical findings for faculty assessment."
    ],
    skills: ["Transformers", "NLP", "PyTorch", "Model Quantization", "Research Analysis"]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "320+ Problems Solved on LeetCode",
    organization: "LeetCode",
    date: "Ongoing",
    description: "Consistent problem solver across Arrays, Graphs, Trees, and Dynamic Programming with a 50+ day streak.",
    metric: "Top 15% Rating",
    link: "https://leetcode.com/princysuman",
    type: "coding"
  },
  {
    id: "ach-2",
    title: "College Internal Hackathon Participation",
    organization: "Engineering Institute",
    date: "2024",
    description: "Participated in college internal hackathon with an AI-assisted civic automation prototype.",
    metric: "Participated",
    link: "https://sih.gov.in",
    type: "hackathon"
  },
  {
    id: "ach-3",
    title: "Codeforces Specialist Track",
    organization: "Codeforces",
    date: "2024",
    description: "Active participant in Division 2 and Division 3 global rated rounds, continuously sharpening speed and logic.",
    metric: "Active Contestant",
    link: "https://codeforces.com/profile/princysuman",
    type: "coding"
  },
  {
    id: "ach-4",
    title: "Machine Learning Specialization",
    organization: "DeepLearning.AI / Coursera",
    date: "2023",
    description: "Mastered fundamental concepts in supervised learning, neural networks, decision trees, and unsupervised clustering.",
    metric: "Verified Certificate",
    type: "certification"
  },
  {
    id: "ach-5",
    title: "Problem Solving (Intermediate) Certificate",
    organization: "HackerRank",
    date: "2023",
    description: "Demonstrated proficiency in algorithmic problem solving, time complexity optimization, and data structures.",
    metric: "Verified Gold",
    type: "certification"
  },
  {
    id: "ach-6",
    title: "Academic Excellence Honors",
    organization: "Engineering Institute",
    date: "2023 - 2024",
    description: "Consistently maintained top percentile academic performance with an 8.9 CGPA across core CSE courses.",
    metric: "8.9 CGPA",
    type: "academic"
  }
];

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  specialization: "Artificial Intelligence & Machine Learning",
  institution: "University Institute of Engineering & Technology",
  period: "2022 - 2026",
  status: "In Progress (Final Year Track)",
  cgpa: "8.9 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Design & Analysis of Algorithms",
    "Object-Oriented Programming (Java/C++)",
    "Artificial Intelligence & Machine Learning",
    "Deep Learning & Neural Networks",
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
    "Computer Networks (CN)",
    "Software Engineering & Architecture",
    "Theory of Computation (TOC)"
  ],
  academicHighlights: [
    "Departmental topper candidate in Data Structures and Artificial Intelligence",
    "Active member of the Academic Peer Mentoring Cell for junior engineers",
    "Completed hands-on capstone project on AI-driven clinical triage system"
  ]
};

export const githubStats = {
  username: "princysuman52-hue",
  totalContributions: "540+ in 2024",
  longestStreak: "42 Days",
  currentStreak: "12 Days",
  publicRepos: 18,
  topLanguages: [
    { name: "Python", percentage: 42, color: "#3572A5" },
    { name: "TypeScript / JS", percentage: 28, color: "#3178C6" },
    { name: "C++", percentage: 18, color: "#f34b7d" },
    { name: "Java", percentage: 8, color: "#b07219" },
    { name: "Other / HTML / CSS", percentage: 4, color: "#e34c26" }
  ],
  featuredRepos: [
    {
      name: "ai-learning-platform",
      description: "Adaptive AI study roadmap and quiz generation engine using LangChain and FastAPI.",
      stars: 24,
      forks: 6,
      language: "Python",
      languageColor: "#3572A5"
    },
    {
      name: "dsa-competitive-vault",
      description: "Carefully curated solutions to 300+ LeetCode & Codeforces problems in C++ & Java with complexity analysis.",
      stars: 48,
      forks: 14,
      language: "C++",
      languageColor: "#f34b7d"
    },
    {
      name: "agentic-ai-orchestrator",
      description: "Autonomous multi-agent system executing recursive research and software synthesis.",
      stars: 31,
      forks: 9,
      language: "TypeScript",
      languageColor: "#3178C6"
    }
  ]
};

export const exploringNowData = [
  {
    title: "Agentic AI & Multi-Agent Frameworks",
    tag: "Autonomous Systems",
    description: "Studying LangGraph, AutoGen, and tool-augmented reasoning loops for autonomous multi-step software synthesis.",
    icon: "Bot",
    badgeColor: "border-purple-500/40 text-purple-300 bg-purple-500/10"
  },
  {
    title: "Graph Algorithms & Advanced DP",
    tag: "DSA & CP",
    description: "Sharpening advanced competitive programming paradigms including Segment Trees, Fenwick Trees, and Bitmask Dynamic Programming.",
    icon: "Network",
    badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10"
  },
  {
    title: "LLM Fine-Tuning & Quantization",
    tag: "Generative AI",
    description: "Experimenting with LoRA, QLoRA, and edge model quantization (GGUF) to run specialized open weights locally.",
    icon: "BrainCircuit",
    badgeColor: "border-pink-500/40 text-pink-300 bg-pink-500/10"
  },
  {
    title: "Distributed Full-Stack Systems",
    tag: "System Design",
    description: "Deepening understanding of microservice caching (Redis), message queues (Kafka), and database sharding techniques.",
    icon: "Server",
    badgeColor: "border-blue-500/40 text-blue-300 bg-blue-500/10"
  },
  {
    title: "Open Source AI Developer Tooling",
    tag: "Community",
    description: "Reviewing pull requests and authoring lightweight CLI wrappers for developer workflow automation.",
    icon: "GitPullRequest",
    badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10"
  },
  {
    title: "Tech Startup Innovation",
    tag: "Entrepreneurship",
    description: "Analyzing high-growth AI SaaS business models, product-market fit, and zero-to-one product development.",
    icon: "Rocket",
    badgeColor: "border-amber-500/40 text-amber-300 bg-amber-500/10"
  }
];

