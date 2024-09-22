// script.js
particlesJS('particles-js',
{
    "particles": {
        "number": {
            "value": 80, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800 // Density of particles
            }
        },
        "color": {
            "value": "#61dafb" // Particle color
        },
        "shape": {
            "type": "circle", // Particle shape
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150, // Distance between particles
            "color": "#61dafb", // Line color
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6, // Speed of particle movement
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" // Particles grab on hover
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Particles push on click
            },
            "resize": true
        }
    },
    "retina_detect": true
});
