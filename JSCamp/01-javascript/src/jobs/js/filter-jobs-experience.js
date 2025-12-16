const filterExperience = document.getElementById('experiencia');

filterExperience.addEventListener('change', (event) => {
  const filter = event.target;

  filterJobsByExperience(filter.value);
})

const filterJobsByExperience = (experience) => {
  const jobs = document.querySelectorAll('.jobs-listings article');
  
  jobs.forEach((job) => {
    const { nivel } = job.dataset;
    const isShow = !experience || nivel === experience;
    job.classList.toggle('is-hidden', !isShow);
  });
}