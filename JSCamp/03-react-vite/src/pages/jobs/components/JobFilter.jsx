export function JobFilter({ name, filterName, options, onFilter }) {
  function handleOnFilter(event) {
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
