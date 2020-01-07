window.addEventListener('click', (e) => {
    const x = e.clientX
    const y = e.clientY
    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.background = "red";
    } else if (x % 2 == !0 && y % 2 == !0) {
        document.body.style.background = "blue";
    } else {
        document.body.style.background = "green";
    }
})



/* window.addEventListener('click', e => {
    const color = getColor(e)
    document.body.style.background = color
})
const getColor = e => {
    const x = e.clientX
    const y = e.clientY
    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.background = "red";
    } else if (x % 2 == !0 && y % 2 == !0) {
        document.body.style.background = "blue";
    } else {
        document.body.style.background = "green";
    }
} */