//? look at the code in html file and say how we can attach an event to all of the buttons without actually giving it to them and selecting the button tag? write it's code .
//Note: your code should log the text content of the clicked button to the console.

// ! answer ===========================================

// Choose a parent element that contains all the buttons. Attach a click event listener to the parent element.Inside the event handler, check if the clicked target is a button. If it is, log its text content to the console

const parent = document.querySelector(".parent");
parent.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked:", event.target.textContent);
  }
});
