// Tipos para los datos de trabajo (Job)
export interface JobData {
  technology: string | string[];
  modalidad: string;
  nivel: string;
  ubicacion?: string;
}

export interface Job {
  id: string;
  titulo: string;
  empresa: string;
  ubicacion: string;
  descripcion: string;
  data: JobData;
}

// Tipos para los filtros
export interface FilterOption {
  value: string;
  label: string;
}

export interface Filters {
  search?: string | null;
  technology?: string | null;
  modalidad?: string | null;
  nivel?: string | null;
}

export interface FilterChange {
  filter: string;
  valueFilter: string;
}
