const btnAdd = document.querySelector('button');
let newNumber = 1;
const addElement = () => {
    const containerDiv = document.querySelector('.container-div')
    let newSquare = document.createElement('div');
    newSquare.innerText = newNumber;
    newSquare.classList.add('square');
    containerDiv.appendChild(newSquare)
    if (newSquare.innerText % 5 == 0) {
        newSquare.classList.add('circle');
    }
    newNumber++

}

btnAdd.addEventListener('click', addElement)
/* add new li */
const newBtn = document.querySelector('.addLi');
let newContentLi = 1;
const addLi = () => {
    const containerUl = document.querySelector('ul')
    let newLi = document.createElement('li');
    newLi.innerText = newContentLi;
    containerUl.appendChild(newLi)

    if (newLi.innerText % 3 == 0) {
        newLi.style.fontSize = "30px";
        newLi.style.fontWeight = 'bold';
        newLi.style.color = 'blue';
    }
    newContentLi += 2;
}

newBtn.addEventListener('click', addLi)