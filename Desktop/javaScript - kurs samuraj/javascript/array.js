// tablice
/* uporzadkowana kolejnosc. Wybudowan obiekt posiada metody */


// liertał tworenia tablicy []

const nameList = [] //literał pustej tablicy
nameList[0] = "marcela"
nameList[1] = "kasia"

// tworzenie pustej tablicy za pomoca konstruktora

const cityNames = new Array();

// lub z elementami
const cityList = new Array('warszawa', 'krakow');

// metody ma tablicach
pop() //usuwa ostatni elemeny tablicy 
push() //dodaje element na koniec tablicy
shift() //usuwa pierwszy element tablicy
unshift() //dodaje element na poczatku tablicy


concat() //łaczenie tablic i zwracanie nowej

const colorsNames = ['red', 'green', 'orange'];

const cityNames = ['wadowice', 'kraków', 'gdansk'];

const newArray = colorsNames.concat(cityNames);
/* pierwsze podajemy która tablice chcemy ppołaczyc a w metodzie podajamy z która tablica chcemy połaczyc. tworzymy nowa tablice z poszczegolnymi nic sie nie dzieje */

const newArrayAndNewArray = colorsNames.concat(cityNames, ['morski'])
/* łączymy 3 tablice z czego jedna stwrzylismy wmetodzie */

// łaczenie w ES6 operator spread operator rozwijania 

const colorsArray = [...colorsNames, ...cityNames];
//elementy z tablicy sa pojedynczo wyjete


// w tablicach mamy metody destrukcyjne i niedestrukcyjne  destructive method i mutatinf method

const items = ['zad', 'bza', 'cos'];
items.slice(3);

// w konsli pojawi sie tablica z elementami od indexu 3 do końca 


items.slice(2, 5); //od 2 indexu do 5 indexu ale bez 5 indexu


items.slice(-1); //1 element od konca



// metoda  spilce() przykład metody destrukcyjnej

const animals = ['dog', 'pig', 'cat', 'snake']

animals.splice(1, 2) //od indexu 1 ,2 oznacza ile elementów od dexu 1 mamy usunac czyli usunac 2 elementy
animals.splice(2) //usunie wszystkie elementy dokonca od indexu 2
animals.splice(0) //wyzeruje tablice  tablica.leantg=0 tez zeruje

animals.splice(3, 1, 'hamster'); //od 3 indexu, jeden element i zamien na hamster

animals.splice(3, 0, 'hamster');
//od indexu 3, 0 - oznacza nie usuwajnic tylko w to miejsce dodaj chomika. czyli chomik ma miec index 2

animals.splice(0, 0, 'hamster', 'cat', 'dog');
//przed wszystkimi innymi elementami z tablicy dodaj te.



/* metoda sort  metoda destrukcyjna*/

['kasia', 'zosia', 'franek'].sort()
//posortuje alfabetycznie imiona

/* meotda indexof  - szuka elemntu podanego w argumencie i zwraca jego index.jezelinie znajdzie zwraca -1*/

['kasia', 'zosia', 'franek', 'zosia'].indexOf('zosia'); //znajdzie zosie o indexie 1

/* metoda lastIndexOf=-szuka elementu od konca */

['kasia', 'zosia', 'franek', 'zosia'].indexOf('zosia'); //znajdzie zosie o indexie 3


/*  Metoda includes()* zwraca true or false*/

animals.includes('pig') //zwroci true 


/*  Metod join()*  z tablicy tworzy stringa odzielajac od siebieelementy przecinkiem.gdy nie podamy argumetu to jest odzielone przecinkiem ale mozey wstawic cos swojego */


/* metoda reverse metoda destrukcyjna  odwraca kolejnosc tablicy */



/* metoda split() */
// działamy na stringu i tworzy z niego tabice.jednak rodziela słowo na pojedyncze elementy

// split('') - rodziela stringa na pojedyncze elementy

// split(' ') - gdymamy "Marek, Adam"
// to utworzy["Marek", 'Adam'] 
//szuka lementów do spacji i znichtworzy element tablicy