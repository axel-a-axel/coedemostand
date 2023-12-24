function fillCellsWithContent() {
  fetch('get_content')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const content = data.content;
        for (const cellId in content) {
          const cellData = content[cellId];
          const cell = document.getElementById(cellId);

          // Update image
          const imageElement = cell.querySelector('img');
          imageElement.src = cellData.image;

          // Update title
          const titleElement = cell.querySelector('h3');
          titleElement.textContent = cellData.title;

          // Update text
          const textElement = cell.querySelector('p');
          textElement.textContent = cellData.text;
        }
      } else {
        // Handle error scenario (e.g., show an error message)
        console.error('Error fetching content:', data.error);
      }
    })
    .catch(error => {
      console.error('Error fetching content:', error);
    });
}

fillCellsWithContent();

// SHOW MODAL AFTER 5 minutes
// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Set the timer for 3 hrs
    const timerDuration = 180 * 60 * 1000

    // Start the timer
    const timer = setTimeout(showModal, timerDuration);

    // Show the modal function
    function showModal() {
        // Display the modal
        document.getElementById('modal-container').style.display = 'block';

        // Clear the timer to prevent the modal from showing multiple times
        clearTimeout(timer);

        // Add an event listener to close the modal on click outside
        document.addEventListener('click', closeModalOutside);
    }

    // Close the modal function
    function closeModalOutside(event) {
        const modalContainer = document.getElementById('modal-container');
        if (!modalContainer.contains(event.target)) {
            // Click outside the modal, close it
            modalContainer.style.display = 'none';
            document.removeEventListener('click', closeModalOutside);
        }
    }
});

