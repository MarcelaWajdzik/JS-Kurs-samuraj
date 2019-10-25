let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let newElement = document.createElement('ol'); //stworzenie listy 
let child = document.getElementById('scriptJS'); //pobranie wezła body-ostatnie dziecko

for (let i = 0; i < cities.length; i++) {
    let newItem = document.createElement('li'); //swtorzenie elemtu listy
    newItem.classList.add('city'); //dodanie klasy do li
    let citiesName = document.createTextNode(cities[i]) //tworzenie tekstu z kolejnymi elementami
    newItem.appendChild(citiesName); //wezel tekst-li
    newElement.appendChild(newItem); //wezel ol - li
    document.body.insertBefore(newElement, child); //wezel body - ol (wstawienie przed script)
}