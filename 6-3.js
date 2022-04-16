function longest(s1, s2){

    const splitStr1 = s1.split('');
    const splitStr2 = s2.split('');
    const joinedArray =splitStr1.concat(splitStr2);
    const noDupArray = joinedArray.filter((c, index) => {       //My duplicate removal function from ex. 7.1
        return joinedArray.indexOf(c) === index;
                    });
                    return noDupArray.sort();
}

console.log(longest('xyaabbbccccdefww','xxxxyyyyabklmopq'));
