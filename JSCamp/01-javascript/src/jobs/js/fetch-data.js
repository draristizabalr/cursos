// Creando articles de los trabajos desde la información obtenida de un JSON
fetch("../data/data.json")
  .then((response) => response.json())
  .then((jobs) => {
    const jobsListing = document.querySelector(".jobs-listings");
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";
      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = job.data.technology;

      article.innerHTML = `<div>
            <h3>${job.titulo}</h3>
            <small>${job.empresa} | ${job.ubicacion}</small>
            <p>
              ${job.descripcion}
            </p>
          </div>
          <button class="button-apply-job">Aplicar</button>
        `;

      jobsListing.appendChild(article);
    });
  });