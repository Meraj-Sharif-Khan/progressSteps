const progressBar = document.getElementById("progress-bar");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const step = document.querySelectorAll(".step");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > step.length) {
    currentActive = step.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  step.forEach((e, i) => {
    if (i < currentActive) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".step.active");
  progressBar.style.width =
    ((actives.length - 1) / (step.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false;
  } else if (currentActive === step.length) {
    next.disabled = true;
    prev.disabled = false;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
