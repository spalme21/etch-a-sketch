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
};

createGrid(edge);

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});