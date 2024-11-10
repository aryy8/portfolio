// script.js

document.addEventListener("DOMContentLoaded", function() {
    const projectsSection = document.getElementById('projects');
    const message = document.createElement('p');
    message.textContent = "Check out my latest projects below!";
    projectsSection.prepend(message);
});
