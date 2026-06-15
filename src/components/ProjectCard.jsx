import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

function ProjectCard({ project, index }) {
  return (
    <li className="row">
      <span className="row-num" aria-hidden="true">
        {index}
      </span>
      <div className="row-body">
        <div className="row-head">
          <h3>{project.name}</h3>
          <a
            className="row-link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} on GitHub`}
          >
            <FaGithub className="inline-icon" aria-hidden="true" focusable="false" />
            <span>Source</span>
            <FaArrowUpRightFromSquare className="inline-icon" aria-hidden="true" focusable="false" />
          </a>
        </div>
        <p className="row-desc">{project.description}</p>
        <ul className="tags" aria-label={`Tech stack for ${project.name}`}>
          {project.stack.map((item) => (
            <li key={`${project.name}-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ProjectCard;
