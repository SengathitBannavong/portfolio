import {
    FaArrowDown,
    FaArrowUpRightFromSquare,
    FaGithub,
    FaMoon,
    FaSun,
} from "react-icons/fa6";
import ContactItem from "./components/ContactItem";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import SkillGroup from "./components/SkillGroup";
import { CurvedArrow } from "./components/Sketch";
import { contacts, projects, site, skillGroups } from "./data/portfolioData";

const pad = (n) => String(n).padStart(2, "0");

function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    const dark =
        current === "dark" ||
        (!current && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
        localStorage.setItem("theme", next);
    } catch {
        // private mode: theme just won't persist
    }
}

function App() {
    const year = new Date().getFullYear();

    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to content
            </a>

            <header className="site-header">
                <a className="nameplate" href="#hero">
                    <svg
                        className="mark"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path
                            d="M4 7 C 8 3, 17 4, 20 8 S 18 19, 12 20 S 3 15, 5 9"
                            fill="none"
                            stroke="var(--sk-red)"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                        />
                    </svg>
                    Seng Athit Bannavong
                </a>
                <nav aria-label="Primary" className="sk-row nav-links">
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                    <button
                        type="button"
                        className="sk-btn theme-btn"
                        onClick={toggleTheme}
                        aria-label="Toggle light / dark theme"
                    >
                        <FaSun aria-hidden="true" focusable="false" />
                        <span aria-hidden="true">/</span>
                        <FaMoon aria-hidden="true" focusable="false" />
                    </button>
                </nav>
            </header>

            <main id="main-content" className="sk-page">
                <section
                    className="sk-section"
                    id="hero"
                    aria-labelledby="hero-title"
                >
                    <div className="hero sk-wide">
                        <div className="hero-copy">
                            <p className="kicker">// {site.kicker}</p>
                            <h1 id="hero-title">{site.name}</h1>
                            <p className="lede">{site.roles}</p>
                            <p className="bio">{site.bio}</p>
                            <div className="sk-row cta-row">
                                <CurvedArrow className="cta-arrow" />
                                <a className="sk-btn btn" href="#projects">
                                    <span>View Projects</span>
                                    <FaArrowDown
                                        className="inline-icon"
                                        aria-hidden="true"
                                        focusable="false"
                                    />
                                </a>
                                <a
                                    className="sk-btn btn"
                                    href={site.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub
                                        className="inline-icon"
                                        aria-hidden="true"
                                        focusable="false"
                                    />
                                    <span>GitHub</span>
                                    <FaArrowUpRightFromSquare
                                        className="inline-icon"
                                        aria-hidden="true"
                                        focusable="false"
                                    />
                                </a>
                            </div>
                        </div>

                        <aside
                            className="sk-box sk-box--alt sk-tilt-r id-card"
                            aria-label="Profile summary"
                        >
                            <img
                                className="id-photo"
                                src="https://res.cloudinary.com/dskodfe9c/image/upload/v1768536235/bckamzijnf1gm2vzz4k7.png"
                                alt={`${site.name} profile photo`}
                                loading="eager"
                                decoding="async"
                                fetchpriority="high"
                            />
                            <dl className="sk-kv">
                                {site.meta.map((entry) => (
                                    <div key={entry.label} className="kv-row">
                                        <dt>{entry.label}</dt>
                                        <dd>
                                            {entry.live ? (
                                                <span
                                                    className="status-dot"
                                                    aria-hidden="true"
                                                />
                                            ) : null}
                                            {entry.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </aside>
                    </div>
                </section>

                <section
                    className="sk-section"
                    id="projects"
                    aria-labelledby="projects-title"
                >
                    <SectionHeading
                        id="projects-title"
                        index="01"
                        title="Projects"
                        subtitle="Selected system-to-application work"
                    />
                    <ol
                        className="sk-grid sk-wide projects"
                        style={{ "--sk-grid-min": "300px" }}
                    >
                        {projects.map((project, i) => (
                            <ProjectCard
                                key={project.name}
                                project={project}
                                index={pad(i + 1)}
                            />
                        ))}
                    </ol>
                </section>

                <section
                    className="sk-section"
                    id="skills"
                    aria-labelledby="skills-title"
                >
                    <SectionHeading
                        id="skills-title"
                        index="02"
                        title="Skills / Tech Stack"
                        subtitle="Grouped by development layer"
                    />
                    <div
                        className="sk-grid sk-wide"
                        style={{ "--sk-grid-min": "250px" }}
                    >
                        {skillGroups.map((group) => (
                            <SkillGroup key={group.title} group={group} />
                        ))}
                    </div>
                </section>

                <section
                    className="sk-section"
                    id="contact"
                    aria-labelledby="contact-title"
                >
                    <SectionHeading
                        id="contact-title"
                        index="03"
                        title="Contact"
                        subtitle="Open to systems and full-stack opportunities"
                    />
                    <ul
                        className="sk-grid sk-wide contacts"
                        style={{ "--sk-grid-min": "300px" }}
                    >
                        {contacts.map((item) => (
                            <ContactItem key={item.label} item={item} />
                        ))}
                    </ul>
                </section>
            </main>

            <footer className="site-footer">
                <p>{site.footer}</p>
                <p>© {year} Seng Athit Bannavong</p>
            </footer>
        </>
    );
}

export default App;
