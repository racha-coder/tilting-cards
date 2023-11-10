

const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
    tiltEffect(e, container);
});
document.addEventListener('mouseon', (e) => {
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
    const offsetX = ((x - middleX) / middleX) * 50;
    const offsetY = ((y - middleY) / middleY) * 50;

    // Calculating the shadow effect
    const shadowX = offsetX / 50;
    const shadowY = offsetY / 50;


    // Updating the elements rotation
    element.style.setProperty("--rotateX", -offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");

    
    element.style.setProperty("--translate-shadowX", shadowX + "rem");
    element.style.setProperty("--translate-shadowY", shadowY + "rem");

}
