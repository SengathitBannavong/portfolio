function SkillGroup({ group }) {
  const headingId = `skills-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <article className="skill-group" aria-labelledby={headingId}>
      <h3 id={headingId}>{group.title}</h3>
      <ul className="skill-items">
        {group.skills.map((skill) => (
          <li key={`${group.title}-${skill}`}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillGroup;
