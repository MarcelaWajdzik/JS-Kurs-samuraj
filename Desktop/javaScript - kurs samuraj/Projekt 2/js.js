const square = document.querySelector('.square');
let size = 20
let grow = true;


window.addEventListener('scroll', function () {
    if (size > window.innerWidth / 5) {
        grow = !grow //teraz grow =false
    } else if (size <= 0) {
        grow = !grow //teraz z flase zmienia sie na true
    }

    if (grow) {
        size += 4;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    } else {
        size -= 4;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    }

})