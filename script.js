// script.js
document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background');
    
    // Calculate the mouse position relative to the window width and height
    let xPos = (e.clientX / window.innerWidth) - 0.5;
    let yPos = (e.clientY / window.innerHeight) - 0.5;
    
    // Move the background slightly based on the mouse position
    background.style.transform = `translate(${xPos * 50}px, ${yPos * 50}px) rotate(${xPos * 10}deg)`;
});
