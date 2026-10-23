import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

function ProjectCard({ project, index }) {
  return (
    <li className="sk-box project">
      <div className="sk-title">
        <span className="sk-badge" aria-hidden="true">
          {index}
        </span>
        <h3>{project.name}</h3>
        {project.tag ? <span className="sk-tag project-tag">{project.tag}</span> : null}
      </div>
      <p className="project-desc">{project.description}</p>
      {project.meta ? <p className="sk-small sk-muted project-meta">{project.meta}</p> : null}
      <ul className="sk-row stack" aria-label={`Tech stack for ${project.name}`}>
        {project.stack.map((item) => (
          <li key={item}>
            <code>{item}</code>
          </li>
        ))}
      </ul>
      <a
        className="sk-btn project-link"
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} on GitHub`}
      >
        <FaGithub className="inline-icon" aria-hidden="true" focusable="false" />
        <span>Source</span>
        <FaArrowUpRightFromSquare className="inline-icon" aria-hidden="true" focusable="false" />
      </a>
    </li>
  );
}

export default ProjectCard;
