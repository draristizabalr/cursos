import { JobFilter } from "./JobFilter";
import { JobSearch } from "./JobSearch";
import { TECHNOLOGY_OPTIONS } from "../constants/technology-filter";
import { UBICATION_OPTIONS } from "../constants/ubication-filter";
import { EXPERIENCE_OPTIONS } from "../constants/experience-filter";
import { useId } from "react";

export function JobForm({ onSearch }) {
  const idText = useId();
  const idTechnology = useId();
  const idExperience = useId();
  const idUbication = useId();

  const filterElements = [
    { id: idTechnology, filterName: "technology", options: TECHNOLOGY_OPTIONS },
    { id: idUbication, filterName: "modalidad", options: UBICATION_OPTIONS },
    { id: idExperience, filterName: "nivel", options: EXPERIENCE_OPTIONS },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const filters = {
      search: formData.get(idText),
      technology: formData.get(idTechnology),
      modalidad: formData.get(idUbication),
      nivel: formData.get(idExperience),
    };

    onSearch(filters);
  };

  const handleOnFilter = ({ filter, valueFilter }) => {
    const filters = {
      [filter]: valueFilter
    };

    onSearch(filters);
  };

  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form role="search" id="filterForm" onSubmit={handleSubmit}>
        <JobSearch name={idText} id={idText} />

        <div className="search-filters">
          {filterElements.map(({ id, filterName, options}) => (
            <JobFilter
              key={id}
              name={id}
              filterName={filterName}
              options={options}
              onFilter={handleOnFilter}
            />
          ))}
        </div>
      </form>
    </section>
  );
}
