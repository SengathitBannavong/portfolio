import { Underline } from "./Sketch";

// Returns siblings (not a wrapper) so they sit directly in the .sk-section grid.
function SectionHeading({ id, index, title, subtitle }) {
  return (
    <>
      <div className="section-head">
        <span className="sk-badge" aria-hidden="true">
          {index}
        </span>
        <h2 id={id} className="sk-underline">
          {title}
          <Underline variant={Number(index)} />
        </h2>
      </div>
      <p className="sk-muted section-sub">{subtitle}</p>
    </>
  );
}

export default SectionHeading;
