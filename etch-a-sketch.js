function makeGrid(){
    for(let i = 1; i < 16; i++)
    {
        row.appendChild(block);
    }
    for(let i = 1; i < 16; i++)
    {
        etch.appendChild(row);
    }
}


const etch = document.getElementById("container");
const row = document.createElement("div");
row.className = "rows";
const block = document.createElement("div");
block.className = "blocks";

makeGrid();
