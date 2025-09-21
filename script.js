document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Abre/fecha o menu ao clicar no botão
  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', function (event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = toggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      navMenu.classList.remove('active');
    }
  });
});







