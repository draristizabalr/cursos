import { useState } from "react";
import type { JobData } from "../interfaces";

interface JobCardProps {
  data: JobData;
  title: string;
  company: string;
  ubication: string;
  description: string;
}

export function JobCard({ 
  data, 
  title, 
  company, 
  ubication, 
  description 
}: JobCardProps) {
  const { modalidad, ubicacion, technology } = data;

  const [isApplied, setIsApplied] = useState<boolean>(false);

  const buttonClasses = isApplied
    ? "button-apply-job is-applied"
    : "button-apply-job";
  const buttonText = isApplied ? "¡Aplicado!" : "Aplicar";

  const technologyDisplay = Array.isArray(technology) 
    ? technology.join(',') 
    : technology;

  function handleApplyClick(): void {
    setIsApplied(true);
  }

  return (
    <article
      data-modalidad={modalidad}
      data-ubicacion={ubicacion}
      data-technology={technologyDisplay}
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
