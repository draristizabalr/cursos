import { JobCard } from "./components/JobCard";
import data from "../../assets/data/data.json";
import { JobForm } from "./components/JobForm";
import { Paginator } from "../../shared/components/Paginator";

export function JobsPage() {


  return (
    <>
      <JobForm />

      <h2>Resultados de búsqueda</h2>
      <div className="jobs-listings">
        {data.map((job) => (
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

      <Paginator />
    </>
  );
}
