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
