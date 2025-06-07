const SIZE = 16;

const gridContainer = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < SIZE; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for (let i = 0; i < SIZE; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    }
}

createGrid();