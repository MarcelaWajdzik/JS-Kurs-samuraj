let fontSize = 10;
let numberElement = 0;

const init = () => {
    let btn = document.createElement('button')
    let btnRest = document.createElement('button')
    let ul = document.createElement('ul')
    btn.innerText = "Dodaj elementy";
    btnRest.innerText = "Wyzeruj";
    document.body.appendChild(btn)
    document.body.appendChild(btnRest)
    document.body.appendChild(ul)
    btn.addEventListener('click', createElement)
    btnRest.addEventListener('click', cleanElement)

}
const createElement = () => {

    for (let i = 0; i < 10; i++) {
        let newLi = document.createElement('li')
        newLi.style.fontSize = `${fontSize++}px`
        newLi.innerHTML = `Element ${numberElement++}`
        document.querySelector('ul').appendChild(newLi)

    }
}

const cleanElement = () => {
    document.querySelector('ul').innerText = ''
}
init()