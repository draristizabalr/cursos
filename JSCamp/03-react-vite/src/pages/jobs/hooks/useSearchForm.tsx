import { useState } from "react";
import type { Filters, Job } from "../interfaces";

export function useSearchForm({ jobs }: { jobs: Job[] }) {
  const [filtersState, setFiltersState] = useState<Filters>({});

  const isFiltered = Object.keys(filtersState).length === 0 ? false : true;
  const filteredJobs = !isFiltered ? jobs : filterJobs();

  function filterJobs(): Job[] {
    return jobs.filter((job) => {
      const { data } = job;
      const { modalidad, technology, nivel } = filtersState;

      if (modalidad && data.modalidad !== modalidad) {
        return false;
      }

      if (technology) {
        const jobTech = Array.isArray(data.technology)
          ? data.technology
          : [data.technology];
        if (!jobTech.includes(technology)) {
          return false;
        }
      }

      if (nivel && data.nivel !== nivel) {
        return false;
      }

      return true;
    });
  }

  function searchJob(valueSearch: string): Job[] {
    return filteredJobs.filter((job) => {
      const title: string = job.titulo.toLowerCase();
      if (!title.includes(valueSearch)) {
        return false;
      }

      return true;
    });
  }

  function handleOnSearch(filters: Filters): void {
    setFiltersState((prevFilters: Filters) => ({
      ...prevFilters,
      ...filters,
    }));
  }

  return {
    filtersState,
    filteredJobs,
    searchJob,
    handleOnSearch,
  };
}
