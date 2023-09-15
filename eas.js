// Define container and grid
const container = document.getElementById('container');

// Slider and slider values added here

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value + ' x ' + slider.value; // Display the default slider value

// Variable for choice of RGB checkbox, to be implemented on hovering
let rgbChoice = false;

function random_rgba() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function toggleRGB(checkboxElem) {
    rgbChoice = checkboxElem.checked
}


// Create columns and rows of grid
function createGrid(grid_size){
    const grid = document.createElement('div');
    grid.id = 'grid';
    for(let i = 0; i < grid_size; i++){
        // Create column elements
        let column = document.createElement('div');
        column.className = 'row';

        // For each column element, append 16 row elements
        for(let j = 0; j < grid_size; j++){
            const row = document.createElement('div');
            row.className = 'column';
            column.appendChild(row);  
        }
        grid.appendChild(column);
    }

    // Append new columns and rows to grid
    container.appendChild(grid);

    // Add hover functionality to grid
    const columns = document.querySelectorAll('.column');

    columns.forEach((col)  => {
            col.addEventListener('mouseover', () => {
                col.classList.add('fill');
                if (rgbChoice) {
                    col.style.backgroundColor = random_rgba();
                } else {
                    col.style.backgroundColor = 'black';
                }
            })
            col.style.height = String(600/grid_size) + 'px';
            col.style.width = String(600/grid_size) + 'px';
        }
    );
}


function resetGrid(grid_size){
    oldGrid = document.getElementById('grid');
    oldGrid.remove();
    createGrid(grid_size);
}

// Update the current slider value (each time you drag the slider handle)

slider.oninput = function() {
    
    resetGrid(slider.value);
    output.innerHTML = (this.value + ' x ' + this.value);
    
};

createGrid(slider.value);
