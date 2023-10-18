function changeColor(e){
    if(e.target.style.backgroundColor != "black")
    {
        e.target.style.backgroundColor = "black";
        console.log(e.target.style.backgroundColor);
    }
}

function makeGrid(boxNum){
    etch.style.setProperty('grid-template-columns', `repeat(${boxNum} , 1fr)`);
    
    boxNum *= boxNum;
    
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
    let sides = Number.parseInt(prompt("Please enter a number. How many boxes per side?"));
    console.log(Number.isInteger(sides));

    while(Number.isInteger(sides) === false)
    {
        sides = Number.parseInt(prompt("Please enter a number. How many boxes per side?"));
        console.log(sides);
    }

    square.forEach(square => square.remove());
    makeGrid(sides);
    let newSize = 512/sides;
    square = document.querySelectorAll(".box");
    square.forEach(square => square.addEventListener("mouseover", changeColor));
    square.forEach(square => square.style.width = `${newSize}px`);
    square.forEach(square => square.style.height = `${newSize}px`);
}

const etch = document.getElementById("container");

makeGrid(16);

let square = document.querySelectorAll(".box");
square.forEach(square => square.addEventListener("mouseover", changeColor));

const size = document.getElementById("change");
size.addEventListener("click", newGrid);