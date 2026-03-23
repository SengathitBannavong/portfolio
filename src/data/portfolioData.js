export const site = {
  name: "Seng Athit Bannavong",
  roles: "Computer Science Student, Full Stack Developer, and Systems Programmer.",
  bio: "Computer Science student at Hanoi University of Science and Technology with hands-on experience in systems programming and full-stack web development. I build practical software from C-based concurrency tools and OCR pipelines to React and Node.js applications.",
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
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Systems & Low-level",
    skills: ["C/C++", "Java", "Python", "Rust (learning)", "POSIX Threads"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Linux", "WSL2", "VS Code", "JetBrains", "Figma"],
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
