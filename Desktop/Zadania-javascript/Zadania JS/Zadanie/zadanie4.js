let newArr = [0, 1, 2, 3, 4, 5];

function newResult(newArr) {
    let addResultMath = 0;
    for (let i = 0; i < newArr.length; i++) {
        let resultMath = Math.pow(newArr[i], 2);
        addResultMath += resultMath;
    }
    console.log(addResultMath);

    return addResultMath;
}
newResult(newArr);