document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const papel = document.querySelector(".papel-rasgado");

  const heroImg = new Image();
  heroImg.src = "hero.webp";

  const fitasImg = new Image();
  fitasImg.src = "fitas.webp";

  // Espera ambas carregarem antes de iniciar o parallax
  Promise.all([
    new Promise(resolve => heroImg.onload = resolve),
    new Promise(resolve => fitasImg.onload = resolve)
  ]).then(() => {
    startParallax(); // inicia a função do parallax com easing
  });

  function startParallax() {
    let scrollY = window.scrollY;
    let currentY = scrollY;

    function update() {
      scrollY = window.scrollY;
      currentY += (scrollY - currentY) * 0.1;

      const rect = papel.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let progress = (viewportHeight - rect.top + (currentY - scrollY)) / rect.height;
      progress = Math.min(Math.max(progress, 0), 1);

      papel.style.opacity = progress;
      papel.style.transform = `translateY(${50 - progress * 50}px)`;

      // Agora a troca de background é instantânea, sem delay
      hero.style.backgroundImage = progress > 0 ? "url('fitas.webp')" : "url('hero.webp')";

      requestAnimationFrame(update);
    }

    update();
  }
});
