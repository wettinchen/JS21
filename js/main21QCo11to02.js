// DOM - Document Object Model
const view1 = document.getElementById("view1");

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for(let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}