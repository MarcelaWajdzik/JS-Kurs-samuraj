const dayOfTheWeek = "sroda"


switch (dayOfTheWeek) {
    case "poniedziałek":
        console.log('poniedziałek');
        break;
    case "wtorek":
        console.log('wtorek');
        break;
    case "sroda":
        console.log('sroda');
        break;
    case "czwartek":
        console.log('czwartek');
        break;
    case "piatek":
        console.log('piatek');
        break;
    default:
        console.log('nie wiem co za dzien');
        break;


}

// operator warunkowy ternary 

// a ? b : c
// b-prawa c-falsz 
// mozna przechwytywac zwrocona wartosc

let gameResult = 0;
let killedMonsters = 11;
let score = killedMonsters > 10 ? 1 : 0;


const playerName = "Kasia"
console.log(`witaj ${playerName ? playerName :"nieznajomywojowniku"}`);