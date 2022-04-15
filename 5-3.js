function toCamelCase(str){
    const splitString = str.split(/[-_]/);
    for(let i =1; i<splitString.length; i++){
        splitString[i] = splitString[i].charAt(0).toUpperCase()+splitString[i].slice(1)
        
    }
    
    return splitString.join('');
}

console.log(toCamelCase('the-one_two'));


