export function JobCard({ data, title, company, ubication, description }) {
  const { modalidad, ubicacion, technology } = data;
  return (
    <article
      data-modalidad={modalidad}
      data-ubicacion={ubicacion}
      data-technology={technology}
    >
      <div>
        <h3>{title}</h3>
        <small>
          {company} | {ubication}
        </small>
        <p>{description}</p>
      </div>
      <button className="button-apply-job">Aplicar</button>
    </article>
  );
}
