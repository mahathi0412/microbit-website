// Scroll reveal effect for coding sections
window.addEventListener('scroll', revealSections);

function revealSections() {
    const sections = document.querySelectorAll('.coding-section');

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionPosition < windowHeight - 50) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(100px)';
        }
    });
}

// Adding hover animations for syntax cards
const syntaxCards = document.querySelectorAll('.syntax-card');

syntaxCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
