// React
import { useState } from "react";
// Components
import { JobCard } from "./components/JobCard";
import { JobForm } from "./components/JobForm";
import { Paginator } from "../../shared/components/Paginator";
// Properties
import jobsData from "../../assets/data/data.json";
import { RESULTS_PER_PAGE } from "./constants/jobs-page";
// Interfaces
import type { Job, Filters } from "./interfaces";
import { useSearchForm } from "./hooks/useSearchForm";

// Cast de los datos JSON al tipo Job[]
const jobs: Job[] = jobsData as Job[];

export function JobsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { filtersState, filteredJobs, searchJob, handleOnSearch } =
    useSearchForm({ jobs });

  const isSearching = filtersState.search ? true : false;
  const jobsFinded = isSearching
    ? searchJob(filtersState.search!)
    : filteredJobs;

  function handlePageChange(page: number): void {
    setCurrentPage(page);
  }

  const pagedResults = jobsFinded.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const totalPages = Math.ceil(jobsFinded.length / RESULTS_PER_PAGE);

  const handleOnSubmitSearch = (filters: Filters): void => {
    handleOnSearch(filters);
    setCurrentPage(1);
  };

  return (
    <main>
      <JobForm onSearch={handleOnSubmitSearch} />

      <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>
      <div className="jobs-listings">
        {pagedResults.map((job) => (
          <JobCard
            key={job.id}
            title={job.titulo}
            company={job.empresa}
            ubication={job.ubicacion}
            description={job.descripcion}
            data={job.data}
          />
        ))}
      </div>

      <Paginator
        onPageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
}
