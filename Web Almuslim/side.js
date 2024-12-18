function showContent(topic) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected content section
    const selectedSection = document.getElementById(topic);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Check the URL hash on page load
window.onload = function() {
    const hash = window.location.hash.substring(1); // Get the hash without the '#'
    if (hash) {
        showContent(hash);
    }
};