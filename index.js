const form = document.querySelector("form");
const conteiner_1 = document.querySelector(".conteiner");
const conteiner_2 = document.querySelector(".conteiner-2");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  conteiner_1.classList.add("hide");
  conteiner_2.classList.remove("hide");
});
