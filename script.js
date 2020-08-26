//create div for canvas
const container = document.querySelector('#container');
const containerColour = container.style.backgroundColor = "red";
const size = Number(prompt("How many pixels wide do you want the canvas to be? (default: 16)", "16"));
const windowWidth = 600;
const windowWidth2 = windowWidth + size*2;
const containerWidth = container.style.width = `${windowWidth2}px`;
const containerHeight = container.style.height = `${windowWidth2}px`;

const resetButton = document.querySelector('#reset');
const changeButton = document.querySelector('#change');

//scales the grid 
const cellwidth = windowWidth/size;

function changeColor(e) {
    e.target.style.backgroundColor = "blue";
}



//creates an individual cell and appends it to the container
function createGridElement(cellwidth) {
    const gridElement = document.createElement('div');
    const gridElementColor = gridElement.style.backgroundColor = "white";
    const gridElementWidth = gridElement.style.width = `${cellwidth}px`;
    const gridElementHeight = gridElement.style.height = `${cellwidth}px`;
    const gridElementBorder = gridElement.style.border = "1px solid black";

    gridElement.classList.add("gridelement");

    container.appendChild(gridElement); 

    gridElement.addEventListener("mouseover", changeColor);
    
    resetButton.addEventListener("click", resetElement);

    

    function resetElement() {
       gridElement.style.backgroundColor = "white";
    };

  



};


changeButton.addEventListener("click", deleteGrid);

function deleteGrid() {
    location.reload();
 };

//creates as many cells as needed
function createGrid(size) {
    for (i=0; i < (size*size); i++) {
        createGridElement(cellwidth);
    }
    
};

createGrid(size);


/* //creates an individual cell and appends it to the container
function createGridElement(cellwidth) {
    const gridElement = document.createElement('div');
    const gridElementColor = gridElement.style.backgroundColor = "white";
    const gridElementWidth = gridElement.style.width = `${cellwidth}px`;
    const gridElementHeight = gridElement.style.height = `${cellwidth}px`;
    const gridElementBorder = gridElement.style.border = "1px solid black";

    gridElement.classList.add("gridelement");

    container.appendChild(gridElement); 

    gridElement.addEventListener("mouseover", changeColor);
    
    resetButton.addEventListener("click", removeGridElement);

    function removeGridElement() {
        container.removeChild(gridElement);
    };

};


//creates as many cells as needed
function createGrid(size) {
    for (i=0; i < (size*size); i++) {
        createGridElement(cellwidth);
    }
    
};

createGrid(size); */