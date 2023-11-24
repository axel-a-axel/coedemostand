// Function to create cells for the second grid

/*

function createCells() {
    const secondGridContainer = document.getElementById('second-grid-container');

    for (let i = 0; i < 2; i++) {
        // Fetch a random cat fact from the API
        $.get("https://catfact.ninja/fact", function(data) {
            const newCell = document.createElement('div');
            newCell.className = 'grid-cell';
            newCell.innerHTML = `<div class="title">Did you know, that...</div>
                                <p>${data.fact}</p>`;
            secondGridContainer.appendChild(newCell);
        });
    }
}


function executeChanges() {
    const action = getRandomAction2();
    const loadingIndicatorChanges = document.getElementById('loadingIndicatorChanges');
    const buttonTextChanges = document.getElementById('buttonTextChanges');

    // Show loading indicator in the "Changes!" button
    loadingIndicatorChanges.style.display = 'inline-block';
    buttonTextChanges.style.display = 'none';

    if (action === 'ChangeContent') {
        changeContent();
    } else {
        changeId();
    }
}

function changeContent() {
    const secondGridCells = document.querySelectorAll('#second-grid-container .grid-cell');
    if (secondGridCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * secondGridCells.length);
        const randomCell = secondGridCells[randomIndex];

        // Fetch a random cat fact from the API
        $.get("https://catfact.ninja/fact", function(data) {
            // Update the content in the selected cell
            randomCell.innerHTML = `<div class="title">Did you know, that...</div>
                                     <p>${data.fact}</p>`;
        });
    }

    // Reset the button state
    resetChangesButtonState();
}

function changeId() {
    const secondGridCells = document.querySelectorAll('#second-grid-container .grid-cell');
    if (secondGridCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * secondGridCells.length);
        const randomCell = secondGridCells[randomIndex];

        // Change the ID of the selected cell to the current timestamp
        randomCell.id = Date.now().toString();
    }

    // Reset the button state
    resetChangesButtonState();
}

function resetChangesButtonState() {
    const loadingIndicatorChanges = document.getElementById('loadingIndicatorChanges');
    const buttonTextChanges = document.getElementById('buttonTextChanges');

    // Hide loading indicator and show button text
    loadingIndicatorChanges.style.display = 'none';
    buttonTextChanges.style.display = 'inline';
}

// Function to get a random action for changes
function getRandomAction2() {
    return Math.random() < 0.5 ? 'ChangeContent' : 'ChangeId';
}

// Initial creation of cells for the second grid when the page is opened
createCells();

*/