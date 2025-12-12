const slider = document.querySelector("#cloudfarmSlider");

if (slider) {
  const track = slider.querySelector(".cloudfarm_slider--track");
  const dots = Array.from(slider.querySelectorAll(".cloudfarm_slider--dot"));

  let index = 0;

  function goTo(i) {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, idx) =>
      d.classList.toggle("is-active", idx === index)
    );
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goTo(i));
  });

  goTo(0);

  // автопрокрутка (по желанию)
  // setInterval(() => {
  //   goTo(index === 0 ? 1 : 0);
  // }, 5000);
}
