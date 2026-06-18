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
    name: "Web E-Commerce",
    tag: "Web",
    stack: ["React 19", "Vite", "Tailwind CSS v4", "Express", "Docker"],
    description:
      "Full-stack e-commerce web app with a React 19 + Vite + Tailwind CSS v4 frontend, an Express backend, and Dockerized deployment.",
    githubUrl: "https://github.com/SengathitBannavong/Web-E-commerce",
  },
  {
    name: "Hospital App",
    tag: "Mobile",
    stack: ["Flutter", "Dart", "Riverpod", "GoRouter"],
    description:
      "Cross-platform hospital app built with Flutter and Riverpod, with GoRouter navigation. Released for iOS via AltStore sideloading on Windows, built and signed through GitHub Actions.",
    githubUrl: "https://github.com/SengathitBannavong/hospital-app",
  },
  {
    name: "Thread Pooling",
    tag: "Systems",
    meta: "HUST · Project 2",
    stack: ["C11", "POSIX Threads", "ncurses"],
    description:
      "Priority-scheduled thread pool in C11 with task aging, pause/resume, graceful shutdown, and an ncurses monitor. Fixed a Dekker race with seq_cst ordering; HTTP benchmark improved p99 latency 22–28% with peak threads of 17 vs 200+ in a naive baseline.",
    githubUrl: "https://github.com/SengathitBannavong/thread_pooling",
  },
  {
    name: "Jtodo",
    tag: "Desktop",
    meta: "HUST · Project 1",
    stack: ["C#", "WPF", ".NET"],
    description:
      "Desktop to-do application built with C#, WPF, and .NET following the MVVM architecture pattern.",
    githubUrl: "https://github.com/SengathitBannavong/Jtodo",
  },
  {
    name: "Website Order in Restaurant",
    tag: "Web",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Full-stack restaurant ordering web app with a React frontend and a Node.js, Express, and MongoDB backend.",
    githubUrl: "https://github.com/SengathitBannavong/Website_Order_in_Restaurant",
  },
  {
    name: "Recognized Vietnam Sentence",
    tag: "ML/NLP",
    stack: ["Python", "PyTorch", "CRAFT", "CRNN", "Flask"],
    description:
      "End-to-end OCR pipeline for Vietnamese text recognition combining CRAFT detection and a CRNN recognizer in PyTorch, served through Flask.",
    githubUrl: "https://github.com/SengathitBannavong/Recognized-Vietnam-Sentence",
  },
  {
    name: "NLP TF-IDF Naive Bayes",
    tag: "ML/NLP",
    stack: ["C11", "CMake"],
    description:
      "Text classifier written from scratch in pure C11 with no external libraries — custom sparse matrix, string interning, and TF-IDF + Naive Bayes, verified leak-free with Valgrind.",
    githubUrl: "https://github.com/SengathitBannavong/NLP_TFIDF_NaiveBayes_From_C",
  },
  {
    name: "A Better World",
    tag: "Game",
    meta: "HUST · OOP · Group project",
    stack: ["Java", "AWT/Swing"],
    description:
      "Full 2D RPG built in Java with AWT/Swing and no game engine — custom rendering, AI, collision detection, story state, and a class hierarchy designed from scratch.",
    githubUrl: "https://github.com/SengathitBannavong/A-Better-World",
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
