// Initialize Particles.js background logic
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 85, "density": { "enable": true, "value_area": 1000 } },
        "color": { "value": "#00ffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.4, "random": true, "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 2, "random": true, "anim": { "enable": true, "speed": 1, "size_min": 0.4, "sync": false } },
        "line_linked": { "enable": true, "distance": 110, "color": "#00ffff", "opacity": 0.05, "width": 1 },
        "move": { "enable": true, "speed": 0.4, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "resize": true },
        "modes": { "grab": { "distance": 120, "line_linked": { "opacity": 0.2 } } }
    },
    "retina_detect": true
});

// Animate skill progress matrix fillings on load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
    });
});