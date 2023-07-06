// DOM - Document Object Model
const view1 = document.getElementById("view1");
const view2 = document.querySelector("#view2");

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");

for(let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
}

const navText = document.querySelector("nav h1");
navText.textContent = "Hello World!";


const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.`;
navbar.style.justifyContent = "space-between";


console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);