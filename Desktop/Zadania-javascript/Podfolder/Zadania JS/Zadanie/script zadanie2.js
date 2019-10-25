function sortString(napis) {

    let newString = napis.split("");
    let splitString = newString.sort();
    let joinString = splitString.join('')
    return joinString
}

console.log(sortString("Akademia 108"))