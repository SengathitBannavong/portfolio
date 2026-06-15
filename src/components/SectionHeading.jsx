function SectionHeading({ id, index, title, subtitle }) {
  return (
    <div className="section-head">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <h2 id={id}>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default SectionHeading;
