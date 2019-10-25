function newString(napis) {

    let newString = napis.split("");
    //argument = pusty string =>rozdziela stringa na pojedyncze znaki
    let reverseString = newString.reverse();
    //odwraca kolejnosc
    let joinString = reverseString.join("");
    /* laczy znaki w jeden string  bez cudzisłowia w srodu dodaje przecinek.mozna tez wstawic taminny separator np + */
    return joinString;

}

console.log(newString("Akademia 108"));