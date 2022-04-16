
function isIsogram(str){
    str = str.toLowerCase();
const uniqueArray = str.split('').filter((c, index) => { // My duplicate removal function from ex. 7.1
                return str.split('').indexOf(c) === index;
            });
           
         if(uniqueArray.length == str.length){ return true;}
         else {return false;}

        }


        console.log(isIsogram('moOse'));