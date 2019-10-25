let jsonPracownicy = {
    "pracownicy": [{
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
}
console.log(jsonPracownicy); //wyswietlenie obiektu
let usersJason = jsonPracownicy.pracownicy; //wyciagniecie tablicy
console.log(usersJason); //wyswietlenie tablicy

usersJason.forEach(function (elem, index) {
    console.log(`${index}. ${elem.firstName} ${elem.lastName}`);
});