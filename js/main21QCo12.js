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