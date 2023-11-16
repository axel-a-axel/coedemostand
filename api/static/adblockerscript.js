// script.js
function closeModal() {
    document.getElementById('adBlockModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    // Create a hidden element with common ad-related class names
    const testElement = document.createElement('div');
    testElement.className = 'ad ad-banner ad-box ad-badge';
    document.body.appendChild(testElement);

    // Check if the element is visible (not blocked by AdBlocker)
    if (window.getComputedStyle(testElement).display === 'none') {
        // AdBlocker detected, show the modal
        document.getElementById('adBlockModal').style.display = 'block';
    }

    // Clean up the test element
    document.body.removeChild(testElement);
});
