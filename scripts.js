let main = document.querySelector("#main");

// creates a 16x16 grid of empty divs
function initialiseGrid() {

    // appends 16 "row-div" to #main
    for (let rowIndex = 0; rowIndex < 16; rowIndex++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        main.appendChild(rowDiv);
    }

    // appends 16 "row-item" to each "row-div"
    let gridRows = document.getElementsByClassName("row-div");
    
    for (let gridRow = 0; gridRow < 16; gridRow++) {
        for (let columnIndex = 0; columnIndex < 16; columnIndex++) {
            let columnDiv = document.createElement("div");
            columnDiv.classList.add("row-item");
            gridRows[gridRow].appendChild(columnDiv);
        }
    }
}
initialiseGrid();