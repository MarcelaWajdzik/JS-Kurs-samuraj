/* wyrażenie początkowe; wyrażanie warunkowe;wyrażenie modyfikujace */

for (let i = 0; i > 20; i++) {
    console.log('hej');

}


/*  petla while */
//działa dopoki warunek jest spełniony

while (2 > 1) {
    // console.log('działa');

}


/* petla w petli */

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`zmienna${i} pomnozna przez zmienna ${j} da nam wynik ${i*j}`);

    }
}

/* napierw wykonuje sie jeden raz petla z i pozniej wykonuje sie petla z j.jednakona wykonuje sie az warunek  zostanie przerwany czyli w tymprzypadku 10 razy i dopiero nastapi kolejny raz wykonanie petli z i  */

const userAge = [23, 54, 76, 34, 56]

for (let i = 0; i < userAge.length; i++) {
    console.log(`wiek  uzytkownika numer ${i} to ${userAge[i]}`);

}


