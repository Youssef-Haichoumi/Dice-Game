var image1 = document.querySelector(".img1");
var txt = document.querySelector("h1");
var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  image1.src = "./images/dice" + randomNumber1 + ".png";

  var image2 = document.querySelector(".img2");
  image2.src = "./images/dice" + randomNumber2 + ".png";

  if (randomNumber1 > randomNumber2) {
    txt.textContent = "Player 1 wins!! 😳";
  } else if (randomNumber1 < randomNumber2) {
    txt.textContent = "Player 2 wins !! 😳";
  } else {
    txt.textContent = "Draw 💀💀💀";
  }
});
