import ContactItem from "./components/ContactItem";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import SkillGroup from "./components/SkillGroup";
import { contacts, projects, site, skillGroups } from "./data/portfolioData";

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell site-nav">
          <div className="nameplate">{site.name}</div>
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
        <section className="hero" id="hero" aria-labelledby="hero-title">
          <p className="kicker">Full Stack / Systems / Kernel</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="title-line">{site.roles}</p>
          <p className="hero-bio">{site.bio}</p>
          <div className="cta-row">
            <a className="cta" href="#projects">
              View Projects
            </a>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <SectionHeading
            id="projects-title"
            title="Projects"
            subtitle="Selected system-to-application work"
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title">
          <SectionHeading
            id="skills-title"
            title="Skills / Tech Stack"
            subtitle="Grouped by development layer"
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <SectionHeading
            id="contact-title"
            title="Contact"
            subtitle="Open to systems and full-stack opportunities"
          />
          <ul className="contact-list">
            {contacts.map((item) => (
              <ContactItem key={item.label} item={item} />
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <p>
            {site.footer} {year}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
