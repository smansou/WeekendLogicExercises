function repeatStr1 (times, string){
    return string.repeat(times);
}




function repeatStr2 (times, string){
    let newString = '';
    for(let i = 0; i<times; i++){
        newString+=string;
    }
    return newString;
}