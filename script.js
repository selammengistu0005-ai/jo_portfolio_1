// 1. THEME SWITCHER LOGIC
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// Check for saved user preference
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

// Function to switch theme
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Event Listener for the toggle
toggleSwitch.addEventListener('change', switchTheme, false);


// 2. INITIALIZE 3D TILT (Vanilla Tilt)
// This targets your Project Cards, Buttons, AND the new Profile Frame
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,            // Max tilt rotation
    speed: 400,         // Speed of the enter/exit transition
    glare: true,        // Adds the "glass" reflection
    "max-glare": 0.3,   // Max opacity of glare
    gyroscope: true,    // Mobile support
    scale: 1.05         // Slight zoom on hover
});


// 3. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 4. DYNAMIC BACKGROUND PARALLAX (Optional but Cool)
// This makes the "Scissors" and "VHS Text" move slightly when you scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const scissors = document.querySelector('.scissors');
    const vhsText = document.querySelector('.vhs-text');
    
    // Parallax speed calculation
    if(scissors) scissors.style.transform = `translateY(${scrolled * 0.2}px) rotate(-20deg)`;
    if(vhsText) vhsText.style.transform = `translateY(${scrolled * 0.1}px) skewX(-15deg)`;
});


// 5. DEVELOPER SIGNATURE
console.log("%c YOHANNES SHIFERAW %c VIDEO EDITOR ", 
            "background: #00f2ff; color: #000; font-weight: bold; padding: 5px;", 
            "background: #333; color: #fff; padding: 5px;");
