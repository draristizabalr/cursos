// React
import { useState } from "react";
// Components
import { JobCard } from "./components/JobCard";
import { JobForm } from "./components/JobForm";
import { Paginator } from "../../shared/components/Paginator";
// Properties
import jobsData from "../../assets/data/data.json";
import { RESULTS_PER_PAGE } from "./constants/jobs-page";

export function JobsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const isFiltered = Object.keys(filtersState).length === 0 ? false : true;
  const filteredJobs = !isFiltered ? jobsData : filterJobs();

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function filterJobs() {
    return jobsData.filter((job) => {
      const { data } = job;      
      const { modalidad, technology, nivel } = filtersState;
  
      if (!modalidad || data.modalidad === modalidad) {
        console.log("Dentro del condicional de modalidad");
        return true;
      }
      if (!technology || data.technology === technology) {
        console.log("Dentro del condicional de technology");
        return true;
      }
      if (!nivel || data.nivel === nivel) {
        console.log("Dentro del condicional de nivel");
        return true;
      }
  
      return false;
    });
  }

  function handleOnSearch(filters) {
    
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
