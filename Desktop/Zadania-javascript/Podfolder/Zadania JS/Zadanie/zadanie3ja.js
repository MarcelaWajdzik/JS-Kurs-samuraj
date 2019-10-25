let newArr = [1, 2, 3, 4, 5, 6];

function result(newArr) {

    let resultAdd = 0;
    let resultMulti = 1;
    for (let i = 0; i < newArr.length; i++) {
        resultAdd += newArr[i] //resultAdd + newArr[i]newArr[i];
        resultMulti *= newArr[i] //resultMulti * newArr[i];
    }
    console.log("Iloczyn:" + ' ' + resultMulti)
    console.log("Suma:" + ' ' + resultAdd)
};
result(newArr);