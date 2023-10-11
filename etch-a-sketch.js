function changeColor(e){
    document.body.style.backgroundColor = "black";
}
function makeGrid(boxNum){
    for(let i = 0; i < boxNum; i++)
    {
        etch.appendChild(document.createElement("div"));
    }

    const addClass = document.querySelectorAll("div > div");
    addClass.forEach((div) => {
        div.classList.add('box');
        console.log(div);
    });
}

const etch = document.getElementById("container");

makeGrid(256);

const square = document.querySelectorAll(".box");
square.forEach(square => square.addEventListener("mouseover", changeColor));