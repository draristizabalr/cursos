import { JobData } from "./job-data";

export interface Job {
  id: string;
  titulo: string;
  empresa: string;
  ubicacion: string;
  descripcion: string;
  data: JobData;
}