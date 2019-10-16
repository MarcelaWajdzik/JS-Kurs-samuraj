let bubbel = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

// console.log(bubbel.length);

/* (n - 1) = (bubbel.length - 1); n - liczba elementów tablicy. w tym przypadku wykona 16 sortowan. po kazdy sortowaniu najwieksza cyfra wedruje na ostatnie mozliwe miejsce */

function bubbelSort(bubbel) {
    for (let i = 0; i < bubbel.length; i++) {
        for (let j = 0; j < bubbel.length; j++) {
            if (bubbel[j] > bubbel[j + 1])
            /* jezeli element o idexie  0 jest wiekszy niz elemet o idexie o 1 wyzszym */
            {
                let itemBubble = bubbel[j]; //zmiena równa sie bubbel oindexie 0
                bubbel[j] = bubbel[j + 1];
                // 0 przypisana jest wartosc elementu o idexie o 1 wyzszym
                bubbel[j + 1] = itemBubble;
                //zmienna itemBubbel został napisana przez nowa wartosc bubbel[j]
            }
        }
    }
    return bubbel;
};
console.log(bubbelSort(bubbel));