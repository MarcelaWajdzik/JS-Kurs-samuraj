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