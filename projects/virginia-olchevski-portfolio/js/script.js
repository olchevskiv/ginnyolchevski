/*const mouseCursor = document.getElementById("cursor");
const hoverables = document.querySelectorAll('.hover');
console.log(hoverables);
const cursor = (e) => {
    if (mouseCursor) {
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
    }
};

const onPoint = (e) => {
    mouseCursor.classList.add('mousedown')
};

const onEndPoint = (e) => {
    mouseCursor.classList.remove('mousedown')
};
window.addEventListener("mousemove", cursor);

hoverables.forEach(element => {
    element.addEventListener("mouseenter", onPoint);
    element.addEventListener("mouseleave", onEndPoint);
});
*/
//window.addEventListener("mousedown", onPoint);
//window.addEventListener("mouseup", onEndPoint);


const tracks = document.querySelectorAll('.box-carousel');
// --- Mouse Dragging Events (Desktop) ---
tracks.forEach(t => {
    t.addEventListener('mousedown', (e) => {
        isDown = true;
        t.classList.add('active'); // Used to change cursor style
        t.style.scrollBehavior = 'auto'; // Disable smooth scroll during dragging for instant response
        startX = e.pageX - t.offsetLeft;
        scrollLeft = t.scrollLeft;
    })
});


tracks.forEach(t => {
    t.addEventListener('mouseleave', () => {
        if (!isDown) return;
        isDown = false;
        t.classList.remove('active');
        t.style.scrollBehavior = 'smooth'; // Re-enable smooth scroll
    })
});

tracks.forEach(t => {
    t.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        t.classList.remove('active');
        t.style.scrollBehavior = 'smooth'; // Re-enable smooth scroll
    })
});

tracks.forEach(t => {
    t.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - t.offsetLeft;
        const walk = (x - startX) * 1.5; // Multiply by 1.5 to increase drag sensitivity
        t.scrollLeft = scrollLeft - walk;
    })
});