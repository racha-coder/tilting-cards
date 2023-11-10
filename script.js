

const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
    tiltEffect(e, container);
});

function tiltEffect(event, element) {
    // Get the position of the cursor / mouse
    const x = event.clientX;
    const y = event.clientY;
    // Finding the Middle point of the window
    const middleX  = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // Finding the offset from the middle
    const offsetX = ((x - middleX) / middleX) * 40;
    const offsetY = ((y - middleY) / middleY) * 40;

    // Updating the elements rotation
    element.style.setProperty("--rotateX", -offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}
