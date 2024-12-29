// ? Remember domthis.js from your session?
// todo1: Look at the code below, fix it, and explain how you resolved the problem.
// Note: In this code, console.log and console.dir should refer to the button and h1 element, not the window.

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r} ${g} ${b})`;
};

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    console.dir(e.target);
    e.target.style.backgroundColor = makeRandColor();
    e.target.style.color = makeRandColor();
  });
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
  h1.addEventListener("click", (e) => {
    console.log(e.target);
    console.dir(e.target);
    e.target.style.backgroundColor = makeRandColor();
    e.target.style.color = makeRandColor();
  });
}
