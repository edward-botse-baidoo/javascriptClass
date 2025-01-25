const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/lightlogo.png") {
    myImage.setAttribute("src", "./images/darklogo.png");
  } else {
    myImage.setAttribute("src", "./images/lightlogo.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to Dev2Dev, ${myName}`;
  }

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Dev2Dev, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
  });