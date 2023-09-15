// Define container and grid
const container = document.getElementById('container');



// Slider and slider values added here

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value + ' x ' + slider.value; // Display the default slider value

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
                col.classList.add('fill')
            })
        }
    );
}

// Update the current slider value (each time you drag the slider handle)

slider.oninput = function() {
    
    oldGrid = document.getElementById('grid');
    oldGrid.remove();
    output.innerHTML = (this.value + ' x ' + this.value);
    createGrid(slider.value);
    // CSS Code
    document.documentElement.style.setProperty(`--hw`, `'15px'`);
    
};


document.documentElement.style.setProperty(`--height`, `'20px'`);
document.documentElement.style.setProperty(`--width`, `'10px'`);


createGrid(slider.value);
// Add hover effects to each element