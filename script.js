const DEFAULT_SIZE = 16;

const gridContainer = document.querySelector(".container");
const resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", resizeGrid);

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for (let i = 0; i < size; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);

            box.addEventListener("mouseenter", () => {
                let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                box.style.backgroundColor = randomColor;
            });
        }
    }
}

function removeGrid() {
    gridContainer.replaceChildren();
}

function resizeGrid() {
    let newSize;
    let isValid = false;

    while (!isValid) {
        newSize = Number(prompt("Enter the new size (integer between 1 and 100):"));
        if ((!isNaN(newSize)) && ((newSize >= 1) && (newSize <= 100)) && (Number.isInteger(newSize))) {
            isValid = true;
        } else {
            alert("Invalid input. Try again.")
        }
    }

    removeGrid();
    createGrid(newSize);
}

createGrid(DEFAULT_SIZE);