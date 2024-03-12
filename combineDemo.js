function removeSpaces(str){
    return str.split(" ").join("");
}

function repeatString(str){
    return str.repeat(2);
}

function makeUpperCase(str){
    return str.toUpperCase();
}

function makeItalics(str){
    return str.italics();
}

let str = "hello there how are you ?"
// console.log(makeItalics(makeUpperCase(repeatString(removeSpaces(str)))));

const func = [str, removeSpaces, repeatString, makeUpperCase, makeItalics];
// const result = func.map(f => f(str));
const result = func.reduce((prevAns, currFunc) => {
    // console.log(prevAns, currFunc);
    return currFunc(prevAns(ans));
});

// console.log(result);

// const arr = [1,2,3,4,5];
// let res = arr.reduce((totalValue, currValue) => {
//     console.log(totalValue, currValue);
//     return totalValue + currValue
// });

