let time = document.getElementsByClassName('czas');
let money = document.getElementsByClassName('stawka');
let payment = document.getElementsByClassName('wypłata');
let button = document.getElementById('oblicz');

//petla do do wszystkich warosci czasu
let userTime;

function userTimeLoop() {
    for (var i = 0; i < time.length; i++) {
        timeLoop = time[i].value;
        // console.log(timeLoop)
    }
    return timeLoop;

};
userTimeLoop();
//petla do wszystkich stawek ;

function userMoneyLoop() {
    for (var i = 0; i < money.length; i++) {
        // console.log(money[i].value)
        moneyLoop = money[i].value;
        // console.log(moneyLoop)
    }
    return moneyLoop;
};
userMoneyLoop()