function makeRows(){ 
    for(let i = 0; i < 16; i++)
    {
        etch.appendChild(document.createElement("div"));
    }

    const addClass = document.querySelectorAll("div > div");
    addClass.forEach((div) => {
        div.classList.add('rows');
        console.log(div);
    });
}

function makeBoxes(){
    const rows = document.getElementsByClassName(".rows");

    const addClass = document.querySelectorAll('div > div > div');
    addClass.forEach((div) => {
        div.classList.add('blocks');
        console.log(div);
    });
}

function makeGrid(){
    makeRows();
    makeBoxes();
}

const etch = document.getElementById("container");

makeGrid();
