export interface ApiJobResponse {
  total: number;
  limit: number;
  offset: number;
  results: number;
  data: Job[];
}

export interface Job {
  id: string;
  titulo: string;
  empresa: string;
  ubicacion: string;
  descripcion: string;
  data: Data;
  content: Content;
}

export interface Content {
  description: string;
  responsibilities: string;
  requirements: string;
  about: string;
}

export interface Data {
  technology: string[];
  modalidad: string;
  nivel: string;
}
