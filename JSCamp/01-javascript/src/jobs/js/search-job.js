const filterForm = document.getElementById('filterForm');

filterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formElement = event.target;
  const searchInput = formElement.querySelector('input');
  const searchValue = searchInput.value.toLowerCase();

  searchJob(searchValue);
});

const searchJob = function (searchValue) {
  const jobs = document.querySelectorAll(".jobs-listings article");
  jobs.forEach((job) => {
    const title = job.querySelector('h3').innerText;
    const titleLowerCase = title.toLowerCase();
    const isShow = !searchValue || titleLowerCase.includes(searchValue);

    job.classList.toggle('is-hidden', !isShow);
  })
};
