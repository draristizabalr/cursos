export function JobFilter({ name, id, options }) {
  function filterJobs(event) {
    const valueSelected = event.target.value;
    
    console.log(valueSelected);
  }

  return (
    <select name={name} id={id} onChange={(event) => filterJobs(event)}>
      {options.map(({ value, label }) => (
        <option value={ value }>{ label }</option>
      ))}
    </select>
  );
}
