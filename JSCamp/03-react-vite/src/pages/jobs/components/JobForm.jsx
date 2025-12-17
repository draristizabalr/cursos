import { JobFilter } from "./JobFilter";
import { JobSearch } from "./JobSearch";
import { TECHNOLOGY_OPTIONS } from "../constants/technology-filter";
import { UBICATION_OPTIONS } from "../constants/ubication-filter";
import { EXPERIENCE_OPTIONS } from "../constants/experience-filter";

export function JobForm() {
  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form role="search" id="filterForm">
        <JobSearch />

        <div className="search-filters">
          <JobFilter 
            name="technology"
            id="technology"
            options={TECHNOLOGY_OPTIONS}
          />

          <JobFilter 
            name="ubicacion"
            id="ubicacion"
            options={UBICATION_OPTIONS}
          />

          <JobFilter 
            name="experiencia"
            id="experiencia"
            options={EXPERIENCE_OPTIONS}
          />
        </div>
      </form>
    </section>
  );
}
