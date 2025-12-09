
// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Destaque no botão WhatsApp ao rolar
window.addEventListener('scroll', () => {
    const btn = document.querySelector('.whatsapp-btn a');
    if (window.scrollY > 300) {
        btn.style.backgroundColor = '#128C7E';
    } else {
        btn.style.backgroundColor = '#25d366';
    }
});
