//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:
const button = document.querySelector(".cards__card__footer__btn button ");
const buttonP = document.querySelector(".cards__card__footer__btn button p");
const buttonIcon = document.querySelector(".cards__card__footer__btn button i");
button.addEventListener("click", () => {
  buttonP.innerHTML = "Added to Cart";
  buttonIcon.style.display = "none";
  button.disabled = true;
});
