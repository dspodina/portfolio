// Typing delayed text in "About" section

const text = "I'm Daria, a junior full stack developer.";
let index = 0;
const aboutMe = document.getElementById("about-me");

function printText() {
  aboutMe.textContent += text[index++];
  if (index < text.length) {
    setTimeout(printText, 50);
  }
}
window.onload = printText;

// Hover effect for "Projects" section

const frontSides = document.querySelectorAll(".project-card");
const backSides = document.querySelectorAll(".project-card-back");

frontSides.forEach((frontSide, index) => {
  frontSide.addEventListener("mouseover", () => {
    backSides[index].style.display = "block";
    frontSide.style.display = "none";
  });

  backSides[index].addEventListener("mouseout", () => {
    backSides[index].style.display = "none";
    frontSide.style.display = "block";
  });
});
