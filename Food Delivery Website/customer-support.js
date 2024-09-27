document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<span class="nav-toggle-icon">&#9776;</span>'; // Hamburger icon
    document.querySelector('.navbar .container').insertBefore(navToggle, document.querySelector('.navbar .container').firstChild);

    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Form Submission Confirmation
    const form = document.querySelector('.support-form form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission for demo purposes
            
            // Simulate form submission
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Display confirmation message (or handle form submission)
            alert(`Thank you, ${name}! Your message has been received.\nWe will get back to you at ${email}.`);

            // Clear the form fields
            form.reset();
        });
    }
});
