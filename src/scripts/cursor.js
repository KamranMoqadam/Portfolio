const cursor = document.querySelector('.cursor');
const  cursorinner = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e){
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
    cursorinner.style.left = e.clientX + 'px';
    cursorinner.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseover", () => {
        cursor.dataset.hover = "true";
    });
    link.addEventListener("mouseleave", () => {
        delete cursor.dataset.hover;
    });
})