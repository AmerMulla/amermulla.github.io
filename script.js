document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute("href"));
            const headerOffset = document.querySelector("header").offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // Education Tab Hover Effect (JavaScript Handling)
    const educationTabs = document.querySelectorAll('.education-tab');

    educationTabs.forEach(tab => {
        tab.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)'; // Bulging effect on hover
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)'; // Adds shadow on hover
        });

        tab.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)'; // Resets the bulging effect
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Resets the shadow
        });
    });
});
