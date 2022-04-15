
    const arr = [2, 2 , 2, 2, 2, 3];
    

function findUnique(numbersArr){

        if(numbersArr[0] === numbersArr[1]){
            let mainNum = numbersArr[0];
            for (let i = 2; i<numbersArr.length; i++){
                if(numbersArr[i] != mainNum){
                    return numbersArr[i];
                }
            }
        } else if (numbersArr[0] != numbersArr[2]){
            return numbersArr[0];
        } else return numbersArr[2];
    }
         
        
           
    

console.log(findUnique(arr));
