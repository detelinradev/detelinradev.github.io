// JavaScript to toggle the visibility of the 'More About Me' section

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const moreContent = document.getElementById('moreContent');

    // Add click event listener to the button
    toggleButton.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            toggleButton.textContent = 'Hide Details';
        } else {
            moreContent.style.display = 'none';
            toggleButton.textContent = 'Show Details';
        }
    });

    // Initially hide the content
    moreContent.style.display = 'none';
    toggleButton.textContent = 'Show Details';
});
