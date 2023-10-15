function changeColor(e){
    e.target.style.backgroundColor = "black";
    console.log(e.target.style.backgroundColor);
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

function newGrid(){
    let answer = prompt("How many boxes on each side?");
    console.log(answer);

    let sides = parseInt(answer);

    while(!(sides instanceof Number))
    {
        sides = prompt("Please enter a number. How many boxes per side?");
        console.log(sides);
    }

    square.forEach(square => square.remove());
    makeGrid(sides * sides);
    square.forEach(square => square.addEventListener("mouseover", changeColor));
}

const etch = document.getElementById("container");

makeGrid(256);

const square = document.querySelectorAll(".box");
square.forEach(square => square.addEventListener("mouseover", changeColor));

const size = document.getElementById("change");
size.addEventListener("click", newGrid);