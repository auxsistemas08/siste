document.addEventListener("DOMContentLoaded", function() {
  var whatsappContainer = document.querySelector(".whatsapp-container");
  var portafolioSection = document.querySelector(".portafolio");
  var showButtonOffset = 100; // Cuántos píxeles antes de llegar a la sección portafolio se mostrará el botón

  function checkScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= portafolioSection.offsetTop - showButtonOffset) {
      whatsappContainer.style.display = "block";
    } else {
      whatsappContainer.style.display = "none";
    }
  }

  // Evento para comprobar el desplazamiento cuando se hace scroll
  window.addEventListener("scroll", checkScroll);

  // Comprobar el desplazamiento inicialmente (en caso de que la sección portafolio esté visible al cargar la página)
  checkScroll();
});
