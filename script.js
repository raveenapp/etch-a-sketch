//create div for canvas
const container = document.querySelector('#container');
const containerColour = container.style.backgroundColor = "red";
const size = 100;
const windowWidth = 600;
const windowWidth2 = windowWidth + size*2;
const containerWidth = container.style.width = `${windowWidth2}px`;
const containerHeight = container.style.height = `${windowWidth2}px`;


const cellwidth = windowWidth/size;

function changeColor(e) {
    e.target.style.backgroundColor = "blue";
}

function createGridElement(cellwidth) {
    const gridElement = document.createElement('div');
    const gridElementColor = gridElement.style.backgroundColor = "white";
    const gridElementWidth = gridElement.style.width = `${cellwidth}px`;
    const gridElementHeight = gridElement.style.height = `${cellwidth}px`;
    const gridElementBorder = gridElement.style.border = "1px solid black";

    gridElement.classList.add("gridelement");

    container.appendChild(gridElement); 

    gridElement.addEventListener("mouseover", changeColor);
};

function createGrid(size) {
    for (i=0; i < (size*size); i++) {
        createGridElement(cellwidth);
    }
    
};


createGrid(size);