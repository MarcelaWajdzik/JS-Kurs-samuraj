//liczyc wypłate i dodaje do do pola wypłata
let time = document.getElementsByClassName('czas');
let money = document.getElementsByClassName('stawka');
let payment = document.getElementsByClassName('wypłata');
let button = document.getElementById('oblicz');

//petla do dowszystkich warosci czasu

for (var i = 0; i < time.length; i++) {
    console.log(time[i].value);
}
//petla do wszystkich stawek
for (var i = 0; i < money.length; i++) {
    console.log(money[i].value)
}