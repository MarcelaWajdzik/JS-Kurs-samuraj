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