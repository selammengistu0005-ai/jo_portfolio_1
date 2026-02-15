// 1. INITIALIZE VANILLA TILT
// This targets all elements with 'data-tilt' in your HTML
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,          // Max tilt rotation (degrees)
    speed: 400,       // Speed of the enter/exit transition
    glare: true,      // Enables the 'reflection' effect
    "max-glare": 0.3, // Sets maximum glare opacity
    gyroscope: true,  // Allows tilting on mobile via device orientation
});

// 2. SMOOTH SCROLLING FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. MORPHIC CHARACTER DYNAMICS (Optional)
// This makes the glows follow the mouse slightly for extra depth
const cards = document.querySelectorAll('.project-card-container');

cards.forEach(card => {
    const blob = card.querySelector('.morphic-character');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Move the glowing blob slightly toward the mouse
        const moveX = (x - rect.width / 2) / 10;
        const moveY = (y - rect.height / 2) / 10;
        
        blob.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(1.1)`;
    });
    
    card.addEventListener('mouseleave', () => {
        blob.style.transform = `translate(-50%, -50%) scale(1)`;
    });
});

// 4. CONSOLE LOG BRANDING
console.log("%c YOHANNES SHIFERAW %c Portfolio 2026 ", 
            "background: #00f2ff; color: #000; font-weight: bold; padding: 5px;", 
            "background: #333; color: #fff; padding: 5px;");