console.log("Start");

const container = document.querySelector(".container");
const initialContainerWidth = container.offsetWidth;

function createGrid(width) {
    const squareSize = initialContainerWidth / width;

    for(let i = 0; i < width * width; i++) {
        const newDiv = document.createElement("div");

        newDiv.classList.add("square");
        newDiv.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
        container.appendChild(newDiv);

        newDiv.addEventListener("mouseover", (e) => {
            e.target.style.opacity = 1;
        })
    }
}
createGrid(48);

function resizeSquaresSize(numSquares) {
    createGrid(numSquares);
}

function deleteAllSquares() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(curr => {
        curr.remove();
    });
}

const resizeButton = document.querySelector(".resizeSquares");

resizeButton.addEventListener("click", () => {
    let value = prompt("How many squares per side would you like?");
    if(value > 100) value = 100;

    deleteAllSquares();
    resizeSquaresSize(value);
})