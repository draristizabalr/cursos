import { FormEvent, useId } from "react";
import { JobFilter } from "./JobFilter";
import { JobSearch } from "./JobSearch";
import { TECHNOLOGY_OPTIONS } from "../constants/technology-filter";
import { UBICATION_OPTIONS } from "../constants/ubication-filter";
import { EXPERIENCE_OPTIONS } from "../constants/experience-filter";
import type { Filters, FilterChange, FilterOption } from "../interfaces";

interface JobFormProps {
  onSearch: (filters: Filters) => void;
}

interface FilterElement {
  id: string;
  filterName: string;
  options: FilterOption[];
}

export function JobForm({ onSearch }: JobFormProps) {
  const idText = useId();
  const idTechnology = useId();
  const idExperience = useId();
  const idUbication = useId();

  const filterElements: FilterElement[] = [
    { id: idTechnology, filterName: "technology", options: TECHNOLOGY_OPTIONS },
    { id: idUbication, filterName: "modalidad", options: UBICATION_OPTIONS },
    { id: idExperience, filterName: "nivel", options: EXPERIENCE_OPTIONS },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const filters: Filters = {
      search: formData.get(idText) as string | null,
      technology: formData.get(idTechnology) as string | null,
      modalidad: formData.get(idUbication) as string | null,
      nivel: formData.get(idExperience) as string | null,
    };

    onSearch(filters);
  };

  const handleOnFilter = ({ filter, valueFilter }: FilterChange): void => {
    const filters: Filters = {
      [filter]: valueFilter
    };

    onSearch(filters);
  };

  const handleOnSearchInput = (value: string) => {
    const filters: Filters = {
      search: value
    };

    onSearch(filters);
  }

  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form role="search" id="filterForm" onSubmit={handleSubmit}>
        <JobSearch name={idText} id={idText} onSearch={handleOnSearchInput}/>

        <div className="search-filters">
          {filterElements.map(({ id, filterName, options }) => (
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
