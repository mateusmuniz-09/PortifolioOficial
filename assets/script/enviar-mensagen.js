const btnEnviar = document.getElementById("btn-enviar");
btnEnviar.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const contato = document.getElementById("contato").value;
  const texto = document.getElementById("texto").value;
  const numeroWhatsapp = "5588981252883";
  if (nome && email && contato && texto) {
    const mensagem = `Olá, vim pelo seu site https://portifoliomateusmuniz.netlify.app \n\nNome: ${nome}\nEmail: ${email}\nContato: ${contato}\nMensagem: ${texto}`;

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  } else {
    Swal.fire({
      icon: "warning",
      title: "Atenção!",
      text: "⚠️ Preencha todos os campos antes de enviar.",
      confirmButtonText: "Ok, vou preencher!",
      confirmButtonColor: "#00b9db",
    });
  }
});

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
