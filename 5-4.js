function toWeirdCase(str) {
    let splitString = str.split(' ');
    let newString = '';

    for (let i = 0; i < splitString.length; i++) {

        for (let j = 0; j < splitString[i].length; j++) {
            if (j % 2 == 0) {
                newString[j] += splitString[i].charAt(j).toUpperCase();
            }
            else {
                newString[j] += splitString[i].charAt(j).toLowerCase();
            }

        }
    }

    return newString;

}
console.log(toWeirdCase('Weird string Case'));