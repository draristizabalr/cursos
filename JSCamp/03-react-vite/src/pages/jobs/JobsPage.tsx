// React
import { useState } from "react";
// Components
import { JobCard } from "./components/JobCard";
import { JobForm } from "./components/JobForm";
import { Paginator } from "../../shared/components/Paginator";
// Properties
import jobsData from "../../assets/data/data.json";
import { RESULTS_PER_PAGE } from "./constants/jobs-page";
// Types
import type { Job, Filters } from "../../types";

// Cast de los datos JSON al tipo Job[]
const jobs: Job[] = jobsData as Job[];

export function JobsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filtersState, setFiltersState] = useState<Filters>({});

  const isFiltered = Object.keys(filtersState).length === 0 ? false : true;
  const filteredJobs = !isFiltered ? jobs : filterJobs();

  function handlePageChange(page: number): void {
    setCurrentPage(page);
  }

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

  function handleOnSearch(filters: Filters): void {
    setFiltersState(prevFilters => ({
      ...prevFilters,
      ...filters
    }));
    setCurrentPage(1);
  }

  const pagedResults = filteredJobs.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredJobs.length / RESULTS_PER_PAGE);

  return (
    <>
      <JobForm onSearch={handleOnSearch} />

      <h2>Resultados de búsqueda</h2>
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
    </>
  );
}
