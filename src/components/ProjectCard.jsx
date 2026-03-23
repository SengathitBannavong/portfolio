function ProjectCard({ project }) {
  return (
    <article className="project">
      <h3>{project.name}</h3>
      <ul className="tech-list" aria-label={`Tech stack for ${project.name}`}>
        {project.stack.map((item) => (
          <li key={`${project.name}-${item}`}>{item}</li>
        ))}
      </ul>
      <p>{project.description}</p>
      <a
        className="project-link"
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} on GitHub`}
      >
        GitHub
      </a>
    </article>
  );
}

export default ProjectCard;
