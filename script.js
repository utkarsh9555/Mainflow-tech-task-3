document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const navList = document.getElementById('nav-list');
    const menuToggle = document.getElementById('menu-toggle');
    const dynamicContentBtn = document.getElementById('load-content');
    const dynamicContentDiv = document.getElementById('dynamic-content');
    const formMessages = document.getElementById('form-messages');

    // Form validation and submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();

        if (validateForm(name, email)) {
            window.location.href = 'thankyou.html';
        } else {
            formMessages.textContent = 'Please fill out all fields correctly.';
        }
    });

    // Menu toggle
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Load dynamic content
    dynamicContentBtn.addEventListener('click', () => {
        dynamicContentDiv.innerHTML = '<p>Additional dynamic content loaded!</p>';
    });

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('is-lazyloaded');
        });
    });

    // Form validation function
    function validateForm(name, email) {
        // Basic validation
        if (name === '' || email === '') {
            return false;
        }
        
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return false;
        }
        
        return true;
    }
});
