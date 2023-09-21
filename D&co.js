document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-hamburger");
    const navDroite = document.querySelector(".nav-droite");
    const closeButton = document.querySelector(".close-button");
  
    menuButton.addEventListener("click", function () {
        navDroite.classList.toggle("show");
        closeButton.classList.toggle("show");
        
        // Ajoutez ou supprimez la classe "hidden" en fonction de l'état de la barre de navigation
        if (navDroite.classList.contains("show")) {
            menuButton.classList.add("hidden");
        } else {
            menuButton.classList.remove("hidden");
        }
    });
    closeButton.addEventListener("click", function () {
      navDroite.classList.remove("show");
      closeButton.classList.remove("show");
      menuButton.classList.remove("hidden");
  });
  });

