$('#count-sum').click(function () {
    var suma = 0;
    $('.salary').each(function () {
        suma += Number($(this).text()); //jawna konwersja string ->numbers
    });
    $('#sum').text(suma)
})