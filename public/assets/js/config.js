/**
 * Central site configuration — edit this file to update portfolio content.
 * Primary source of truth: latest CV (Muhammad Muzammil).
 * Projects/screenshots preserved from the existing portfolio (Play Store links verified).
 * Formspree: replace formEndpoint with your form ID after signup.
 */
window.PORTFOLIO_CONFIG = {
  name: "Muhammad Muzammil",
  shortName: "Muzammil",
  title: "React Native Developer | AI-Assisted Software Engineer",
  titleShort: "React Native Developer",
  experienceYears: 4,
  location: "Karachi, Pakistan",
  availability: "Available for freelance & full-time opportunities",
  availabilityAvailable: true,

  summary:
    "Experienced React Native Developer with 4 years of hands-on experience building scalable, high-performance mobile applications. Specialized in developing Android and iOS apps using modern React Native practices, API integrations, payment gateways, real-time features, and AI-assisted development workflows.",

  heroHeadline: "React Native Developer | AI-Assisted Software Engineer",
  heroDescription:
    "I build scalable, responsive, and reliable Android and iOS applications with React Native — integrating APIs, payments, maps, real-time communication, and third-party services. I use modern AI-powered tools to accelerate delivery while independently reviewing, testing, and owning every line of code I ship.",

  aboutSubheading: "Building reliable mobile products with modern engineering and AI-assisted workflows.",
  aboutText: [
    "I am a React Native Developer with 4 years of professional experience building scalable, high-performance mobile applications for Android and iOS.",
    "My work includes payment gateway integrations (Stripe, Apple Pay, Google Pay, Telr), Google Maps live tracking, REST APIs with Axios, real-time socket communication, Agora audio/video, Firebase-backed features, HealthKit/Google Fit sync, multi-language support, and booking/appointment workflows.",
    "I actively use AI-powered development tools — including Cursor, GitHub Copilot, ChatGPT, Gemini, Grok, and DeepSeek — to speed up research, scaffolding, and refactoring. I independently understand, review, validate, test, and maintain everything I deliver.",
  ],

  profileImage: "assets/images/about.jpg",
  aboutImage: "assets/images/about.jpg",
  resumePath: "assets/resume/Muhammad-Muzammil-CV.pdf",
  favicon: "assets/icons/favicon.jpg",

  contact: {
    email: "muzammilarain912@gmail.com",
    phone: "+923100012746",
    whatsapp: "923100012746",
    linkedin: "https://www.linkedin.com/in/muhammad-muzammil-2b9212217/",
    github: "https://github.com/Muzammil-Arain",
  },

  /**
   * Contact form backend.
   * Set formProvider to "formspree" and formEndpoint to your Formspree URL,
   * or "emailjs" with emailjsPublicKey / emailjsServiceId / emailjsTemplateId.
   * Leave formEndpoint empty until configured — the UI will show a clear setup message.
   */
  form: {
    formProvider: "formspree",
    formEndpoint: "", // e.g. "https://formspree.io/f/xxxxxxxx"
    emailjsPublicKey: "",
    emailjsServiceId: "",
    emailjsTemplateId: "",
  },

  whatsappPrefill:
    "Hi Muhammad, I found your portfolio and would like to discuss a React Native project.",

  seo: {
    title: "Muhammad Muzammil | React Native Developer | AI-Assisted Software Engineer",
    description:
      "React Native Developer with 4 years of experience building scalable Android and iOS apps. Firebase, REST APIs, Stripe, Agora, maps, sockets, and AI-assisted development. Based in Karachi, Pakistan.",
    url: "https://muzammilreact-ecce8.web.app/",
    ogImage: "assets/images/about.jpg",
  },

  skills: [
    {
      category: "Mobile Development",
      icon: "smartphone",
      items: ["React Native", "Android", "iOS", "State Management", "Lottie Animations"],
    },
    {
      category: "Programming Languages",
      icon: "code",
      items: ["JavaScript", "TypeScript"],
    },
    {
      category: "Frontend Technologies",
      icon: "layout",
      items: ["Responsive Mobile UI", "Lottie Animations", "HTML5", "CSS3"],
    },
    {
      category: "Backend & Cloud Services",
      icon: "database",
      items: ["Firebase", "Firebase Authentication", "Cloud Firestore", "Realtime Database"],
    },
    {
      category: "APIs & Integrations",
      icon: "api",
      items: [
        "REST APIs",
        "Axios",
        "Third-Party SDK Integration",
        "Google Maps & Location",
        "Google Fit",
        "Apple HealthKit",
        "Native Modules",
      ],
    },
    {
      category: "Payment Integrations",
      icon: "credit-card",
      items: ["Stripe", "Apple Pay", "Google Pay", "Telr"],
    },
    {
      category: "Notifications & Real-Time Communication",
      icon: "bell",
      items: ["Agora (Audio/Video)", "Socket-based Realtime", "Push Notifications"],
    },
    {
      category: "Developer Tools",
      icon: "wrench",
      items: ["Git", "GitHub", "VS Code", "Cursor"],
    },
    {
      category: "AI Tools & Assistants",
      icon: "sparkles",
      items: ["Cursor", "GitHub Copilot", "ChatGPT", "Google Gemini", "Grok", "DeepSeek"],
    },
    {
      category: "Testing & Code Quality",
      icon: "check-circle",
      items: ["Pyright", "Code Review", "Manual QA", "Production Bug Fixing"],
    },
  ],

  /**
   * Tools I use professionally (not technologies I built).
   */
  aiTools: [
    {
      name: "Cursor",
      category: "AI Coding Assistants",
      description: "AI-native code editor for multi-file editing, refactors, and contextual coding help.",
      usage:
        "I use Cursor for architecture planning, scaffolding features, refactoring React Native modules, and speeding up repetitive implementation while reviewing every change myself.",
      icon: "cursor",
    },
    {
      name: "GitHub Copilot",
      category: "AI Coding Assistants",
      description: "In-editor AI pair programmer for suggestions and boilerplate acceleration.",
      usage:
        "I use Copilot for boilerplate, test scaffolding ideas, and completing familiar patterns — then I validate logic, edge cases, and platform behavior.",
      icon: "copilot",
    },
    {
      name: "ChatGPT",
      category: "AI Assistants & Large Language Models",
      description: "General-purpose LLM for research, debugging strategies, and technical explanations.",
      usage:
        "I use ChatGPT to explore implementation options, draft documentation outlines, and troubleshoot complex API or mobile issues before applying my own engineering judgment.",
      icon: "chatgpt",
    },
    {
      name: "Google Gemini",
      category: "AI Assistants & Large Language Models",
      description: "Multimodal LLM useful for analysis, research, and alternative solution paths.",
      usage:
        "I use Gemini for technical research, comparing approaches, and clarifying unfamiliar SDK behavior when integrating third-party services.",
      icon: "gemini",
    },
    {
      name: "Grok",
      category: "AI Assistants & Large Language Models",
      description: "LLM assistant for fast technical Q&A and alternative perspectives.",
      usage:
        "I use Grok for quick problem-solving passes and second opinions on architecture or debugging paths.",
      icon: "grok",
    },
    {
      name: "DeepSeek",
      category: "AI Assistants & Large Language Models",
      description: "LLM focused on strong reasoning for coding and technical tasks.",
      usage:
        "I use DeepSeek for deeper reasoning on tricky logic, optimization ideas, and breaking down complex mobile integration problems.",
      icon: "deepseek",
    },
    {
      name: "Pyright",
      category: "Developer Tools & Code Quality",
      description: "Static type checker that improves correctness and catches issues early.",
      usage:
        "I use Pyright-style static analysis practices to catch type and contract issues early and keep codebases healthier.",
      icon: "pyright",
    },
    {
      name: "Git",
      category: "Developer Tools & Code Quality",
      description: "Version control for branching, collaboration, and safe delivery.",
      usage:
        "I use Git for feature branches, clean commits, code review workflows, and production-safe releases.",
      icon: "git",
    },
    {
      name: "GitHub",
      category: "Developer Tools & Code Quality",
      description: "Hosting, pull requests, and collaboration around code delivery.",
      usage:
        "I use GitHub for repositories, PR reviews, issue tracking, and coordinating releases with teammates.",
      icon: "github",
    },
    {
      name: "VS Code",
      category: "Developer Tools & Code Quality",
      description: "Lightweight editor ecosystem for scripting, config, and focused coding sessions.",
      usage:
        "I use VS Code for lightweight editing, config work, and complementary workflows alongside Cursor.",
      icon: "vscode",
    },
  ],

  aiWorkflow: [
    {
      title: "AI-Assisted Code Generation",
      description:
        "I use AI to scaffold components, screens, and integration stubs faster — then I reshape the code to match product requirements, coding standards, and platform constraints.",
      icon: "code",
    },
    {
      title: "Debugging & Troubleshooting",
      description:
        "When bugs appear, I use AI to explore likely causes and reproduction paths, then verify root causes with logs, device testing, and careful isolation.",
      icon: "bug",
    },
    {
      title: "Code Refactoring",
      description:
        "AI helps propose cleaner structures and naming; I decide what stays, ensure behavior is preserved, and keep the architecture maintainable.",
      icon: "refresh",
    },
    {
      title: "Code Optimization",
      description:
        "I leverage AI suggestions for performance ideas (renders, lists, network usage), then profile and validate improvements on real Android and iOS builds.",
      icon: "gauge",
    },
    {
      title: "Architecture & Implementation Planning",
      description:
        "Before coding, I use AI as a thinking partner for navigation, state, and integration plans — then I finalize the architecture based on product and team needs.",
      icon: "layers",
    },
    {
      title: "API Integration Assistance",
      description:
        "AI accelerates request/response mapping and edge-case checklists for REST/Axios work; I still own auth, error handling, and production-safe data flows.",
      icon: "api",
    },
    {
      title: "Documentation Generation",
      description:
        "I draft README notes, setup steps, and handoff docs with AI assistance, then edit them for accuracy so teammates can ship confidently.",
      icon: "file-code",
    },
    {
      title: "Problem-Solving & Technical Research",
      description:
        "I use LLMs to research SDKs, payment flows, maps, sockets, and native modules — then confirm details against official docs and real device behavior.",
      icon: "search",
    },
    {
      title: "Code Review Assistance",
      description:
        "AI helps surface risks and inconsistencies during review; I apply engineering judgment on security, UX, and release impact before merging.",
      icon: "eye",
    },
    {
      title: "Development Productivity",
      description:
        "AI reduces time spent on repetitive work so I can focus on product logic, integrations, and quality. I independently review, validate, test, and maintain all delivered code.",
      icon: "zap",
    },
  ],

  aiWorkflowNote:
    "AI supports my engineering workflow — it does not replace it. I remain accountable for understanding, reviewing, validating, testing, and maintaining the software I deliver.",

  services: [
    {
      icon: "smartphone",
      title: "Custom React Native App Development",
      description:
        "End-to-end React Native apps tailored to your product goals, with clean architecture and scalable feature delivery.",
    },
    {
      icon: "devices",
      title: "Android & iOS Development",
      description:
        "Ship polished experiences on both platforms from a shared codebase, with platform-aware UX where it matters.",
    },
    {
      icon: "flame",
      title: "Firebase Integration",
      description:
        "Authentication, Firestore, Realtime Database, and related Firebase workflows wired for real-world mobile usage.",
    },
    {
      icon: "api",
      title: "REST API Integration",
      description:
        "Secure, efficient API consumption with Axios, solid error handling, loading states, and maintainable data layers.",
    },
    {
      icon: "credit-card",
      title: "Payment Gateway Integration",
      description:
        "Stripe, Apple Pay, Google Pay, and Telr flows implemented carefully for clarity, reliability, and smooth checkout.",
    },
    {
      icon: "map",
      title: "Maps, Tracking & Location",
      description:
        "Google Maps–based live tracking and location features for real-time updates in mobile products.",
    },
    {
      icon: "video",
      title: "Agora Audio/Video Integration",
      description:
        "Real-time audio and video calling experiences powered by Agora, integrated into React Native apps.",
    },
    {
      icon: "message",
      title: "Realtime Sockets & Messaging",
      description:
        "Socket-based communication for instant updates, messaging, and live data synchronization.",
    },
    {
      icon: "puzzle",
      title: "Third-party SDK Integration",
      description:
        "HealthKit, Google Fit, maps, analytics, payments, and more — including native bridges when needed.",
    },
    {
      icon: "sparkles",
      title: "AI-Assisted Delivery",
      description:
        "Faster iteration using modern AI tooling, with engineer-owned review, testing, and production quality.",
    },
    {
      icon: "wrench",
      title: "App Maintenance & Bug Fixing",
      description:
        "Stabilize existing apps with targeted fixes, deployment support, and practical long-term maintenance.",
    },
    {
      icon: "gauge",
      title: "Performance Optimization",
      description:
        "Improve startup time, UI smoothness, and resource usage so your app feels fast and dependable.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Requirements",
      description:
        "Clarify goals, users, features, and constraints so we build the right product from day one.",
    },
    {
      step: "02",
      title: "Planning & Architecture",
      description:
        "Define structure, navigation, data flow, and integrations — using AI as a planning aid where helpful.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "Implement features, APIs, payments, maps, sockets, and SDKs with clean, production-minded React Native code.",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description:
        "Validate flows on Android and iOS, fix edge cases, and tune performance before release.",
    },
    {
      step: "05",
      title: "Delivery & Support",
      description:
        "Ship confidently and stay available for updates, improvements, and ongoing support.",
    },
  ],

  whyHire: [
    {
      icon: "award",
      title: "4 Years of Professional Experience",
      text: "Hands-on delivery across production React Native products and real mobile release cycles.",
    },
    {
      icon: "code",
      title: "React Native Expertise",
      text: "Specialized in scalable cross-platform Android and iOS apps with modern RN practices.",
    },
    {
      icon: "sparkles",
      title: "AI-Assisted, Engineer-Owned Delivery",
      text: "I use modern AI tools for speed — and personally review, validate, and own the final code.",
    },
    {
      icon: "credit-card",
      title: "Payments & Complex Integrations",
      text: "Experience with Stripe, Apple Pay, Google Pay, Telr, maps, sockets, Agora, and health SDKs.",
    },
    {
      icon: "plug",
      title: "Firebase & API Integrations",
      text: "Comfortable wiring backends, auth, REST/Axios flows, and third-party services.",
    },
    {
      icon: "gauge",
      title: "Performance-Focused Development",
      text: "Optimized UI and data flows for smooth, responsive mobile experiences.",
    },
    {
      icon: "message",
      title: "Cross-Functional Collaboration",
      text: "Work closely with backend, design, and QA to deliver seamless feature integrations.",
    },
    {
      icon: "check-circle",
      title: "Reliable Project Delivery",
      text: "Committed to timelines, quality, deployment support, and shipping what was agreed.",
    },
    {
      icon: "life-buoy",
      title: "Long-Term Support",
      text: "Available for maintenance, enhancements, production fixes, and post-launch care.",
    },
  ],

  /**
   * Experience from latest CV (primary source of truth).
   */
  experience: [
    {
      company: "CMolds",
      title: "React Native Developer",
      dates: "July 2025 — Present",
      location: "Karachi, Pakistan",
      technologies: [
        "React Native",
        "Stripe",
        "Apple Pay",
        "Google Pay",
        "Telr",
        "Google Maps",
        "Axios",
        "Sockets",
        "Google Fit",
        "HealthKit",
      ],
      responsibilities: [
        "Integrated Stripe, Apple Pay, Google Pay, and Telr payment gateways.",
        "Developed Google Maps–based live tracking and location features for real-time updates.",
        "Collaborated closely with cross-functional teams (backend, design, QA) to deliver seamless feature integrations.",
        "Consumed and managed RESTful APIs using Axios, ensuring efficient data handling.",
        "Assisted in app deployment, bug fixing, and production issue resolution for Android and iOS releases.",
        "Integrated real-time socket-based communication for instant updates, messaging, and live data synchronization.",
        "Integrated Google Fit and Apple HealthKit to track and sync fitness data for a mobile fitness application.",
      ],
      achievements: [
        "Shipped production apps including Walk Plus and SyncdFlow on Google Play.",
      ],
    },
    {
      company: "Intellexal Solutions",
      title: "Mid-Level React Native Developer",
      dates: "March 2022 — June 2025",
      location: "Karachi, Pakistan",
      technologies: [
        "React Native",
        "Firebase",
        "Agora",
        "REST APIs",
        "Multi-language Support",
        "Booking Systems",
      ],
      responsibilities: [
        "Implemented multi-language support and dynamic language switching for global users.",
        "Integrated Agora to facilitate real-time video calls with strong audio and video quality.",
        "Developed social media–style applications with user interaction and real-time updates.",
        "Built a complete booking management system, including accept, reject, cancel, and withdrawal flows.",
        "Developed a doctor appointment booking application with scheduling, confirmations, and status management.",
      ],
      achievements: [
        "Contributed to production apps including eViale (available on Google Play).",
      ],
    },
  ],

  education: [
    {
      title: "Intermediate (Commerce)",
      institution: "Karachi Board",
      dates: "Completed",
    },
    {
      title: "Web & App Development Course",
      institution: "Professional training in web and mobile application development",
      dates: "Completed",
    },
  ],

  /**
   * Genuine projects preserved from the existing portfolio (Play Store links verified).
   * Company context for older listings was recorded in the previous portfolio.
   * Expand editable case-study fields with real details — do not invent clients.
   */
  projects: [
    {
      id: "dispute",
      title: "Dispute",
      category: ["mobile", "business"],
      categoryLabel: "Mobile Application",
      image: "assets/images/projects/dispute.jpg",
      shortDescription:
        "React Native mobile application published on Google Play — cross-platform feature delivery for a business workflow product.",
      technologies: ["React Native", "JavaScript", "REST APIs"],
      features: [
        "Cross-platform Android release",
        "Production feature delivery",
        "Play Store distribution",
      ],
      integrations: ["REST APIs", "Google Play distribution"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.craftywebz.dispute",
      githubUrl: "",
      overview:
        "Dispute is a React Native mobile application I contributed to during my professional career. The app was released on the Google Play Store.",
      problem:
        "/* EDITABLE: Describe the product problem this app solved for users or the business. */",
      role: "React Native developer contributing to feature implementation, integrations, and production delivery.",
      solution:
        "Built and refined the React Native application for Android, integrating required product flows and supporting the Google Play release.",
      challenges:
        "/* EDITABLE: Note real technical challenges (API design, offline sync, payments, etc.) and how you solved them. */",
      outcome: "Published on Google Play and available for Android users.",
      screenshots: ["assets/images/projects/dispute.jpg"],
      companyNote: "Previously documented under Parallel Solution in the earlier portfolio.",
    },
    {
      id: "fit-for-all",
      title: "Fit For All",
      category: ["mobile", "business"],
      categoryLabel: "Mobile Application",
      image: "assets/images/projects/fitforall.jpg",
      shortDescription:
        "Fitness-focused React Native application published on Google Play.",
      technologies: ["React Native", "JavaScript", "REST APIs"],
      features: [
        "Cross-platform mobile UI",
        "Client product delivery",
        "Google Play listing",
      ],
      integrations: ["REST APIs"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.fitforall",
      githubUrl: "",
      overview:
        "Fit For All is a fitness-oriented mobile application developed with React Native and published on Google Play.",
      problem: "/* EDITABLE: Add the real problem statement for Fit For All. */",
      role: "React Native developer responsible for implementing the mobile experience and supporting delivery.",
      solution:
        "Implemented the React Native application experience and supported delivery of the Play Store release.",
      challenges: "/* EDITABLE: Document real challenges and solutions. */",
      outcome: "Available on the Google Play Store.",
      screenshots: ["assets/images/projects/fitforall.jpg"],
      companyNote: "Previously documented under Parallel Solution in the earlier portfolio.",
    },
    {
      id: "rapid-beauty",
      title: "Rapid Beauty",
      category: ["mobile", "business"],
      categoryLabel: "Business Application",
      image: "assets/images/projects/rapid-beauty.jpg",
      shortDescription:
        "Beauty services client mobile app built with React Native and published for Android.",
      technologies: ["React Native", "JavaScript", "REST APIs"],
      features: [
        "Client-facing mobile experience",
        "Business service workflows",
        "Play Store release",
      ],
      integrations: ["REST APIs"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.rapid.beauty.client",
      githubUrl: "",
      overview:
        "Rapid Beauty is a client-facing mobile application for beauty services, built with React Native and published on Google Play.",
      problem: "/* EDITABLE: Describe the business/user problem Rapid Beauty addressed. */",
      role: "React Native developer delivering client-app features and supporting production release.",
      solution:
        "Delivered React Native features for the client application and supported production release.",
      challenges: "/* EDITABLE: Add technical challenges and how you solved them. */",
      outcome: "Published on Google Play.",
      screenshots: ["assets/images/projects/rapid-beauty.jpg"],
      companyNote: "Previously documented under Parallel Solution in the earlier portfolio.",
    },
    {
      id: "sail",
      title: "Sail",
      category: ["mobile", "integrations"],
      categoryLabel: "Mobile Application",
      image: "assets/images/projects/sail.jpg",
      shortDescription:
        "React Native application with API-driven screens, published on Google Play.",
      technologies: ["React Native", "JavaScript", "REST APIs"],
      features: [
        "Cross-platform mobile app",
        "API-driven screens",
        "Published Android build",
      ],
      integrations: ["REST APIs"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.reactjssail",
      githubUrl: "",
      overview:
        "Sail is a React Native project delivered as a production Android application and listed on Google Play.",
      problem: "/* EDITABLE: Add Sail's problem statement. */",
      role: "React Native developer building application features and supporting the shipped release.",
      solution:
        "Built application features in React Native and contributed to the shipped Play Store version.",
      challenges: "/* EDITABLE: Add challenges & solutions. */",
      outcome: "Available on Google Play.",
      screenshots: ["assets/images/projects/sail.jpg"],
      companyNote: "Previously documented under Parallel Solution in the earlier portfolio.",
    },
    {
      id: "my-score",
      title: "My Score",
      category: ["mobile", "business"],
      categoryLabel: "Mobile Application",
      image: "assets/images/projects/myscore.png",
      shortDescription:
        "Score-tracking React Native app with Firebase-backed delivery, published on Google Play.",
      technologies: ["React Native", "JavaScript", "Firebase"],
      features: [
        "Mobile scoring experience",
        "Production React Native delivery",
        "Google Play distribution",
      ],
      integrations: ["Firebase"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.my_score",
      githubUrl: "",
      overview:
        "My Score is a mobile scoring application built with React Native. It is available on the Google Play Store.",
      problem: "/* EDITABLE: Describe what My Score helps users accomplish. */",
      role: "React Native developer implementing the application and supporting release.",
      solution:
        "Implemented the React Native application and supported release to Google Play.",
      challenges: "/* EDITABLE: Add challenges & solutions. */",
      outcome: "Published on Google Play.",
      screenshots: ["assets/images/projects/myscore.png"],
      companyNote: "Previously documented under Parallel Solution in the earlier portfolio.",
    },
    {
      id: "eviale",
      title: "eViale",
      category: ["mobile", "integrations", "business"],
      categoryLabel: "Business Application",
      image: "assets/images/projects/eviale.jpg",
      shortDescription:
        "Reminder-focused React Native app developed at Intellexal Solutions and published on Google Play.",
      technologies: ["React Native", "JavaScript", "Push Notifications", "Firebase"],
      features: [
        "Reminder workflows",
        "Notification-ready mobile UX",
        "Play Store release",
      ],
      integrations: ["Firebase", "Push Notifications"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.evialereminder",
      githubUrl: "",
      overview:
        "eViale is a reminder-focused mobile application I developed while working at Intellexal Solutions. The app is published on Google Play.",
      problem: "/* EDITABLE: Clarify the reminder/business problem eViale solves. */",
      role: "Mid-Level React Native Developer at Intellexal Solutions — feature development and production delivery.",
      solution:
        "Built the React Native application experience and supported production delivery on Android.",
      challenges: "/* EDITABLE: Add challenges & solutions (notifications, scheduling, etc.). */",
      outcome: "Published on Google Play.",
      screenshots: ["assets/images/projects/eviale.jpg"],
      companyNote: "Intellexal Solutions (verified on CV and previous portfolio).",
    },
    {
      id: "hylpers",
      title: "Hylpers",
      category: ["mobile", "business", "integrations"],
      categoryLabel: "Mobile Application",
      image: "assets/images/projects/hylpers.jpg",
      shortDescription:
        "React Native marketplace app to find trusted local help or earn by offering skills — live on Google Play.",
      technologies: ["React Native", "JavaScript", "REST APIs", "Maps & Location"],
      features: [
        "Find trusted local help",
        "Offer skills and earn",
        "Location-aware mobile experience",
        "Google Play release",
      ],
      integrations: ["REST APIs", "Maps & Location", "Google Play distribution"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.app.hylpers&hl=en",
      githubUrl: "",
      overview:
        "Hylpers helps people find trusted local help or earn by offering their skills — anytime, anywhere. The app is published on Google Play.",
      problem:
        "People need a reliable way to discover local help and offer their skills without complicated workflows.",
      role: "React Native developer contributing to the mobile application experience and Play Store delivery.",
      solution:
        "Delivered a cross-platform React Native client focused on discovering local help, offering skills, and supporting production Android release.",
      challenges:
        "/* EDITABLE: Add real technical challenges (matching, location, chat, payments, etc.) and how you solved them. */",
      outcome: "Live on Google Play.",
      screenshots: ["assets/images/projects/hylpers.jpg"],
      companyNote: "Published app — package id com.app.hylpers.",
    },
    {
      id: "walk-plus",
      title: "Walk Plus",
      category: ["mobile", "business", "integrations"],
      categoryLabel: "Health & Fitness",
      image: "assets/images/projects/walkplus.jpg",
      shortDescription:
        "Walking and wellness React Native app built at CMolds — track daily walks and build healthy habits. Live on Google Play.",
      technologies: ["React Native", "JavaScript", "Google Fit", "Apple HealthKit"],
      features: [
        "Daily walk tracking",
        "Progress-focused wellness habits",
        "Simple motivating mobile UX",
        "Google Play release",
      ],
      integrations: ["Google Fit", "Apple HealthKit", "Google Play distribution"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.cmolds.walkplus&hl=en",
      githubUrl: "",
      overview:
        "Walk Plus is a simple, motivating walking app designed to help users build healthy habits. Track daily walks and stay consistent with a progress-focused approach. Developed during my time at CMolds and published on Google Play.",
      problem:
        "Users need a pressure-free way to build walking habits and track daily progress for physical and mental wellness.",
      role: "React Native Developer at CMolds — feature development, health integrations, and production delivery.",
      solution:
        "Built the React Native walking experience with health/fitness sync support (aligned with Google Fit and Apple HealthKit work from my CMolds role) and supported the Play Store release.",
      challenges:
        "/* EDITABLE: Add challenges around health SDK sync, permissions, or tracking accuracy if you want more detail. */",
      outcome: "Live on Google Play (com.cmolds.walkplus).",
      screenshots: ["assets/images/projects/walkplus.jpg"],
      companyNote: "CMolds — package id com.cmolds.walkplus.",
    },
    {
      id: "syncedflow",
      title: "SyncdFlow",
      category: ["mobile", "business", "integrations"],
      categoryLabel: "Business Application",
      image: "assets/images/projects/syncedflow.jpg",
      shortDescription:
        "Fitness business management app for trainers — clients, sessions, payments, and reminders. Built at CMolds and live on Google Play.",
      technologies: ["React Native", "JavaScript", "REST APIs", "Payments"],
      features: [
        "Client and session management",
        "Booking and rescheduling workflows",
        "Payment and earnings tracking",
        "Real-time reminders and updates",
      ],
      integrations: ["REST APIs", "Payments", "Reminders", "Google Play distribution"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.cmolds.syncedflow&hl=en",
      githubUrl: "",
      overview:
        "SyncdFlow is an all-in-one fitness management app that helps personal trainers manage clients, training sessions, payments, and daily business workflow in one place. Developed at CMolds and published on Google Play.",
      problem:
        "Trainers often juggle schedules, messages, spreadsheets, and manual reminders — making client management and payments harder than they should be.",
      role: "React Native Developer at CMolds — building trainer/client mobile workflows and supporting production release.",
      solution:
        "Implemented React Native flows for session management, client updates, reminders, and payment/earnings visibility so trainers and clients stay organized in one app.",
      challenges:
        "/* EDITABLE: Add challenges around booking states, payments, or realtime reminders if you want more detail. */",
      outcome: "Live on Google Play (com.cmolds.syncedflow).",
      screenshots: ["assets/images/projects/syncedflow.jpg"],
      companyNote: "CMolds — package id com.cmolds.syncedflow.",
    },
  ],

  projectFilters: [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Applications" },
    { id: "business", label: "Business Applications" },
    { id: "integrations", label: "Integrations" },
  ],

  footerTagline: "Designed & Built with passion by Muhammad Muzammil.",
};
