const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1, // 1 slide por vez no celular
  spaceBetween: 10, // Espaço entre os slides
  loop: true,
  
  autoplay: {
    delay: 3000, // Tempo de espera entre os slides (3000ms = 3 segundos)
    disableOnInteraction: false, // Continua passando mesmo se o usuário clicar
    pauseOnMouseEnter: true, // Pausa o slide quando o mouse está em cima (bom para o usuário ler)
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsividade:
  breakpoints: {
    // Quando a tela for maior que 768px (Desktop)
    768: {
      slidesPerView: 3, // 3 slides por vez no PC
      spaceBetween: 30, // Mais espaço entre os stories no PC
    }
  }
});