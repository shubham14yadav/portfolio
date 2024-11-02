// JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('contactForm').reset();
});

// Carousel scroll effect
document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', () => {
        window.open(item.querySelector('a').href, '_blank');
    });
});
