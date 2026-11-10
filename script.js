const header = document.querySelector(".top-header");
header.classList.add("show");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document
  .querySelectorAll(".main-nav, .home-lambo, .home-ferrari")
  .forEach((element) => {
    observer.observe(element);
  });

const bodyKitImages = document.querySelectorAll(".body-kit img");
let currentIndex = 0;
bodyKitImages[0].classList.add("active");
setInterval(() => {
  bodyKitImages[currentIndex].classList.remove("active");
  currentIndex++;
  if (currentIndex === bodyKitImages.length) {
    currentIndex = 0;
  }
  bodyKitImages[currentIndex].classList.add("active");
}, 3000);

const wheelsImages = document.querySelectorAll(".wheels img");
let wheelsIndex = 0;
wheelsImages[wheelsIndex].classList.add("active");
setInterval(() => {
  wheelsImages[wheelsIndex].classList.remove("active");
  wheelsIndex++;
  if (wheelsIndex === wheelsImages.length) {
    wheelsIndex = 0;
  }
  wheelsImages[wheelsIndex].classList.add("active");
}, 3000);

const paintImages = document.querySelectorAll(".paint img");
let paintIndex = 0;
paintImages[paintIndex].classList.add("active");
setInterval(() => {
  paintImages[paintIndex].classList.remove("active");
  paintIndex++;
  if (paintIndex === paintImages.length) {
    paintIndex = 0;
  }
  paintImages[paintIndex].classList.add("active");
}, 3000);

const interiorImages = document.querySelectorAll(".interior img");
let interiorIndex = 0;
interiorImages[interiorIndex].classList.add("active");
setInterval(() => {
  interiorImages[interiorIndex].classList.remove("active");
  interiorIndex++;
  if (interiorIndex === interiorImages.length) {
    interiorIndex = 0;
  }
  interiorImages[interiorIndex].classList.add("active");
}, 3000);

const charCount = document.getElementById("char-count");
const messageInput = document.querySelector('textarea[name="message"]');
messageInput.addEventListener("input", () => {
  const currentLength = messageInput.value.length;
  const remaining = 1000 - currentLength;
  charCount.textContent = "残り" + remaining + "文字";
  if (remaining <= 50) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "white";
  }
});
