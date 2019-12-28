let size = 10000 + 'px';
let grow = true;
let height = 40

document.body.style.height = size;
document.body.style.padding = 0 + 'px'
document.body.style.margin = 0 + 'px'

let newDiv = document.createElement('div');
newDiv.style.height = height + 'px'
newDiv.style.width = '100%';
newDiv.style.position = 'fixed';
newDiv.style.top = 0 + 'px'
newDiv.style.left = 0 + 'px'
newDiv.style.backgroundColor = 'green'

document.body.appendChild(newDiv)


window.addEventListener('scroll', () => {
    if (height > window.innerHeight / 2) {
        grow = !grow
    } else if (height <= 0) {
        grow = !grow
    };

    if (grow) {
        height += 10
        newDiv.style.backgroundColor = 'green'
    } else {
        height -= 10
        newDiv.style.backgroundColor = 'red'
    }
    newDiv.style.height = height + 'px'
})