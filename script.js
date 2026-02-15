// 1. THEME SWITCHER LOGIC (Updated for 3D Knob)
const themeToggle = document.querySelector('#theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeToggle.checked = true;
    }
}

themeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// 2. CONTACT MODAL LOGIC
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-modal');
const contactButtons = document.querySelectorAll('#nav-contact-btn, #footer-contact-btn');

// Open Modal
contactButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('active');
    });
});

// Close Modal (via X or clicking outside)
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// 3. COPY TO CLIPBOARD HELPER
function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = "COPIED!";
        btn.style.borderColor = "var(--accent)";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.borderColor = "";
        }, 2000);
    });
}

// 4. INITIALIZE 3D TILT (Vanilla Tilt)
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10,
    speed: 600,
    glare: true,
    "max-glare": 0.2,
    gyroscope: true,
    scale: 1.02
});

// 5. CINEMATIC BACKGROUND PARALLAX
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const scissors = document.querySelector('.scissor-icon');
    const timecode = document.querySelector('.timecode');
    const skewCont = document.querySelector('.skew-container');
    
    // Scissor follows scroll slowly
    if(scissors) scissors.style.transform = `translateY(${scrolled * 0.1}px) rotate(-15deg)`;
    
    // Timecode floats up
    if(timecode) timecode.style.transform = `translateY(${scrolled * -0.2}px)`;
    
    // Subtle shift in the background skew
    if(skewCont) skewCont.style.transform = `skewY(-5deg) translateY(${scrolled * 0.05}px)`;
});

// 6. DEVELOPER SIGNATURE
console.log("%c YOHANNES SHIFERAW %c VIDEO EDITOR ", 
            "background: #00f2ff; color: #000; font-weight: bold; padding: 5px;", 
            "background: #333; color: #fff; padding: 5px;");
