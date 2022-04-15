

function binaryConversion(binArr) {
    let sum = 0;
    for (let i = 0; i<binArr.length; i++) {
        binArr[binArr.length - (i + 1)]  
            sum += (2 ** i);
    }
    return sum;
}

binaryNum = [1,1,1,1,1,1,1]

console.log(binaryConversion(binaryNum));



