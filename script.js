// Get the grid div
const grid = document.getElementById("grid")

for (let i = 0; i < 257; i++) {
    let div = document.createElement("div")
    div.setAttribute("style", "width: 200px; height: 200px; border: 1px dashed black;")
    grid.appendChild(div)
    delete div
}