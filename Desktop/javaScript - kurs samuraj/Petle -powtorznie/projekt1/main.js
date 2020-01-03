const btn = document.querySelector('button')

const ulLi = document.querySelectorAll('li')
let size = 10

/* btn.addEventListener('click', () => {
    let sizeLi = `${size}px`

    for (let i = 0; i < ulLi.length; i++) {
        ulLi[i].style.display = 'block'
        ulLi[i].style.fontSize = sizeLi
    }

    size++

}) */




btn.addEventListener('click', () => {
    let sizeLi = `${size}px`
    ulLi.forEach(e => {
        e.style.display = 'block'
        e.style.fontSize = sizeLi
    })

    size++

})