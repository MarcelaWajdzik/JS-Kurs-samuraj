function showAllArguments(...items) {
    console.log(items);
    return items
}
//arguments zwraca obiekt
//metoda rest do funkcji, zwraca zmienne w tablicy
//wspolne cechy  posiada długosc oraz indexy
// rest-ma wicej mozliwosci
showAllArguments('1', 2, 34, 56, true, 'zosia')


function addAllWords(...words) {
    let txt = ' ';
    for (let i = 0; i < words.length; i++) {
        txt += `${words[i]} `
    }
    console.log(txt);

}

addAllWords('kasia', 'ja', 'michal')

function allWords(...newWords) {
    newWords.forEach(e => txt += e)
    console.log(newWords);

}



/* function allWords(...newWords) {
    let newtext = ''
    newWords.forEach(function (e) {
        txt += e;

    })
} */

allWords(3, 4, 6, 24, 'kasia', true)

/* e - elemnt tablicy. gdy wywołamy funkcje allWords i podamy parametry do niej  to metoda rest umiesci je w  tablicy mozna wiec wykonacnaniej metodae forEach. dla kazdego elemntu tablicy ykonaj funkcje  */