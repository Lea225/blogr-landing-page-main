document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez l'icône hamburger et l'icône de fermeture
    const iconHamburger = document.getElementById('icon-hamburger');
    const iconClose = document.getElementById('icon-close');
    const arrowDarkIcons = document.querySelectorAll(".icon-arrow-dark");
  const mobileMenuDivs = document.querySelectorAll(".mobile-menu-div");
    const mobileMenu = document.querySelector('.mobile-menu');

    // Ajoutez un gestionnaire d'événements pour le clic sur l'icône hamburger
    iconHamburger.addEventListener('click', () => {
      // Affichez le menu mobile
      mobileMenu.style.display = 'block';
      // Masquez l'icône hamburger
      iconHamburger.style.display = 'none';
      // Affichez l'icône de fermeture
      iconClose.style.display = 'block';
    });

    // Ajoutez un gestionnaire d'événements pour le clic sur l'icône de fermeture
    iconClose.addEventListener('click', () => {
      // Masquez le menu mobile
      mobileMenu.style.display = 'none';
      // Affichez l'icône hamburger
      iconHamburger.style.display = 'block';
      // Masquez l'icône de fermeture
      iconClose.style.display = 'none';
    });

    arrowDarkIcons.forEach((icon, index) => {
        icon.addEventListener("click", function() {
          // Afficher ou cacher la mobile-menu-div correspondante
          mobileMenuDivs[index].classList.toggle("show");
          // Faire pivoter l'icône arrow-dark
          icon.classList.toggle("rotate");
        });
      });
  });