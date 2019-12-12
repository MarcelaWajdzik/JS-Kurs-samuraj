const square = document.querySelector('.square');
let size = 20
square.style.width = size + 'px';
square.style.height = size + 'px';
let grow = true;


window.addEventListener('scroll', function () {
    if (size > window.innerWidth / 5) {
        grow = false
    } else if (size <= 0) {
        grow = true
    }

    if (grow == true) {
        size += 4;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    } else {
        size -= 4;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    }

})