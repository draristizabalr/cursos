const filterTechnology = document.getElementById('tecnologia');

filterTechnology.addEventListener('change', (event) => {
  const filter = event.target;

  filterJobsByTechnology(filter.value);
});

function filterJobsByTechnology(tecnologia) {
  const jobs = document.querySelectorAll('.jobs-listings article');
  
  jobs.forEach((job) => {
    const { technology } = job.dataset;
    const technologies = technology.split(',');
    const isShow = !tecnologia || technologies.includes(tecnologia);
    job.classList.toggle('is-hidden', !isShow);
  });
}