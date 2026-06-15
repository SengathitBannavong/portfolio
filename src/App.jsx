import {
    FaArrowDown,
    FaArrowUpRightFromSquare,
    FaGithub,
} from "react-icons/fa6";
import ContactItem from "./components/ContactItem";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import SkillGroup from "./components/SkillGroup";
import { contacts, projects, site, skillGroups } from "./data/portfolioData";

const pad = (n) => String(n).padStart(2, "0");

function App() {
    const year = new Date().getFullYear();

    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to content
            </a>

            <header className="site-header">
                <div className="shell site-nav">
                    <a className="nameplate" href="#hero">
                        <span className="mark" aria-hidden="true" />
                        Seng Athit Bannavong
                    </a>
                    <nav aria-label="Primary">
                        <div className="nav-links">
                            <a href="#projects">Projects</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </nav>
                </div>
            </header>

            <main id="main-content" className="shell">
                <section
                    className="hero"
                    id="hero"
                    aria-labelledby="hero-title"
                >
                    <div className="hero-copy">
                        <p className="kicker reveal d1">// {site.kicker}</p>
                        <h1 id="hero-title" className="reveal d2">
                            {site.name}
                        </h1>
                        <p className="lede reveal d3">{site.roles}</p>
                        <p className="bio reveal d4">{site.bio}</p>
                        <div className="cta-row reveal d5">
                            <a className="btn btn--primary" href="#projects">
                                <span>View Projects</span>
                                <FaArrowDown
                                    className="inline-icon"
                                    aria-hidden="true"
                                    focusable="false"
                                />
                            </a>
                            <a
                                className="btn btn--ghost"
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
                        className="id-block reveal d3"
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
                        <dl className="spec-dl">
                            {site.meta.map((entry) => (
                                <div key={entry.label}>
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
                </section>

                <section
                    id="projects"
                    className="reveal"
                    aria-labelledby="projects-title"
                >
                    <SectionHeading
                        id="projects-title"
                        index="01"
                        title="Projects"
                        subtitle="Selected system-to-application work"
                    />
                    <ol className="index-list">
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
                    id="skills"
                    className="reveal"
                    aria-labelledby="skills-title"
                >
                    <SectionHeading
                        id="skills-title"
                        index="02"
                        title="Skills / Tech Stack"
                        subtitle="Grouped by development layer"
                    />
                    <div className="skill-rows">
                        {skillGroups.map((group) => (
                            <SkillGroup key={group.title} group={group} />
                        ))}
                    </div>
                </section>

                <section
                    id="contact"
                    className="reveal"
                    aria-labelledby="contact-title"
                >
                    <SectionHeading
                        id="contact-title"
                        index="03"
                        title="Contact"
                        subtitle="Open to systems and full-stack opportunities"
                    />
                    <ul className="contact-rows">
                        {contacts.map((item) => (
                            <ContactItem key={item.label} item={item} />
                        ))}
                    </ul>
                </section>
            </main>

            <footer className="site-footer">
                <div className="shell site-footer-inner">
                    <p>{site.footer}</p>
                    <p className="footer-meta">© {year} Seng Athit Bannavong</p>
                </div>
            </footer>
        </>
    );
}

export default App;
