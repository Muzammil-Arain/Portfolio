/**
 * Central site configuration — edit this file to update portfolio content.
 * Formspree: replace FORMSPREE_ENDPOINT with your form ID after signup.
 */
window.PORTFOLIO_CONFIG = {
  name: "Muhammad Muzammil",
  shortName: "Muzammil",
  title: "React Native Developer",
  experienceYears: 5,
  location: "Karachi, Pakistan",
  availability: "Available for freelance & full-time opportunities",
  availabilityAvailable: true,

  summary:
    "I am a React Native Developer with 5 years of professional experience building scalable, high-performance, and user-friendly mobile applications for Android and iOS. I specialize in React Native development, Firebase integration, REST APIs, payment gateways, third-party SDKs, and creating seamless mobile experiences.",

  heroHeadline: "Building Powerful Mobile Experiences with React Native.",
  heroDescription:
    "I'm a React Native Developer with 5 years of experience building scalable and user-friendly Android and iOS applications. I transform ideas into reliable digital products through clean code, modern technologies, and seamless integrations.",

  aboutSubheading: "Turning Ideas Into Meaningful Digital Experiences.",
  aboutText: [
    "With five years of hands-on experience, I specialize in cross-platform mobile application development using React Native — delivering polished Android and iOS apps from a single codebase.",
    "I build production-ready features with Firebase (Authentication, Firestore, Realtime Database, Cloud Functions), REST API integrations, Stripe payments & subscriptions, push notifications, Agora audio/video, and third-party SDKs — including native modules when needed.",
    "My focus is clean, maintainable code, strong performance, and thoughtful user experience so products feel reliable for end users and easy to evolve for teams.",
  ],

  profileImage: "assets/images/profile.jpg",
  aboutImage: "assets/images/about.jpg",
  resumePath: "assets/resume/Muhammad-Muzammil-CV.pdf",
  favicon: "assets/icons/favicon.jpg",

  contact: {
    email: "muzammilarain912@gmail.com",
    phone: "+923100012746",
    whatsapp: "923100012746",
    linkedin: "https://www.linkedin.com/in/muhammad-muzammil-2b9212217/",
    github: "https://github.com/Muzammil-Arain",
    facebook: "https://www.facebook.com/inoxent.muzammil.10/",
    twitter: "https://twitter.com/Muzammi78606416",
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
    title: "Muhammad Muzammil | React Native Developer — Mobile Apps for Android & iOS",
    description:
      "React Native Developer with 5 years of experience building scalable Android and iOS apps. Firebase, REST APIs, Stripe, push notifications, and third-party SDK integrations. Based in Karachi, Pakistan. Available for freelance and full-time roles.",
    url: "https://muzammilreact-ecce8.web.app/",
    ogImage: "assets/images/profile.jpg",
  },

  skills: [
    {
      category: "Mobile Development",
      icon: "smartphone",
      items: ["React Native", "JavaScript", "Android", "iOS"],
    },
    {
      category: "Backend & Database",
      icon: "database",
      items: [
        "Firebase Authentication",
        "Cloud Firestore",
        "Firebase Realtime Database",
        "Firebase Cloud Functions",
      ],
    },
    {
      category: "Integrations",
      icon: "plug",
      items: [
        "REST APIs",
        "Stripe Payments",
        "Stripe Subscriptions",
        "Push Notifications",
        "Agora SDK",
        "Third-party SDKs",
        "Native Modules",
      ],
    },
    {
      category: "Frontend",
      icon: "layout",
      items: ["HTML5", "CSS3", "Responsive Web Design"],
    },
  ],

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
        "Authentication, Firestore, Realtime Database, and Cloud Functions wired for reliability and real-world usage.",
    },
    {
      icon: "api",
      title: "REST API Integration",
      description:
        "Secure, efficient API consumption with solid error handling, loading states, and maintainable data layers.",
    },
    {
      icon: "credit-card",
      title: "Stripe Payment & Subscription Integration",
      description:
        "Payments and subscription flows implemented carefully for clarity, security, and a smooth checkout experience.",
    },
    {
      icon: "bell",
      title: "Push Notification Integration",
      description:
        "Engage users with timely notifications using Firebase Cloud Messaging and platform best practices.",
    },
    {
      icon: "video",
      title: "Agora Audio/Video Integration",
      description:
        "Real-time audio and video calling experiences powered by Agora, integrated into your React Native app.",
    },
    {
      icon: "puzzle",
      title: "Third-party SDK Integration",
      description:
        "Maps, analytics, chat, payments, and more — including native modules when a library needs a bridge.",
    },
    {
      icon: "wrench",
      title: "App Maintenance & Bug Fixing",
      description:
        "Stabilize existing apps with targeted fixes, dependency updates, and practical long-term maintenance.",
    },
    {
      icon: "gauge",
      title: "Mobile App Performance Optimization",
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
        "Define structure, navigation, data flow, and integrations for a maintainable React Native foundation.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "Implement features, APIs, Firebase, payments, and SDKs with clean, production-minded code.",
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
    { icon: "award", title: "5 Years of Professional Experience", text: "Proven delivery across real mobile products and production environments." },
    { icon: "code", title: "React Native Expertise", text: "Specialized in building scalable cross-platform apps with modern RN practices." },
    { icon: "devices", title: "Android & iOS Development", text: "Consistent quality on both platforms with attention to native feel." },
    { icon: "file-code", title: "Clean and Maintainable Code", text: "Readable architecture that teams can extend without friction." },
    { icon: "plug", title: "Firebase & API Integrations", text: "Comfortable wiring complex backends, auth, and third-party services." },
    { icon: "gauge", title: "Performance-Focused Development", text: "Optimized UI and data flows for smooth, responsive experiences." },
    { icon: "message", title: "Professional Communication", text: "Clear updates, practical recommendations, and collaborative delivery." },
    { icon: "check-circle", title: "Reliable Project Delivery", text: "Committed to timelines, quality, and shipping what was agreed." },
    { icon: "life-buoy", title: "Long-Term Support", text: "Available for maintenance, enhancements, and post-launch care." },
  ],

  /**
   * Experience entries extracted from the previous portfolio.
   * Update responsibilities/achievements with your real details as needed.
   */
  experience: [
    {
      company: "Intellexal Solutions",
      title: "Mobile App Developer",
      dates: "2024 — Present",
      location: "Karachi, Pakistan",
      technologies: ["React Native", "Firebase", "REST APIs", "Push Notifications"],
      responsibilities: [
        "Developing and maintaining React Native applications for Android and iOS.",
        "Integrating APIs, Firebase services, and third-party SDKs into production apps.",
        "Collaborating with the team to deliver reliable, user-friendly mobile experiences.",
        /* EDITABLE: Replace with your specific day-to-day responsibilities */
      ],
      achievements: [
        /* EDITABLE: Add measurable achievements when available */
        "Contributed to production apps including eViale (available on Google Play).",
      ],
    },
    {
      company: "Parallel Solution",
      title: "Jr Mobile App Developer",
      dates: "2022 — 2024",
      location: "Karachi, Pakistan",
      technologies: ["React Native", "Redux", "Firebase", "REST APIs", "Payment Gateways"],
      responsibilities: [
        "Built and shipped React Native features for client mobile applications.",
        "Worked with REST APIs, state management, and Firebase-backed workflows.",
        "Supported app releases and iterative improvements across multiple products.",
      ],
      achievements: [
        "Delivered apps published on Google Play including Dispute, Fit For All, Rapid Beauty, Sail, and My Score.",
      ],
    },
    {
      company: "Ayan Tech",
      title: "Web & Mobile App Development",
      dates: "2021 — 2022",
      location: "Karachi, Pakistan",
      technologies: ["React Native", "JavaScript", "HTML", "CSS"],
      responsibilities: [
        "Built foundational skills in web and mobile app development.",
        "Practiced UI implementation and cross-platform mobile workflows.",
        /* EDITABLE: Clarify whether this was employment, internship, or training */
      ],
      achievements: [],
    },
  ],

  education: [
    {
      title: "Commerce",
      institution: "Karachi Board",
      dates: "2018 — 2020",
    },
  ],

  /**
   * Genuine projects from the previous portfolio.
   * Screenshots preserved from existing assets / Play Store listings.
   * Expand case-study fields with your real details — do not invent clients.
   */
  projects: [
    {
      id: "dispute",
      title: "Dispute",
      category: ["mobile", "business"],
      categoryLabel: "Mobile Application",
      image: "assets/images/projects/dispute.jpg",
      shortDescription:
        "React Native mobile application developed at Parallel Solution and published on Google Play.",
      technologies: ["React Native", "JavaScript", "REST APIs"],
      features: [
        "Cross-platform Android release",
        "Production feature delivery",
        "Play Store distribution",
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.craftywebz.dispute",
      githubUrl: "",
      overview:
        "Dispute is a mobile application I developed while working at Parallel Solution. The app was built with React Native and released on the Google Play Store.",
      problem:
        "/* EDITABLE: Describe the product problem this app solved for users or the business. */",
      role: "React Native developer contributing to feature implementation and delivery at Parallel Solution.",
      solution:
        "Built and refined the React Native application for Android, integrating the required product flows and preparing the release for Google Play.",
      challenges:
        "/* EDITABLE: Note real technical challenges (API design, offline sync, payments, etc.) and how you solved them. */",
      screenshots: ["assets/images/projects/dispute.jpg"],
    },
    {
      id: "fit-for-all",
      title: "Fit For All",
      category: ["mobile", "business"],
      categoryLabel: "Mobile Application",
      image: "assets/images/projects/fitforall.jpg",
      shortDescription:
        "Fitness-focused React Native app developed at Parallel Solution and available on Google Play.",
      technologies: ["React Native", "JavaScript", "REST APIs"],
      features: [
        "Cross-platform mobile UI",
        "Client product delivery",
        "Google Play listing",
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.fitforall",
      githubUrl: "",
      overview:
        "Fit For All is a mobile application developed during my time at Parallel Solution and published on Google Play.",
      problem: "/* EDITABLE: Add the real problem statement for Fit For All. */",
      role: "React Native developer at Parallel Solution.",
      solution:
        "Implemented the React Native application experience and supported delivery of the Play Store release.",
      challenges: "/* EDITABLE: Document real challenges and solutions. */",
      screenshots: ["assets/images/projects/fitforall.jpg"],
    },
    {
      id: "rapid-beauty",
      title: "Rapid Beauty",
      category: ["mobile", "business"],
      categoryLabel: "Business Application",
      image: "assets/images/projects/rapid-beauty.jpg",
      shortDescription:
        "Beauty services mobile client app developed at Parallel Solution for Android users.",
      technologies: ["React Native", "JavaScript", "REST APIs"],
      features: [
        "Client-facing mobile experience",
        "Business service workflows",
        "Play Store release",
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.rapid.beauty.client",
      githubUrl: "",
      overview:
        "Rapid Beauty is a client mobile application I worked on at Parallel Solution, published on Google Play.",
      problem: "/* EDITABLE: Describe the business/user problem Rapid Beauty addressed. */",
      role: "React Native developer at Parallel Solution.",
      solution:
        "Delivered React Native features for the client application and supported production release.",
      challenges: "/* EDITABLE: Add technical challenges and how you solved them. */",
      screenshots: ["assets/images/projects/rapid-beauty.jpg"],
    },
    {
      id: "sail",
      title: "Sail",
      category: ["mobile", "integrations"],
      categoryLabel: "Mobile Application",
      image: "assets/images/projects/sail.jpg",
      shortDescription:
        "React Native application developed at Parallel Solution and listed on Google Play.",
      technologies: ["React Native", "JavaScript", "REST APIs"],
      features: [
        "Cross-platform mobile app",
        "API-driven screens",
        "Published Android build",
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.reactjssail",
      githubUrl: "",
      overview:
        "Sail is a React Native project delivered while working at Parallel Solution and available on Google Play.",
      problem: "/* EDITABLE: Add Sail's problem statement. */",
      role: "React Native developer at Parallel Solution.",
      solution:
        "Built application features in React Native and contributed to the shipped Play Store version.",
      challenges: "/* EDITABLE: Add challenges & solutions. */",
      screenshots: ["assets/images/projects/sail.jpg"],
    },
    {
      id: "my-score",
      title: "My Score",
      category: ["mobile", "business"],
      categoryLabel: "Mobile Application",
      image: "assets/images/projects/myscore.png",
      shortDescription:
        "Score-tracking mobile app developed at Parallel Solution and published on Google Play.",
      technologies: ["React Native", "JavaScript", "Firebase"],
      features: [
        "Mobile scoring experience",
        "Production React Native delivery",
        "Google Play distribution",
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.my_score",
      githubUrl: "",
      overview:
        "My Score is a mobile application I developed at Parallel Solution. It is available on the Google Play Store.",
      problem: "/* EDITABLE: Describe what My Score helps users accomplish. */",
      role: "React Native developer at Parallel Solution.",
      solution:
        "Implemented the React Native application and supported release to Google Play.",
      challenges: "/* EDITABLE: Add challenges & solutions. */",
      screenshots: ["assets/images/projects/myscore.png"],
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
      liveUrl: "https://play.google.com/store/apps/details?id=com.evialereminder",
      githubUrl: "",
      overview:
        "eViale is a mobile application I developed while working at Intellexal Solutions. The app is published on Google Play.",
      problem: "/* EDITABLE: Clarify the reminder/business problem eViale solves. */",
      role: "Mobile App Developer at Intellexal Solutions.",
      solution:
        "Built the React Native application experience and supported production delivery on Android.",
      challenges: "/* EDITABLE: Add challenges & solutions (notifications, scheduling, etc.). */",
      screenshots: ["assets/images/projects/eviale.jpg"],
    },
  ],

  /**
   * Testimonials: leave empty for a clean empty state, or add only genuine quotes.
   * Never fabricate client feedback.
   */
  testimonials: [
    // Example shape (uncomment and replace with real testimonials only):
    // {
    //   name: "Client Name",
    //   role: "Role / Company",
    //   quote: "Genuine feedback goes here.",
    // },
  ],

  projectFilters: [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Applications" },
    { id: "business", label: "Business Applications" },
    { id: "integrations", label: "Integrations" },
  ],

  footerTagline: "Designed & Built with passion by Muhammad Muzammil.",
};
