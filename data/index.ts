import { Code, Database, Globe, Server } from "lucide-react";

export const skills = [
  // Programming Languages
  { name: "JavaScript", icon: Code, level: 95 },
  { name: "TypeScript", icon: Code, level: 90 },
  { name: "Python", icon: Code, level: 80 },
  { name: "Java", icon: Code, level: 75 }, // Intermediate
  { name: "SQL", icon: Database, level: 75 }, // Intermediate

  // Frameworks & Libraries
  { name: "React", icon: Code, level: 95 },
  { name: "Next.js", icon: Globe, level: 75 }, // Intermediate
  { name: "Node.js", icon: Server, level: 85 },

  // Databases & Backend Tools
  { name: "MongoDB", icon: Database, level: 80 },
  { name: "PostgreSQL", icon: Database, level: 75 }, // Intermediate
  { name: "Cloudinary", icon: Server, level: 80 },

  // Other Skills
  { name: "IoT", icon: Code, level: 75 }, // Intermediate
  { name: "Docker", icon: Server, level: 60 }, // Beginner
];

export const projects = [
  {
    title: "Airly-Blogging Platform",
    description:
      "Airly is a full-stack, image-based social media web application inspired by Pinterest, built to explore scalable system design and modern web development practices. The platform allows users to upload and share images, like and comment on posts, manage personalized profiles, and discover trending content through a smart ranking algorithm that prioritizes meaningful engagement over simple popularity. It features a dedicated user dashboard for managing posts, profile details, and interactions, along with an admin dashboard that enables content moderation, user management, and platform oversight. Airly is built with a performance-optimized backend using Node.js, Express, and MongoDB, leveraging aggregation pipelines, indexing, and secure JWT-based authentication, while the frontend is developed with React, TypeScript, Tailwind CSS, and Redux Toolkit to deliver a clean, responsive, and intuitive user experience.",
    tech: [
      "React.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Cloudinary",
      "Node.js",
    ],
    github: "https://github.com/swayam03275/Airly",
    live: "https://airly-gamma.vercel.app",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
    title: "AI Resume Builder",
    description:
      "AI Resume Builder is a modern, AI-powered web application designed to help users create professional, ATS-friendly resumes with ease. The platform offers a guided, step-by-step resume builder with real-time preview, multiple professionally designed templates, customizable color themes, and profile photo support, ensuring both flexibility and visual polish. It integrates AI-assisted content generation to help users craft impactful summaries, work experience, and project descriptions, along with real-time ATS score analysis and actionable feedback to improve resume compatibility with hiring systems. Users can securely sign up and manage their resumes through a personalized dashboard, save and edit multiple resumes in the cloud, and export print-optimized PDFs with a single click. Built with a responsive, animation-enhanced frontend and a secure, scalable backend using JWT authentication, the application focuses on usability, performance, and delivering a smooth end-to-end resume creation experience.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Gemini API",
    ],
    github: "https://github.com/swayam03275/ai-resumee",
    live: "https://ai-resumee-sand.vercel.app",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },

  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a responsive design.",
    tech: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    github: "https://github.com/swayam03275/minimal-portfolio",
    live: "https://minimal-portfolio-dusky-pi.vercel.app",
    image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400",
  },
  {
  "title": "SmartAgricare AI — Intelligent IoT Agriculture Monitoring Platform",
  "description": "AI-powered IoT agriculture monitoring platform that collects real-time farm data from ESP8266 sensors and analyzes it using Gemini AI to generate crop care, irrigation, and environmental risk recommendations. Features live sensor streaming, automated alerts, and a secure farmer dashboard.",
  "tech": [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "ESP8266",
    "Google Gemini AI"
  ],
  "github": "https://github.com/your-repo",
  "live": "https://your-live-link.com",
   image: "/placeholder.svg?height=200&width=400",
    image_dark: "/placeholder.dark.svg?height=200&width=400"
},
];

export const experience = [
  {
    title: "Virtual Intern – Web Development (MERN)",
    company: "IBM SkillsBuild (Virtual Internship Program)",
    period: "45 Days",
    location: "Remote",
    description:
      "Completed an intensive virtual internship focused on full-stack web development using the MERN stack. Built a YouTube-like video sharing platform with user authentication, video uploads, likes, comments, and responsive UI.",
    achievements: [
      "Developed a full-stack video sharing platform using MongoDB, Express, React, and Node.js",
      "Implemented secure authentication and RESTful APIs",
      "Gained hands-on experience in scalable backend and modern frontend practices",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code 2025 (GSSoC)",
    period: "3 Months",
    location: "Remote",
    description:
      "Selected as a contributor for a large-scale open-source program, actively contributing to multiple projects through feature development, bug fixes, and code optimization.",
    achievements: [
      "Ranked among the Top 5 contributors in the program",
      "Successfully merged 150+ pull requests",
      "Collaborated with mentors and contributors across multiple repositories",
    ],
  },
];
