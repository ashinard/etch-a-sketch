function makeGrid(gridSize){
    for(let i = 0; i < (gridSize * gridSize); i++)
    {
        bigBox.appendChild(document.createElement("div"));
    }
    const smallBox = document.querySelectorAll("div > div");

    smallBox.forEach((div) => {
        div.classList.add('box');
        console.log(div);
    })
}

function changeColor(e){
    if(e.target.style.backgroundColor != "black")
    {
        e.target.style.backgroundColor = "black";
        console.log(e.target.style.backgroundColor);
    }
}

function newGrid(){
    let boxNum = Number.parseInt(prompt("How many boxes on each side?"));
    console.log(boxNum);

    while(Number.isInteger(boxNum) === false || boxNum > 100)
    {
        boxNum = Number.parseInt(prompt("Please enter a valid number of boxes."));
    }

    let newSize = (512 / boxNum) - 1.5;

    boxes.forEach(boxes => boxes.remove());
    makeGrid(boxNum);
    boxes = document.querySelectorAll(".box");
    boxes.forEach(boxes => boxes.style.width = `${newSize}px`);
    boxes.forEach(boxes => boxes.style.height = `${newSize}px`);
    console.log(newSize);
    boxes.forEach(boxes => boxes.addEventListener("mouseover", changeColor));
}

const bigBox = document.getElementById("container");
makeGrid(16);

let boxes = document.querySelectorAll(".box");
boxes.forEach(boxes => boxes.addEventListener("mouseover", changeColor));

const pressMe = document.getElementById("change");
pressMe.addEventListener("click", newGrid);
