import { useState } from "react";
import type { Filters } from "../interfaces";

export function useSearchForm() {
  const [filtersState, setFiltersState] = useState<Filters>({});

  function handleOnSearch(filters: Filters): void {
    setFiltersState((prevFilters: Filters) => ({
      ...prevFilters,
      ...filters,
    }));
  }

  return {
    handleOnSearch,
  };
}

// filtersState, filteredJobs, searchJob,
