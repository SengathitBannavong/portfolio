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
    { label: "Status", value: "On intern with Analox", live: true },
  ],
  footer: "Built with React, semantic HTML, and quiet interactions.",
};

export const projects = [
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
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    title: "Systems & Low-level",
    skills: [
      { name: "C/C++", icon: "cplusplus" },
      { name: "Java", icon: "openjdk" },
      { name: "Python", icon: "python" },
      { name: "Rust (learning)", icon: "rust" },
      { name: "POSIX Threads", icon: "code" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
      { name: "WSL2", icon: "windows" },
      { name: "VS Code", icon: "vscode" },
      { name: "JetBrains", icon: "jetbrains" },
      { name: "Figma", icon: "figma" },
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
    label: "GitHub",
    value: "github.com/SengathitBannavong",
    href: "https://github.com/SengathitBannavong",
  },
];
