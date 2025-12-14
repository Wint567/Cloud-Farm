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

  setInterval(() => {
    goTo(index === 0 ? 1 : 0);
  }, 5000);
}


const burger = document.querySelector('.cloudfarm_burger');
const openBtn = document.getElementById('burgerOpen');
const closeBtn = document.getElementById('burgerClose');

openBtn.addEventListener('click', () => {
  burger.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  burger.classList.remove('is-open');
  document.body.style.overflow = '';
});

burger.addEventListener('click', (e) => {
  if (e.target === burger) {
    burger.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    burger.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});