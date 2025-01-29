// Initialize particles with random positions
function initParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        // Random initial position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Different animation delays
        particle.style.animationDelay = `${index * 0.5}s`;
    });
}

// GSAP Animations
function initAnimations() {
    const tl = gsap.timeline();
    
    tl.from('h1', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    })
    .from('p', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    }, '-=0.5')
    .from('.cta-button', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    }, '-=0.5');
}

// Mouse parallax effect
function initParallax() {
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.05;
            const x = (mouseX - 0.8) * 100 * speed;
            const y = (mouseY - 0.8) * 100 * speed;
            
            gsap.to(particle, {
                x: x,
                y: y,
                duration: 1,
                ease: 'power2.out'
            });
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initAnimations();
    initParallax();
});