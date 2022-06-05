// Get the grid div
const grid = document.getElementById("grid")

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div")
    row.setAttribute("style", "display: flex; border: 1px dashed black; width: 100%; height: 30px;")
    for (let x = 0; x < 16; x++) {
        let box = document.createElement("div")
        // box.setAttribute("style", "width: 100%; height: 100%; border: 1px solid blue;")
        box.classList.add("cell")
        row.appendChild(box)
    }
    grid.appendChild(row)
}

let styleSheet = document.styleSheets[0]
styleSheet.insertRule(".cell {width: 100%; height: 100%}")
styleSheet.insertRule(".cell:hover {border: 1px solid blue}")
// console.log(document.getElementsByClassName("cell"))