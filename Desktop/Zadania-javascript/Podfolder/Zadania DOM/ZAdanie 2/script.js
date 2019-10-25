document.querySelector("button").addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.classList.add('item');
    let ulList = document.getElementById('items')
    let ulListChildren = document.getElementById('items').children;
    ulList.appendChild(newItem);
    newItem.innerText = "Item" + " " + ulListChildren.length;
});