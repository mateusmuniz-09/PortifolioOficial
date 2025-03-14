/* const btnEnviar = document.getElementById("btn-enviar");
document.getElementById("btn-enviar").addEventListener("click", (event) => {
  event.preventDefault(); // Impede o recarregamento da página

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const contato = document.getElementById("contato");
  const texto = document.getElementById("texto");

  if (
    !nome.value.trim() ||
    !email.value.trim() ||
    !contato.value.trim() ||
    !texto.value.trim()
  ) {
    Swal.fire({
      icon: "warning",
      title: "Atenção!",
      text: "⚠️ Preencha todos os campos antes de enviar.",
      confirmButtonText: "Ok, vou preencher!",
      confirmButtonColor: "#00b9db",
    });
    return;
  }

  const numeroWhatsapp = "5588981252883";
  const mensagem = `Olá, vim pelo seu site https://portifoliomateusmuniz.netlify.app\n\nNome: ${nome.value}\nEmail: ${email.value}\nContato: ${contato.value}\nMensagem: ${texto.value}`;
  const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
    mensagem
  )}`;

  window.open(url, "_blank");

  nome.value = "";
  email.value = "";
  contato.value = "";
  texto.value = "";
}); */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var swiper = new Swiper(".swiper", {
  slidesPerView: 3, // Exibe 3 por vez (ajustável)
  spaceBetween: 20, // Espaço entre os slides
  loop: true, // Permite rolagem infinita
  autoplay: { delay: 5000, disebleOnInteraction: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    300: { slidesPerView: 1 },
  },
});

///////////////////////////////////////////////////////

const menuDesktop = document.querySelector("#header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menuDesktop.classList.add("rolagem");
  } else {
    menuDesktop.classList.remove("rolagem");
  }
});
