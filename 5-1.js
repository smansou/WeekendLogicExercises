function removeFirstLast(str){
   let newStr = str.slice(1, -1);
    return newStr;
}

console.log(removeFirstLast('goodday'));