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
