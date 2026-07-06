document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const ctaButton = document.getElementById('start-planning-btn');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // CTA button click
    ctaButton.addEventListener('click', () => {
        document.querySelector('#destinations').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Simple Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .timeline-item').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
