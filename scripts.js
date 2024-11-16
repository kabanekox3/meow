let main = document.querySelector("#main");

let gridSizeButton = document.createElement("button");
main.appendChild(gridSizeButton);
gridSizeButton.classList.add("button");
gridSizeButton.textContent = "Change grid size";

gridSizeButton.addEventListener("click", () => {
    let gridSize = prompt("Enter new row length");
    rowLength = Number(gridSize);
    initialiseGrid(rowLength);
})

// creates a rowLength x rowLength grid of empty divs
function initialiseGrid(rowLength) {

    gridExists = checkIfGridExists();
    if (gridExists == true) {
        deleteGrid();
    }

    createGrid();

    gridContainer = document.querySelector(".grid-container");

    // appends 16 "row-div" to #main
    for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        gridContainer.appendChild(rowDiv);
    }

    // appends 16 "row-item" to each "row-div"
    let gridRows = document.getElementsByClassName("row-div");
    
    for (let gridRow = 0; gridRow < rowLength; gridRow++) {
        for (let columnIndex = 0; columnIndex < rowLength; columnIndex++) {
            let columnDiv = document.createElement("div");
            columnDiv.classList.add("row-item");
            //let itemStyle = generateRandomColour();
            //columnDiv.style.backgroundColor = itemStyle;
            gridRows[gridRow].appendChild(columnDiv);
        }
    }
}

function checkIfGridExists () {
    let grid = document.querySelector(".grid-container");
    if (grid == null) {
        return false
    } else {
        return true
    }
}

function deleteGrid () {
    let grid = document.querySelector(".grid-container");
    grid.innerHTML = "";
    grid.remove();
}

function createGrid () {
    let gridContainer = document.createElement("div");
    main.appendChild(gridContainer);
    gridContainer.classList.add("grid-container");
}

// returns string
function generateRandomColour () {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let outputRGB = `rgb(${red}, ${green}, ${blue})`;
    return outputRGB;
}