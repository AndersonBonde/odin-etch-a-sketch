console.log("Start");

const container = document.querySelector(".container");
const info = document.querySelector(".info");
const initialContainerWidth = container.offsetWidth;

function createGrid(width) {
    const squareSize = initialContainerWidth / width;

    for(let i = 0; i < width * width; i++) {
        const newDiv = document.createElement("div");

        newDiv.classList.add("square");
        newDiv.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
        newDiv.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
        newDiv.dataset.opacity = 0;
        container.appendChild(newDiv);

        newDiv.addEventListener("mouseover", (e) => {
            let value = +e.target.style.opacity;
            value += .1;
            e.target.style.opacity = value;
        })
    }
}

function resizeSquaresSize(numSquares) {
    createGrid(numSquares);
    updateSizeInfo(numSquares);
}
resizeSquaresSize(36);

function deleteAllSquares() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(curr => {
        curr.remove();
    });
}

function updateSizeInfo(width) {
    info.textContent = `${width} x ${width}`;
}

const resizeButton = document.querySelector(".resizeSquares");

resizeButton.addEventListener("click", () => {
    let value = prompt("How many squares per side would you like?");
    if(value > 100) value = 100;

    deleteAllSquares();
    resizeSquaresSize(value);
})

function randomNumber(number) {
    let value = Math.floor((Math.random() * number) + 1);

    return value;
}