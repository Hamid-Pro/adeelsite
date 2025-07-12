document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add a subtle animation/class when scrolling
    // (This is a basic example, full intersection observer logic might be better for complex animations)
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add a class for CSS animation
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
