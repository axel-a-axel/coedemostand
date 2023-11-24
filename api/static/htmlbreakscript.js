function getRandomAction() {
    return Math.random() < 0.5 ? 'Add' : 'Delete';
}

function addCell() {
    const gridContainer = document.getElementById('grid-container');

    // Fetch a random cat fact from the API
    $.get("https://catfact.ninja/fact", function(data) {
        const newCell = document.createElement('div');
        newCell.className = 'grid-cell cell-enter';
        newCell.innerHTML = `<div class="title">Did you know, that...</div>
                             <p>${data.fact}</p>`;
        gridContainer.appendChild(newCell);

        // Remove the 'cell-enter' class after the animation completes
        setTimeout(() => {
            newCell.classList.remove('cell-enter');
            // Scroll to the bottom of the page after adding cells
            window.scrollTo(0, document.body.scrollHeight);
            // Reset the button state
            resetButtonState();
        }, 120);
    });
}

function deleteCell() {
    const gridContainer = document.getElementById('grid-container');
    if (gridContainer.children.length > 0) {
        const randomIndex = Math.floor(Math.random() * gridContainer.children.length);
        const removedCell = gridContainer.children[randomIndex];
        removedCell.classList.add('cell-exit');

        // Remove the cell after the animation completes
        setTimeout(() => {
            gridContainer.removeChild(removedCell);
            // Scroll to the top of the page after deleting cells
            window.scrollTo(0, 0);
            // Reset the button state
            resetButtonState();
        }, 120);
    } else {
        // If there are no cells, reset the button state immediately
        resetButtonState();
    }
}

function resetButtonState() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const buttonText = document.getElementById('buttonText');

    // Hide loading indicator and show button text
    loadingIndicator.style.display = 'none';
    buttonText.style.display = 'inline';
}

function refreshGrid() {
    const action = getRandomAction();
    const loadingIndicator = document.getElementById('loadingIndicator');
    const buttonText = document.getElementById('buttonText');

    // Show loading indicator in the button
    loadingIndicator.style.display = 'inline-block';
    buttonText.style.display = 'none';

    if (action === 'Add') {
        addCell();
    } else {
        deleteCell();
    }
}

// Initial load of the grid
refreshGrid();
