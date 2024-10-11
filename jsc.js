const body = document.querySelector("body");
body.setAttribute("style", "display: flex; flex-direction: column; gap: 16px;");

const button = document.createElement("button");
button.textContent = "Generate a new Grid";
body.appendChild(button);
button.setAttribute("style", `align-self: center;`);

let container = document.createElement("div");
container.class = "container";
body.appendChild(container);
container.setAttribute("style", "display: flex; height: 80vh; justify-content:center;");

let number = 0;
let counter = 0;
let sizeTotal = 800;
let rowGrid;
let columnGrid;

button.addEventListener('click', () => {
    number = parseInt(prompt("Please enter the number of square (A maximum of 100): "));
    if (number > 0 && number <= 100) {
        body.removeChild(container);

        container = document.createElement("div");
        container.class = "container";
        body.appendChild(container);
        container.setAttribute("style", "display: flex; height: 80vh; justify-content:center;");


        let sizeSquare = Math.floor(sizeTotal / number);



        for (let i = 1; i <= number; i++) {
            rowGrid = document.createElement("div");
            container.appendChild(rowGrid);
            rowGrid.setAttribute("style", `align-self: stretch; flex: 1 0 0; display: flex; flex-direction: column; justify-content:center; max-width: ${sizeSquare}px;`);
            for (let j = 1; j <= number; j++) {
                columnGrid = document.createElement("div");
                rowGrid.appendChild(columnGrid);
                columnGrid.setAttribute("style", `background-color: yellow; flex:1 0 0; align-self:stretch; max-height: ${sizeSquare}px; box-sizing: border-box; outline: 1px solid;`);
                counter++;
                columnGrid.setAttribute("id", `${counter}`);
            }
        }



        container.addEventListener('mouseover', (event) => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let target = event.target;
            let targetID = target.id;

            let square = document.getElementById(`${targetID}`);
            let opacityValue = window.getComputedStyle(square).getPropertyValue('opacity');
            opacityValue = opacityValue - 0.1 * opacityValue;
            console.log(opacityValue);
            square.setAttribute("style", `background-color: rgb(${r},${g},${b}); flex:1 0 0; align-self:stretch; max-height: ${sizeSquare}px; box-sizing: border-box; outline: 1px solid; opacity: ${opacityValue};`)

        })

        /*container.addEventListener('mouseout', (event) => {
            let target = event.target;
            let targetID = target.id;
    
            let square = document.getElementById(`${targetID}`);
            square.setAttribute("style", `background-color: yellow; flex:1 0 0; align-self:stretch; max-height: ${sizeSquare}px; box-sizing: border-box; outline: 1px solid;`)
    
        })*/
    }

})


