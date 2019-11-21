var firstVariable = "a";
let secondVariable = 'b';
const thirdVariable = "c";

function scopeInFunction() {
    var inFunction = "jestem";
    let secondVariable = 4;
    /* secondVariable = 4 */ /* w tym wupadku w consoli wyswietli sie 4, pozniewaz zmienia jest zefiniowana globalnie, a lokalnie  nadpisana
 */
    let firstVariable = "a";
    firstVariable = 'b';
    console.log(firstVariable); //wyloguje b . natomiast zmienne globalana nie została zmieniona

    console.log(inFunction); //teraz mamy dostep do zmiennej lokalnej
    thirdVariable = 'b' //consola wyrzuci blad ze chcemy nadpisac zmienna bo  ma const
    const thirdVariable = 'b' //tak juz nie ma problemu bo sa w 2 roznych zakresach
}
scopeInFunction()

/* w tym momecie gdy w kosoli wpiszemy zmienna inFunction lub secondVariable to wyswietli si ekominukat ze sa niezdefiniowane */


/* gdy checmy wylogowac  w danym bloku zmianna lokalna której nie ma, to ta zmienna jest poszukiwna w zakresie lokalnym wyzej (np gdy jest funkcja w funckji) a jak tam nie ma to przechodzi do zasiegu globalnego*/

/* gdy z zakresu globalnego chcemy wylogowac zmienna ktora jest w zakresie lokalnym to w consoli dostaniemy powiadomienie ze zmienna  jest niezdefiniowana */