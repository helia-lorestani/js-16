// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const stars = document.querySelectorAll(".stars i");

function change() {
  this.classList.toggle("active");
}

stars.forEach((star) => {
  star.addEventListener("click", change);
});
