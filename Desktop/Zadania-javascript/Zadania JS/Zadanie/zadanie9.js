let resultLetter = 0;

function letter(napis, parametrTwo) {
    for (let i = 0; i < napis.length; i++) {
        if (napis.charAt(i) === "a" || napis.charAt(i) === "A") {
            resultLetter += 1;
        }
    }
}

letter("Szkoła Programowania Akademia 108", "a");
console.log(`liczba = ${resultLetter}`);