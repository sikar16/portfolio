import avatar from "../assets/profile.jpg";

export const profile = {
  name: "Sikar Yosef",
  titles: ["Frontend Developer", "Full-Stack Developer", "Mobile App Developer", "UI/UX Enthusiast","AI and ML Enthusiast"],
bio: "Software Engineering graduate passionate about building full-stack web and mobile applications. Experienced with React, Next.js, Flutter, Node.js, PostgreSQL, and modern UI development, creating scalable, user-focused solutions from concept to deployment. ",
  location: "Addis Ababa, Ethiopia",
  email: "sikarmahi6123@gmail.com",
  phone: "+251 963 797 062",
  github: "https://github.com/sikar16",
  linkedin: "https://www.linkedin.com/in/sikar-yosef-409821289",
  avatar,
};

export const stats = [
  { icon: "fa-briefcase", value: "1+", label: "Years Coding" },
  { icon: "fa-diagram-project", value: "4+", label: "Projects Built" },
  { icon: "fa-code", value: "20+", label: "Technologies" },
  { icon: "fa-building", value: "3", label: "Industry Internships"},
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "fa-laptop-code",
    skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Redux / RTK Query", "jQuery", "Responsive Design"],
  },
  {
    title: "Mobile & Backend",
    icon: "fa-mobile-screen-button",
    skills: ["Flutter (BLoC)", "Firebase / FCM", "Node.js", "Express.js", "NestJS", "REST APIs", "PostgreSQL", "MySQL", "Push Notifications"],
  },
  {
    title: "Tools & AI",
    icon: "fa-toolbox",
    skills: ["Git & GitHub", "Figma", "ChromaDB", "Ollama / AI Agents", "Agile / Scrum", "Cross-Browser Testing", "Flutter Test", "Vector Search"],
  },
];

export const projects = [
  {
    name: "iCog Assistant",
    category: "Web App",
    desc: "AI-powered company knowledge assistant letting employees query onboarding docs in natural language with semantic search and context-aware answers.",
    tech: ["Next.js", "PostgreSQL", "ChromaDB", "Ollama"],
    hue: "from-[#64ffda] to-[#0ea5e9]",
    github:"",
    sampleImage:""

  },
  {
    name: "Ethio-Smart ServiceLink",
    category: "Mobile App",
    desc: "Cross-platform app connecting clients with verified skilled workers across Ethiopia. Real-time requests, role-based flows and push notifications.",
    tech: ["Flutter", "BLoC", "Firebase", "NestJS"],
    hue: "from-[#a78bfa] to-[#64ffda]",
    github:"https://github.com/sikar16/ethio_smart_service_link_mobile",
    sampleImage:"/files/projects/fyp.png"
  },
  {
    name: "Inventory & Material Request",
    category: "Web App",
    desc: "Full-stack inventory management system with role-based access, material request workflows and live stock tracking built during the BlueSpark internship.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    hue: "from-[#f59e0b] to-[#64ffda]",
    github:"https://github.com/sikar16/Inventory_managment_system_bluespark",
    sampleImage:"/files/projects/bluespark.jpg"
  },
  {
    name: "SMS Management System",
    category: "Web App",
    desc: "Bulk & individual SMS platform integrated with AfroSMS for real-time delivery, analytics dashboards and an admin panel with per-user limits.",
    tech: ["Next.js", "RTK Query", "AfroSMS"],
    hue: "from-[#64ffda] to-[#22d3ee]",
    github:"",
    sampleImage:""
  },
  {
    name: "Performance Report Generator",
    category: "Web App",
    desc: "AI system that auto-generates structured employee and department performance reports from task data using company-defined formats.",
    tech: ["React", "Node.js", "Ollama", "PostgreSQL"],
    hue: "from-[#f472b6] to-[#64ffda]",
    github:"",
    sampleImage:""
  },
  {
    name: "Immunization Monitoring",
    category: "Web App",
    desc: "Responsive infant immunization monitoring platform with full requirement gathering, UI design and frontend-to-backend integration.",
    tech: ["React", "Tailwind", "Express", "MySQL"],
    hue: "from-[#34d399] to-[#64ffda]",
    github:"https://github.com/naolleg/cbtp_phase_4/",
    sampleImage:"/files/projects/cbtp.png"
  },
];

export const experience = [
  {
    role: "Mobile Application Developer",
    company: "Ethio-Smart ServiceLink",
    period: "2025",
    points: [
      "Built a cross-platform Flutter app with role-based navigation for Clients and Taskers.",
      "Integrated Firebase Cloud Messaging for real-time booking and payment notifications.",
      "Connected the app to a NestJS REST API using the BLoC state management pattern.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "iCog Assistant",
    period: "2025",
    points: [
      "Developed an AI knowledge assistant with Next.js, PostgreSQL and ChromaDB.",
      "Implemented secure authentication and session management for concurrent users.",
      "Used Ollama for context-aware response generation over vectorized documents.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "BlueSpark Business & Technology",
    period: "2024",
    points: [
      "Led an inventory & material request system using React, Node.js and Express.",
      "Implemented authentication and role-based access control for secure operations.",
      "Handled code reviews, debugging and version control across the project.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "The Prodigy Internship",
    period: "2024",
    points: [
      "Developed responsive web apps with React and Tailwind CSS.",
      "Designed and implemented reusable frontend UI components.",
      "Optimized frontend performance and cross-browser compatibility.",
    ],
  },
];

export const services = [
  { icon: "fa-code", title: "Frontend Development", desc: "Pixel-perfect, responsive interfaces with React, Next.js and Tailwind CSS." },
  { icon: "fa-mobile-screen", title: "Mobile App Development", desc: "Cross-platform Android & iOS apps with Flutter, Firebase and clean architecture." },
  { icon: "fa-pen-ruler", title: "UI/UX Design", desc: "Wireframes and prototypes in Figma turned into intuitive, accessible products." },
  { icon: "fa-plug", title: "API Integration", desc: "Robust REST API integration with secure auth and efficient state management." },
];

export const testimonials = [
  { name: "Project Lead", role: "BlueSpark Business & Technology", quote: "Sikar owned the full stack of our inventory system and delivered a reliable, scalable product ahead of schedule.", rating: 5 },
  { name: "Team Mentor", role: "iCog Labs", quote: "Sharp problem solver who picked up ChromaDB and Ollama fast and shipped a genuinely useful AI assistant.", rating: 5 },
  { name: "Internship Supervisor", role: "The Prodigy", quote: "Reliable, communicative and detail-oriented. His frontend work consistently raised the quality bar.", rating: 5 },
];

export const articles = [
  { title: "Building Semantic Search with ChromaDB & Ollama", date: "Mar 2025", category: "AI", excerpt: "How I wired a local vector database to an LLM to answer questions over company docs." },
  { title: "Clean Mobile Architecture with Flutter BLoC", date: "Jan 2025", category: "Mobile", excerpt: "Separating business logic from UI for maintainable, testable cross-platform apps." },
  { title: "Mastering Responsive Design in Tailwind", date: "Nov 2024", category: "Frontend", excerpt: "Practical patterns I use to ship layouts that survive every screen size." },
];

export const education = {
  degree: "B.Sc. in Software Engineering",
  school: "Jimma University, Ethiopia",
  period: "May 2022 – June 2026",
  courses: ["Requirement Engineering", "Software Architecture Design", "Database Design & Management", "Web Development", "Software Design Principles"],
};
