const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = botao.querySelector(".plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});
