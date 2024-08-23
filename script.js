const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let customElements = 1;

next.addEventListener("click", () => {
  customElements++;
  if (customElements > circle.length) {
    customElements = circle.length;
  }

  update();
});

prev.addEventListener("click", () => {
  customElements--;
  if (circle.length < customElements) {
    circle.length = customElements;
  }
  update();
});

function update() {
  circle.forEach((circle, idx) => {
    if (idx < customElements) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const active = document.querySelectorAll(".active");
  progress.style.width =
    ((active.length - 1) / (circle.length - 1)) * 100 + "%";

  if (customElements == 1) {
    prev.disabled = true;
  } else if (customElements === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
