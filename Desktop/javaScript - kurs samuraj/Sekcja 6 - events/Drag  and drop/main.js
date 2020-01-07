let div = document.querySelector('.square')
let divGreen = document.querySelector('.squareGreen')
let banner = false
let xOff
let yOff

div.addEventListener('mousedown', (e) => {
    banner = !banner;
    div.style.backgroundColor = 'grey'
    xOff = e.offsetX
    yOff = e.offsetY
})

div.addEventListener('mousemove', (e) => {
    if (banner) {
        let x = e.clientX - xOff
        let y = e.clientY - yOff
        div.style.left = `${x}px `
        div.style.top = `${y}px `
    }

})
div.addEventListener('mouseup', () => {
    banner = !banner
    div.style.backgroundColor = 'black'
})


divGreen.addEventListener('mousedown', (e) => {
    banner = !banner;
    divGreen.style.backgroundColor = 'pink'
    xOff = e.offsetX
    yOff = e.offsetY
})

divGreen.addEventListener('mousemove', (e) => {
    if (banner) {
        let x = e.clientX - xOff
        let y = e.clientY - yOff
        divGreen.style.left = `${x}px `
        divGreen.style.top = `${y}px `
    }

})
divGreen.addEventListener('mouseup', () => {
    banner = !banner
    divGreen.style.backgroundColor = 'greenyellow'
})