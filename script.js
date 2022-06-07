function reconfigGrid() {
    // Get new grid dimensions from user prompt (convert/cast to an integer from string)
    res = Number(prompt("Dimensions? (dimensions <= 100 or dimensions >= 16)"))
    mainDiv.removeChild(grid)
    // If user input provided and less than or equal
    //  to 100 and greater than or equal to 16,
    //  createGrid with provided argument else 
    //  createGrid with default resolution (16x16)
    
    // Remove the cell class rules before replacing in function
    styleSheet.deleteRule(styleSheet.cssRules.length-1)
    styleSheet.deleteRule(styleSheet.cssRules.length-1)
    if (res && (res <= 100)) {
        createGrid(res, defaultColor);
        resDisp.textContent = `${res}x${res}`;
    } else {
        createGrid(defaultRes, defaultColor);
        resDisp.textContent = `${defaultRes}x${defaultRes}`
    }
}

function changeGridColor() {
    selColor = document.getElementById("color").value;
    mainDiv.removeChild(grid);
    // Remove the cell class rules before replacing in function
    styleSheet.deleteRule(styleSheet.cssRules.length-1)
    styleSheet.deleteRule(styleSheet.cssRules.length-1)
    console.log(`After deleting rules:`, styleSheet.cssRules)
    if (res) {
        console.log("Okay")
        createGrid(res, selColor);
    } else {
        createGrid(defaultRes, selColor);
    }
}

function resetGrid() {
    mainDiv.removeChild(grid)
    createGrid(defaultRes, defaultColor)
    resDisp.textContent = `${defaultRes}x${defaultRes}`
}

function createGrid(res, color) {
    // Create the grid div
    const grid = document.createElement("div")

    // Set the id for the grid
    grid.id = "grid"
    
    // Append the grid box/div to the main div
    mainDiv.appendChild(grid)

    for (let i = 0; i < res; i++) {
        let row = document.createElement("div")
        row.setAttribute("style", "display: flex; height: 100%;")
        for (let x = 0; x < res; x++) {
            let box = document.createElement("div")
            box.classList.add("cell")
            row.appendChild(box);
        }
        grid.appendChild(row);
    }

    let cssRulesLen = styleSheet.cssRules.length

    console.log(styleSheet.cssRules)
    
    // ==== These rules are for a drawing trail effect ==== //
    // styleSheet.insertRule(".cell:hover {opacity: 1; transition: opacity\
    //     0.2s ease; transform: scale(1.04);", cssRulesLen)

    // styleSheet.insertRule(`.cell {width: 100%; height: 100%; opacity: 0;\
    // transition: opacity 2s ease 0.4s, transform 0.8s ease; \ 
    // background-color: ${color}}`, cssRulesLen)
    
    styleSheet.insertRule(`.cell {width: 100%; height: 100%;\
        background-color: transparent; border: 0.5px solid black}`, cssRulesLen)
    
    grid.addEventListener("mouseover", function (e) {if (e.target.matches('.cell')) {
        e.target.classList.add('active');
      }})
    
    styleSheet.insertRule(`.cell.active {background-color: ${color}}`, cssRulesLen)
    // Checking the style rules were applied
    console.log(styleSheet.cssRules)
}

// Get the style sheet
const styleSheet = document.styleSheets[0]

// Get the main div
const mainDiv = document.getElementById("main")

// Default: Create 16x16 grid
const defaultRes = 16

// Default color: black
const defaultColor = "black"

// User picked color and resolution
let selColor;
let res;

const resDisp = document.getElementById("res")

resDisp.textContent = `${defaultRes}x${defaultRes}`

createGrid(defaultRes, defaultColor)