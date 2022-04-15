function findNextSquare(num){
    if (!isPerfect(num)){
        return -1;
    } else {
        num++;
        while (!isPerfect(num)){
            num++;
        }
        return num;
    }
}





function isPerfect(num){
    if((num**0.5)%1===0){ return true;
    }else {return false};
}

console.log(findNextSquare(121));