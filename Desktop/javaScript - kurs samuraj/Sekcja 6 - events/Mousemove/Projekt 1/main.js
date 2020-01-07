const header = document.querySelector('h1')

document.body.addEventListener('mousemove', event => {
    const xAxis = event.clientX + 1
    const yAxis = event.clientY + 1
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const red = xAxis / windowWidth * 100
    const green = yAxis / windowHeight * 100
    const blue = ((xAxis / windowWidth * 100) + (yAxis / windowHeight * 100)) / 2

    header.innerText = `${ xAxis}, ${yAxis}`
    document.body.style.backgroundColor = `rgb(${red}% ${green}% ${blue}%)`


})