(() => {
  const slides = Array.from(document.querySelectorAll(".carousel__slide"));
  const btnPrev = document.querySelector(".carousel__arrow--left");
  const btnNext = document.querySelector(".carousel__arrow--right");

  if (!slides.length || !btnPrev || !btnNext) return;

  let index = slides.findIndex((s) => s.classList.contains("is-active"));
  if (index === -1) index = 0;

  const show = (i) => {
    slides[index].classList.remove("is-active");
    index = (i + slides.length) % slides.length;
    slides[index].classList.add("is-active");
  };

  btnPrev.addEventListener("click", () => show(index - 1));
  btnNext.addEventListener("click", () => show(index + 1));

  // volitelně: šipky na klávesnici
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
})();
