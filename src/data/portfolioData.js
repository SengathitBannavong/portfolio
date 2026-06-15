export const site = {
  name: "Seng Athit Bannavong",
  roles: "Computer Science Student, Full Stack Developer, and Systems Programmer.",
  bio: "Computer Science student at Hanoi University of Science and Technology with hands-on experience in systems programming and full-stack web development.",
  githubUrl: "https://github.com/SengathitBannavong",
  kicker: "Full Stack · Systems · Kernel",
  meta: [
    { label: "Location", value: "Hanoi, Vietnam" },
    { label: "Studying", value: "CS · HUST" },
    { label: "Focus", value: "Systems + Full-stack" },
    { label: "Status", value: "Open to work", live: true },
  ],
  footer: "Built with React, semantic HTML, and quiet interactions.",
};

export const projects = [
  {
    name: "Text Classification using TF-IDF and Naive Bayes",
    stack: ["C", "NLP", "Multithreading"],
    description:
      "Built a complete NLP text classifier from scratch in C with no external ML libraries, including TF-IDF, Naive Bayes, sparse matrix handling, and multithreaded preprocessing.",
    githubUrl: "https://github.com/SengathitBannavong/NLP_TFIDF_NaiveBayes_From_C",
  },
  {
    name: "Thread Pool + Priority Task Scheduler",
    stack: ["C", "POSIX Threads", "TSAN"],
    description:
      "Implemented a thread-safe priority queue and worker pool with graceful shutdown, blocking and non-blocking operations, and clean concurrency tests integrated with ThreadSanitizer.",
    githubUrl: "https://github.com/SengathitBannavong/thread_pooling",
  },
  {
    name: "Transcript Viewer",
    stack: ["C", "Raylib", "SQLite3"],
    description:
      "Desktop transcript viewer built in C with Clay UI, charts, command palette, and 49 unit tests covering GPA, credit, and graduation logic across Linux and Windows.",
    githubUrl: "https://github.com/SengathitBannavong/Transcript-Viewer",
  },
  {
    name: "Vietnamese Text Recognition System",
    stack: ["Python", "CRNN", "Flask"],
    description:
      "Built an end-to-end OCR pipeline for Vietnamese text using CRNN with synthetic data generation, LMDB preprocessing, Colab GPU training, and Flask inference deployment.",
    githubUrl: "https://github.com/SengathitBannavong/Recognized-Vietnam-Sentence",
  },
  {
    name: "Web E-Commerce Platform",
    stack: ["React", "Express", "PostgreSQL"],
    description:
      "Developed a full-stack bookstore platform with React frontend, Express backend, PostgreSQL and Redis, Dockerized deployment, and CI/CD in a team of three.",
    githubUrl: "https://github.com/SengathitBannavong/Web-E-commerce",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react", color: "#61dafb" },
      { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
      { name: "HTML5", icon: "html5", color: "#e34f26" },
      { name: "CSS3", icon: "css", color: "#1572b6" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs", color: "#5fa04e" },
      { name: "Express", icon: "express", color: "#d1d5db" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169e1" },
      { name: "MySQL", icon: "mysql", color: "#4479a1" },
      { name: "Redis", icon: "redis", color: "#dc382d" },
    ],
  },
  {
    title: "Systems & Low-level",
    skills: [
      { name: "C/C++", icon: "cplusplus", color: "#00599c" },
      { name: "Java", icon: "openjdk", color: "#ea2d2e" },
      { name: "Python", icon: "python", color: "#3776ab" },
      { name: "Rust (learning)", icon: "rust", color: "#b66a45" },
      { name: "POSIX Threads", icon: "code", color: "#93a1b8" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git", color: "#f05032" },
      { name: "Docker", icon: "docker", color: "#2496ed" },
      { name: "Linux", icon: "linux", color: "#fcc624" },
      { name: "WSL2", icon: "windows", color: "#0078d4" },
      { name: "VS Code", icon: "vscode", color: "#007acc" },
      { name: "JetBrains", icon: "jetbrains", color: "#f35af0" },
      { name: "Figma", icon: "figma", color: "#f24e1e" },
    ],
  },
];

export const contacts = [
  {
    label:"University Email",
    value: "bannavong.sa239717@sis.hust.edu.vn",
    href: "mailto:bannavong.sa239717@sis.hust.edu.vn",
  },
  {
    label: "Email",
    value: "teamblackextra@gmail.com",
    href: "mailto:teamblackextra@gmail.com",
  },
  {
    label: "Phone",
    value: "+84 857 472 506",
    href: "tel:+84857472506",
  },
  {
    label: "GitHub",
    value: "github.com/SengathitBannavong",
    href: "https://github.com/SengathitBannavong",
  },
];
