$('#buttonDown').click(function () {
    $('p:last').insertBefore('p:first');
})

$('#buttonUp').click(function () {
    console.log('klick');
    $('p:first').insertAfter('p:last');
})