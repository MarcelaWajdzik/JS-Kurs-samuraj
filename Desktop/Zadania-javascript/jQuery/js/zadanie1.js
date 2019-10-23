$("button").click(function () {
    $('div').animate({
        left: '100px',
        width: "100px",
        height: "100px"
    }, 3000, function () {
        $('div').animate({
            backgroundColor: 'blue'
        }, 5000, function () {
            $("#squar").html("<h2>Animacja zakończona</h2>");
        })
    })
})