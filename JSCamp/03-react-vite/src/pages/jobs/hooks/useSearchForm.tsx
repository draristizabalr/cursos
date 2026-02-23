import { useEffect, useState } from "react";
import type { Filters, Job } from "../interfaces";
import { ApiJobResponse } from "../interfaces/api-job-reponse";
import { RESULTS_PER_PAGE } from "../constants/jobs-page";

let timeoutId: NodeJS.Timeout | null = null;

export function useSearchForm() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filtersState, setFiltersState] = useState<Filters>({});
  const [jobs, setJobs] = useState<Job[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  function handleOnSearch(filters: Filters): void {
    const newFilters = { ...filtersState, ...filters };

    window.localStorage.setItem("filters", JSON.stringify(newFilters));

    setFiltersState(newFilters);
  }

  function handleTextChange(text: string): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      window.localStorage.setItem(
        "filters",
        JSON.stringify({ ...filtersState, search: text }),
      );
      setFiltersState((prevFilters) => ({ ...prevFilters, search: text }));
    }, 500);
  }

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const { search, modalidad, nivel, technology } = filtersState;

        const params = new URLSearchParams();

        if (search) params.append("text", search);
        if (modalidad) params.append("type", modalidad);
        if (nivel) params.append("level", nivel);
        if (technology) params.append("technology", technology);

        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        params.append("limit", String(RESULTS_PER_PAGE));
        params.append("offset", String(offset));

        const queryParams = params.toString();

        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs?${queryParams}`,
        );
        const data = (await response.json()) as ApiJobResponse;
        setJobs(data.data);
        setTotal(data.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [filtersState, currentPage]);

  return {
    handleOnSearch,
    handleTextChange,
    setCurrentPage,
    currentPage,
    filtersState,
    jobs,
    total,
    loading,
  };
}
