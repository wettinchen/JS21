// DOM - Document Object Model
const view1 = document.getElementById("view1");

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for(let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.`;
console.log(navbar);

// navbar.style.justifyContent = "flex-start";
// navbar.style.justifyContent = "flex-end";
navbar.style.justifyContent = "space-evenly";
// navbar.style.justifyContent = "space-between";