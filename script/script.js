// Menu Hamburger
const menuBotao = document.querySelector(".botao");
function mostrarMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.getElementById("nav");
  if (nav) {
    nav.classList.toggle("aparece");
  }
  const active = nav.classList.contains("aparece");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  }else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
menuBotao.addEventListener("click", mostrarMenu);
menuBotao.addEventListener("touchstart", mostrarMenu);

// Animação de carregamento

function animaImagens(event) {
  const imgUm = document.querySelector(".img-1");
  if (imgUm){
  imgUm.classList.add("surgeTop");
  }
  const imgDois = document.querySelector(".img-2");
  if (imgDois) {
  imgDois.classList.add("surgeBottom");
  }
}

window.addEventListener("load", animaImagens);