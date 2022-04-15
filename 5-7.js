function shortest(str){
    const splitString = str.split(' ');
    let shortestWordLength = splitString[0].length;
    for(let i = 1; i< splitString.length; i++){

        if (splitString[i].length<shortestWordLength){
            shortestWordLength = splitString[i].length;
        }
    }
    return shortestWordLength;
}
console.log(shortest('today was be good day'));