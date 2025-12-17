import { useState } from "react";

export function JobCard({ data, title, company, ubication, description }) {
  const { modalidad, ubicacion, technology } = data;

  const [isApplied, setIsApplied] = useState(false);

  const buttonClasses = isApplied
    ? "button-apply-job is-applied"
    : "button-apply-job";
  const buttonText = isApplied ? "¡Aplicado!" : "Aplicar";

  function handleApplyClick() {
    setIsApplied(true);
  }

  return (
    <article
      data-modalidad={modalidad}
      data-ubicacion={ubicacion}
      data-technology={technology}
    >
      <div>
        <h3>{title}</h3>
        <small>
          {company} | {ubication}
        </small>
        <p>{description}</p>
      </div>
      <button
        className={buttonClasses}
        onClick={handleApplyClick}
        disabled={isApplied}
      >
        {buttonText}
      </button>
    </article>
  );
}
