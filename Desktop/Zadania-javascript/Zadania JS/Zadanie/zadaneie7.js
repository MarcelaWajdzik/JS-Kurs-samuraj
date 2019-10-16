class Ksiazka {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
        this.newBook = function () {
            if (this.read === true) {
                return `Książka ma tytuł ${this.title}, autrem jest ${this.author} i została przeczytana.`
            } else {
                return `Książka ma tytuł ${this.title}, autrem jest ${this.author} i została nie przeczytana.`
            }
        }
    }
};
//tworzenie instancji
let bookOne = new Ksiazka("Mały Książe", "Antoine de Saint-Exupery", true);
let bookTwo = new Ksiazka("O psie który jeździł koleją", "Roman Pisarski", true);
let bookThree = new Ksiazka("UnF*CK yourself NAPRAW SIĘ!", "Bishop Gary John", false);

//stworzenie tablicy globalnej
let globalArr = [];
//dodanie do niej 3 instancji
globalArr.push(bookOne, bookThree, bookTwo);

// console.log(globalArr);
//okreslenie poczatkowej ilosci przeczytanych ksiazek
let onlyReadBooks = 0;

function iloscPrzeczytanych(globalArr) {
    globalArr.forEach(function (elem) {
        console.log(elem.newBook());
        if (elem.read == true) {
            onlyReadBooks += 1;
            return onlyReadBooks;
        }
    });
};

iloscPrzeczytanych(globalArr);
console.log(onlyReadBooks);