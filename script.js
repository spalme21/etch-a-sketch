let edge = 16;

const container = document.querySelector(".container");

function createGrid(dimension) {
    container.innerHTML = "";

    for (let i=0; i<dimension; i++) {
        const column = document.createElement("div");
        column.classList.add("column");

        for (let j=0; j<dimension; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            column.appendChild(square);
        };
        container.appendChild(column);
    };
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
};

createGrid(edge);



function reset() {
    do {
        edge = prompt("How many squares long should each side of the grid be? (Max 100)");
    } while (edge < 1 || edge > 100);

    createGrid(edge);
};

const btn = document.querySelector("button");
btn.addEventListener('click', reset);
