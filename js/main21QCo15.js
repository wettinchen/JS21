// DOM - Document Object Model
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
navbar.style.justifyContent = "space-between";

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view1.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
    view2.lastChild.remove();
}