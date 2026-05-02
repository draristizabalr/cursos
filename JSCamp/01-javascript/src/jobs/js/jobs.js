// const botones = document.querySelectorAll(".button-apply-job");

// botones.forEach((boton) =>{
//   boton.addEventListener("click", () => {
//     boton.textContent = '¡Aplicado!'
//     boton.classList
//   });
// });

// Reactividad de botones para aplicar
const jobListSection = document.querySelector(".jobs-listings");

jobListSection?.addEventListener("click", (event) => {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});



