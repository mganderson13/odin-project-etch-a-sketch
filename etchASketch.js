// get container
// set container size and wrap, 
//create gird boxes using loop, append to container
// set css so container is flexbox
// set (number) parameter to prompt input or 16 by default 
// set css to color square when hover and stay colored 

const container = document.querySelector("#container");
const button = document.querySelector("#promptButton");

let userInput;

button.addEventListener("click", () => {
    userInput = prompt("Enter the number of rows/columns you would like to see: ");
    container.innerHTML= "";
    createGrid(userInput);
})

function createGrid(number) {
    if (!number) {
        number = 16;
    }

    const size = 100 / number;

    for (let i = 0; i < number*number; i++) {
       const gridDiv = document.createElement("div");
       gridDiv.classList.add("gridDiv");
       gridDiv.style.flexBasis = `${size}%`;
       gridDiv.style.height = `${size}%`;
       gridDiv.addEventListener("mouseenter", () => {
        gridDiv.style.backgroundColor = "purple";
       })
       container.appendChild(gridDiv);
       
}
}

createGrid(userInput);