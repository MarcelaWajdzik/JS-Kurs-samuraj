let condition = 2;

if (condition) {
    console.log('wyswietlw consoli');


    /*    wyswietli poniewaz 2 zostanie przekonwertowana na true 
    w sytuacji wstawienia alert() przed con.log to najpierw trzeba wyłaczyc alert aby mogła zadziałać kolejna instrukcja*/
}


let userName = "Marcela"

if (userName !== "") {
    // userNme jest rozny od pustego stringa. 
    console.log('witaj' + '' + userName);
}


// if else
let hasTicket = true;
let moreThen15Years = true;

if (hasTicket && moreThen15Years) {
    console.log('mozna wpuscic');

} else {
    console.log('nie wpuszczaj ');

};

let hasTicket = fals;
let moreThen15Years = true;
let bossFamily = true;


if (hasTicket && moreThen15Years || bossFamily) {
    // napierw wykona porwonanie has ticket i merothan w tym jest false ale jestes rodzina szefa wiec wchodzisz
    console.log('mozna wpuscic');

} else {
    console.log('nie wpuszczaj ');

};

// else if -kilka mozliwsoci
let age = 16;

if (age <= 9) {
    console.log('jestes dzieckime')

} else if (age <= 18) {
    console.log('jestes mlodziencem');

} else if (age <= 70) {
    console.log('cały swiat przed Toba');

} else {
    console.log('jestes dojrzałym człowiekiem ');

}