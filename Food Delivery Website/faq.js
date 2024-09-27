document.addEventListener('DOMContentLoaded', function () {
    // Get all accordion buttons
    const accordions = document.querySelectorAll('.accordion');

    // Add click event listener to each accordion button
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            // Toggle the active class on the clicked button
            this.classList.toggle('active');

            // Get the associated panel
            const panel = this.nextElementSibling;

            // Check if the panel is already open
            if (panel.style.maxHeight) {
                // Panel is open, so close it
                panel.style.maxHeight = null;
                panel.style.padding = '0';
            } else {
                // Panel is closed, so open it
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.style.padding = '1.5rem';
            }
        });
    });
});
