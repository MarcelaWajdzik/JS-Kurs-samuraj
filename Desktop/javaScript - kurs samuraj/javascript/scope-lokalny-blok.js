var firstVariable = "a";
let secondVariable = 'b';
const thirdVariable = "c";

/* z es6 lokaly zasieg wystepuje równiez w boloku
. Blok zaznacza sie nawiasami klamrowymi {} */
/* zmienna var nie moze skrzystac z zasiegu lokalnego z blokach. var tylko w funkcach wystpeuje jako zmienna lokalna. w blokach dalej funkcjonujce jako zmienna globalna  */



for (let i = 0; i < 10; i++) {
    if (i < 4)
    /* warunek prawdziwy bo tutaj i  =0 */ {
        i = 10;
        console.log('hej tutaj i =' + i);

    }
}

/* w tym wypadku i=10 nadpise wartosci let i=0, dlatego wyloguje i =10 po czym zostaje poddane ikrementacji wiec petla nei  wykona si ekolejny raz bo i =11 */