// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
const messageIcon = document.querySelector(".message i");
const message = document.querySelector(".message");
messageIcon.addEventListener("click", () => {
  message.style.display = "none";
});
