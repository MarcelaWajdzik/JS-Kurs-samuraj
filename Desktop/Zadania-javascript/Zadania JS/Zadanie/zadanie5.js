/* Ciag fibbonaciego , 1 wyraz = 0, 2 wyraz równa sie  1, kazdy kolejna jest suma dwóch poprzednich n>1 n-1 + n-2 
3 wyraz = 1+0=1 (index 2) , 4 wraz ma index 3  1+1=2*/


function fibbonaciego(n) {
    if (n == 0) { //1 wyraz == 0
        return 0
    } else if (n == 1 || n == 2) { //2 wyraz == 1, 3 wyraz=1
        return 1
    } else if (n > 2) {
        return fibbonaciego(n - 1) + fibbonaciego(n - 2)
    }

}

console.log(fibbonaciego(8)) //index n-elemtu liczony od 0
console.log(fibbonaciego(6)) //index n-elemtu liczony od 0
console.log(fibbonaciego(2)) //index n-elemtu liczony od 0
console.log(fibbonaciego(4)) //index n-elemtu liczony od 0