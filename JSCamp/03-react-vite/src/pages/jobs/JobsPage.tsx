// React
import { useEffect, useState } from "react";
// Components
import { JobCard } from "./components/JobCard";
import { JobForm } from "./components/JobForm";
import { Paginator } from "../../shared/components/Paginator";
import { RESULTS_PER_PAGE } from "./constants/jobs-page";
// Interfaces
import type { Filters } from "./interfaces";
import { useSearchForm } from "./hooks/useSearchForm";
import { ApiJobResponse, Job } from "./interfaces/api-job-reponse";
import { LoadingDialog } from "@/shared/components/LoadingDialog";

export function JobsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const response = await fetch("https://jscamp-api.vercel.app/api/jobs");
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
  }, []);

  const { handleOnSearch } = useSearchForm();

  function handlePageChange(page: number): void {
    setCurrentPage(page);
  }

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

  const handleOnSubmitSearch = (filters: Filters): void => {
    handleOnSearch(filters);
    setCurrentPage(1);
  };

  return (
    <main>
      <JobForm onSearch={handleOnSubmitSearch} />

      <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>
      <div className="jobs-listings">
        {loading ? (
          <LoadingDialog
            open={loading}
            title="Cargando"
            message="Cargando trabajos disponibles..."
          />
        ) : (
          jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.titulo}
              company={job.empresa}
              ubication={job.ubicacion}
              description={job.descripcion}
              data={job.data}
            />
          ))
        )}
      </div>

      <Paginator
        onPageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
}
