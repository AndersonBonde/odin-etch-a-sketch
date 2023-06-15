console.log("Start");

const container = document.querySelector(".container");

function createGrid() {
    for(let i = 0; i < 16*16; i++) {
        const newDiv = document.createElement("div");
        
        newDiv.classList.add("square");
        container.appendChild(newDiv);

        newDiv.addEventListener("mouseover", (e) => {
            e.target.style.opacity = 1;
        })
    }
}
createGrid();

