function countDuplicates(str) {
    const count = [];
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
            if (str.slice(i+1).indexOf(str[i]) != -1) {
                if (count.indexOf(str[i]) == -1) {
                    count.push(str[i]);
                }

            }

        

    } return count.length;
}

console.log(countDuplicates('aAbgdslmb'));
