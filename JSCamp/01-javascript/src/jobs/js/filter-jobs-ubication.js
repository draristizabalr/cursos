// Reactividad de filtros de búsqueda
const ubicationFilter = document.querySelector("#ubicacion");

ubicationFilter.addEventListener("change", (event) => {
  const filter = event.target;

  filterJobsByUbication(filter.value);
});

function filterJobsByUbication(ubication) {
  const jobs = document.querySelectorAll(".jobs-listings article");
  jobs.forEach((job) => {
    const modalidad = job.dataset.modalidad;
    const isShow = !ubication || modalidad === ubication;
    job.classList.toggle("is-hidden", !isShow);
  });
}
