function accum (str){
    const resultArr =[];
    for (let i = 0; i<str.length; i++){
         resultArr.push(multi(str[i], i+1));
        }

        return resultArr.join('-');
    }


console.log(accum('abcd'));



function multi(letter, times){
    return letter.toUpperCase()+letter.repeat(times-1);
}

