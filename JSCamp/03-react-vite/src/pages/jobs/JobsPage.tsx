// Components
import { JobCard } from "./components/JobCard";
import { JobForm } from "./components/JobForm";
import { Paginator } from "../../shared/components/Paginator";
import { RESULTS_PER_PAGE } from "./constants/jobs-page";
// Interfaces
import type { Filters } from "./interfaces";
import { useSearchForm } from "./hooks/useSearchForm";
import { LoadingDialog } from "@/shared/components/LoadingDialog";

export function JobsPage() {
  const {
    handleOnSearch,
    setCurrentPage,
    currentPage,
    jobs,
    total,
    loading,
    filtersState,
  } = useSearchForm();

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
      <JobForm filtersState={filtersState} onSearch={handleOnSubmitSearch} />

      <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>
      <div className="jobs-listings">
        {loading ? (
          <LoadingDialog
            open={loading}
            title="Cargando"
            message="Cargando trabajos disponibles..."
          />
        ) : jobs.length === 0 ? (
          <p>No se encontraron resultados</p>
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
