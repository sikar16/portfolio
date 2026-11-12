// Using public folder path for profile image
const avatar = "/profile.jpeg";

export const profile = {
  name: "Sikar Yosef",
  titles: ["Software Engineer", "Full-Stack Developer", "Mobile App Developer (Flutter)", "UI/UX Enthusiast", "AI and ML Enthusiast"],
  bio: "Software Engineer with 1+ year of hands-on production experience across the full stack — React/Next.js on the web, Node.js/Express and PostgreSQL/MySQL on the backend, and Flutter on mobile. I've owned and delivered business-critical systems end to end, including an AI-powered enterprise knowledge platform, an automated performance evaluation engine, and a training management mobile app, turning ideas into scalable, user-focused products from concept to deployment.",
  location: "Addis Ababa, Ethiopia",
  email: "sikarmahi6123@gmail.com",
  phone: "+251 963 797 062",
  github: "https://github.com/sikar16",
  linkedin: "https://www.linkedin.com/in/sikar-yosef",
  avatar,
};

export const stats = [
  { icon: "fa-briefcase", value: "1+", label: "Years Coding" },
  { icon: "fa-diagram-project", value: "5+", label: "Projects Built" },
  { icon: "fa-code", value: "20+", label: "Technologies" },
  { icon: "fa-building", value: "2", label: "Industry Internships" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "fa-laptop-code",
    skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Bootstrap", "Redux / RTK Query", "Responsive Design"],
  },
  {
    title: "Mobile & Backend",
    icon: "fa-mobile-screen-button",
    skills: ["Flutter (BLoC / Provider)", "Clean Architecture", "Firebase / FCM", "Node.js", "Express.js", "NestJS", "REST APIs", "Session & JWT Auth", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & AI",
    icon: "fa-toolbox",
    skills: ["Git & GitHub", "Figma", "ChromaDB (Vector DB)", "Ollama / AI Agents", "Postman", "Insomnia", "Agile / Scrum", "Flutter Test", "Vector Search"],
  },
];

export const projects = [
  {
    name: "iCog Assistant",
    category: "Web App",
    desc: "AI-powered internal knowledge assistant (Gheero) letting employees query company documentation in natural language, with ChromaDB semantic search and Ollama-driven context-aware answers.",
    tech: ["Next.js", "PostgreSQL", "ChromaDB", "Ollama"],
    hue: "from-[#64ffda] to-[#0ea5e9]",
    github: "",
    sampleImage: "/files/projects/assistant.png",
  },
  {
    name: "Gheero Trainee Application",
    category: "Mobile App",
    desc: "Training management mobile app for Gheero: dynamic modules for trainings, sessions and cohorts, with trainee attendance tracking and assessment evaluation.",
    tech: ["Flutter", "BLoC", "Clean Architecture"],
    hue: "from-[#38bdf8] to-[#a78bfa]",
    github: "",
    sampleImage: "/files/projects/trainee.png",
  },
  {
    name: "Gheero Web Platform",
    category: "Web App",
    desc: "Corporate web platform for Gheero: pixel-perfect, responsive pages built from Framer designs with a reusable component system focused on speed and accessibility.",
    tech: ["Next.js", "Shadcn UI", "React"],
    hue: "from-[#fb7185] to-[#64ffda]",
    github: "",
    sampleImage: "/files/projects/gheero_web.png",
  },
  {
    name: "Ethio-Smart ServiceLink",
    category: "Mobile App · Final Year Project",
    desc: "Final year project — a cross-platform app connecting clients with verified skilled workers across Ethiopia, with real-time requests, role-based flows and push notifications.",
    tech: ["Flutter", "BLoC", "Firebase", "NestJS"],
    hue: "from-[#a78bfa] to-[#64ffda]",
    github: "https://github.com/sikar16/ethio_smart_service_link_mobile",
    sampleImage: "/files/projects/fyp.png",
  },
  {
    name: "Inventory & Material Request",
    category: "Web App",
    desc: "Full-stack inventory management system with role-based access, material request workflows and live stock tracking, built during the BlueSpark internship.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    hue: "from-[#f59e0b] to-[#64ffda]",
    github: "https://github.com/sikar16/Inventory_managment_system_bluespark",
    sampleImage: "/files/projects/bluespark.jpg",
  },
  {
    name: "Performance Report Generator",
    category: "Web App",
    desc: "AI system that auto-generates structured employee and department performance reports from raw task, challenge and milestone data using company-defined rubrics.",
    tech: ["React", "Node.js", "Ollama", "PostgreSQL"],
    hue: "from-[#f472b6] to-[#64ffda]",
    github: "",
    sampleImage: "/files/projects/performane.png",
  },
  {
    name: "Immunization Monitoring",
    category: "Web App",
    desc: "Responsive infant immunization monitoring platform with full requirement gathering, UI design and frontend-to-backend integration.",
    tech: ["React", "Tailwind", "Express", "MySQL"],
    hue: "from-[#34d399] to-[#64ffda]",
    github: "https://github.com/naolleg/cbtp_phase_4/",
    sampleImage: "/files/projects/cbtp.png",
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Gheero",
    period: "Apr 2025 – Present",
    points: [
      "Built the iCog Assistant, an internal RAG platform (Next.js, PostgreSQL, ChromaDB, Ollama) enabling employees to query company documentation through natural language with sub-second, context-aware answers.",
      "Developed the AI Performance Report Generator, a full-stack tool that transforms raw employee task logs into rubric-based performance summaries with custom date-range and department filtering.",
      "Contributed to the Gheero Trainer Application, a Flutter mobile app using Clean Architecture and BLoC for training, session and cohort management with attendance tracking.",
      "Worked as frontend developer on the Gheero Web Platform, translating Framer designs into pixel-perfect, responsive Next.js pages with Shadcn UI and reusable React components.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "BlueSpark Business & Technology Solution Plc",
    period: "Jul 2024 – Oct 2024",
    points: [
      "Led end-to-end development of an Inventory & Material Request system (React, Node.js, Express, MySQL) to automate procurement workflows and real-time stock tracking.",
      "Designed relational database schemas with Prisma ORM and implemented JWT authentication with fine-grained Role-Based Access Control (RBAC).",
      "Engineered modular, reusable UI components integrated with asynchronous REST endpoints for smooth front-to-back data exchange.",
    ],
  },
];

export const services = [
  { icon: "fa-code", title: "Frontend Development", desc: "Pixel-perfect, responsive interfaces with React, Next.js and Tailwind CSS." },
  { icon: "fa-mobile-screen", title: "Mobile App Development", desc: "Cross-platform Android & iOS apps with Flutter, Firebase and Clean Architecture." },
  { icon: "fa-pen-ruler", title: "UI/UX Design", desc: "Wireframes and prototypes in Figma turned into intuitive, accessible products." },
  { icon: "fa-plug", title: "API Integration", desc: "Robust REST API integration with secure auth and efficient state management." },
];

export const testimonials = [
  { name: "Mr. Abreham", role: "Team Lead, Gheero", quote: "Sikar owns features end to end across our AI knowledge platform, mobile app and web pages — sharp problem solver who picked up ChromaDB and Ollama fast and shipped genuinely useful tools.", rating: 5 },
  { name: "Mr. Yalew Tenaw", role: "Team Lead, BlueSpark Business & Technology", quote: "Sikar led the full stack of our inventory system and delivered a reliable, scalable product with clean, well-structured code.", rating: 5 },
  { name: "Alemisa Endebu (MSc)", role: "Software Department Coordinator, Jimma University", quote: "Reliable, communicative and detail-oriented, with consistently strong engineering fundamentals.", rating: 5 },
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
  gpa: "3.7 / 4.0",
  courses: ["Requirement Engineering", "Software Architecture Design", "Database Design & Management", "Web Development", "Software Design Principles"],
};