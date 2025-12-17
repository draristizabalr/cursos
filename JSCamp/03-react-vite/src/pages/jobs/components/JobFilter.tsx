import { ChangeEvent } from 'react';
import type { FilterOption, FilterChange } from '../../../types';

interface JobFilterProps {
  name: string;
  filterName: string;
  options: FilterOption[];
  onFilter: (filterChange: FilterChange) => void;
}

export function JobFilter({ 
  name, 
  filterName, 
  options, 
  onFilter 
}: JobFilterProps) {
  function handleOnFilter(event: ChangeEvent<HTMLSelectElement>): void {
    const valueFilter = event.target.value;

    onFilter({ filter: filterName, valueFilter });
  }

  return (
    <select name={name} id={name} onChange={handleOnFilter}>
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
