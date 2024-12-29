/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/
const button1 = document.querySelector(".icon1");
const button2 = document.querySelector(".icon2");
const button3 = document.querySelector(".icon3");
const button4 = document.querySelector(".icon4");
const text = document.querySelector("input");
text.style.fontSize = "20px";

button1.addEventListener("click", () => {
  text.value = text.value.slice(0, -1);
});
button2.addEventListener("click", () => {
  text.value = "";
});
button3.addEventListener("click", () => {
  text.style.fontWeight = "800";
});
button4.addEventListener("click", () => {
  text.style.fontStyle = "italic";
});
