let x = 100;

document.body.style.backgroundColor = `rgb(${x} ${x} ${x})`

/* window.addEventListener('keydown', (e) => {

    if (e.keyCode == 38 && x <= 255) {
        document.body.style.backgroundColor = `rgb(${x++} ${x++} ${x++})`

    } else if (e.keyCode == 40 && x >= 0) {
        document.body.style.backgroundColor = `rgb(${x--} ${x--} ${x--})`
    }

}) */

window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${x < 255 ? x++ : x } ${x} ${x})`;
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${x > 0 ? x-- : x} ${x} ${x})`;
            console.log(x);

            break;
    }


})