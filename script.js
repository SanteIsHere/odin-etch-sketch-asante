function reconfigGrid() {
    // Get new grid dimensions from user prompt (convert/cast to an integer from string)
    const res = Number(prompt("Dimensions? (100 or less px plz)"))
    mainDiv.removeChild(grid)
    // If user input provided and less than or equal
    //  to 100, createGrid with provided argument else 
    //  createGrid with default resolution (16x16)
    if (res && res <= 100) {
        createGrid(res);
        resDisp.textContent = `${res}x${res}`;
    } else {
        createGrid(defaultRes);
        resDisp.textContent = `${defaultRes}x${defaultRes}`
    }
}

function createGrid(res) {
    // Create the grid div
    const grid = document.createElement("div")

    // Set the id for the grid
    grid.id = "grid"

    // Append the grid box/div to the main div
    mainDiv.appendChild(grid)

    for (let i = 0; i < res; i++) {
        let row = document.createElement("div")
        row.setAttribute("style", "display: flex; height: 30px;")
        for (let x = 0; x < res; x++) {
            let box = document.createElement("div")
            box.classList.add("cell")
            row.appendChild(box)
        }
        grid.appendChild(row)
    }
    // Get the style sheet
    let styleSheet = document.styleSheets[0]
    styleSheet.insertRule(".cell {width: 100%; height: 100%; opacity: 0;\
    transition: opacity 2s ease 0.4s, transform 0.8s ease;\
    background-color: blue;}", 1)
    styleSheet.insertRule(".cell:hover {opacity: 1; transition: opacity\
    0.2s ease; transform: scale(1.04);", 2)
}


// Get the main div
const mainDiv = document.getElementById("main")

// Default: Create 16x16 grid
const defaultRes = 16

const resDisp = document.getElementById("res")

resDisp.textContent = `${defaultRes}x${defaultRes}`

createGrid(defaultRes)

// Checking the style rules were applied
// console.log(styleSheet.cssRules)