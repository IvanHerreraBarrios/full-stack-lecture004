/**
 * 
 * Divide two values.
 * The variable "y" must be != 0.
 */
function divide(x,y) {
    let res;
    if (y !== 0) {
        res = x / y;
    } else {
        res = undefined;
    }
    return res;
}

function additionArray(numbers){
    let a = 0;
    for (let num of numbers) {
        a += num;
    }
    return a;
}


function substraction(x,y) {
    return x - 2;
}

function multiply(x,y){
    return x * 2;
}

function addition2(x) {
    let res = x + 2;
    return res;
}

