import { FormEvent, useEffect, useId, useState } from "react";
import { JobFilter } from "./JobFilter";
import { JobSearch } from "./JobSearch";
import { TECHNOLOGY_OPTIONS } from "../constants/technology-filter";
import { UBICATION_OPTIONS } from "../constants/ubication-filter";
import { EXPERIENCE_OPTIONS } from "../constants/experience-filter";
import type { Filters, FilterChange, FilterOption } from "../interfaces";

interface JobFormProps {
  filtersState: Filters;
  onSearch: (filters: Filters) => void;
  onTextChange: (text: string) => void;
}

interface FilterElement {
  id: string;
  filterName: string;
  options: FilterOption[];
}

export function JobForm({
  filtersState,
  onSearch,
  onTextChange,
}: JobFormProps) {
  const idText = useId();
  const idTechnology = useId();
  const idExperience = useId();
  const idUbication = useId();

  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    async function checkFilters() {
      if (
        filtersState.technology ||
        filtersState.modalidad ||
        filtersState.nivel
      ) {
        setIsFiltered(true);
      } else {
        setIsFiltered(false);
      }
    }
    checkFilters();
  }, [filtersState]);

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
      [filter]: valueFilter,
    };

    onSearch(filters);
  };

  const handleOnCleanFilters = (): void => {
    const filterTechnology = document.getElementById(
      idTechnology,
    ) as HTMLSelectElement;
    const filterUbication = document.getElementById(
      idUbication,
    ) as HTMLSelectElement;
    const filterExperience = document.getElementById(
      idExperience,
    ) as HTMLSelectElement;

    filterTechnology.value = "";
    filterUbication.value = "";
    filterExperience.value = "";

    onSearch({ technology: null, modalidad: null, nivel: null });
  };

  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form role="search" id="filterForm" onSubmit={handleSubmit}>
        <JobSearch name={idText} id={idText} onTextChange={onTextChange} />

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
          {isFiltered && (
            <button type="button" onClick={handleOnCleanFilters}>
              Limpiar filtros
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
