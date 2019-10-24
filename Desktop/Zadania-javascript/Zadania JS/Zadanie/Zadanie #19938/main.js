$('button').click(function () {
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (elem) {
        $("<p></p>").text(`Imię: ${elem.imie}`).appendTo('#dane-programisty')
        $("<p></p>").text(`Nazwisko: ${elem.nazwisko}`).appendTo('#dane-programisty')
        $("<p></p>").text(`Zawód: ${elem.zawod}`).appendTo('#dane-programisty')
        $("<p></p>").text(`Firma: ${elem.firma}`).appendTo('#dane-programisty')


    });
});

/* append - najpierw podajemy element do którego  dodajemy(isnijacy), appendTo() napierw podajemy element który stworzylismy a nastepnie element do którego dodajemy */