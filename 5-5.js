function initials(str){
    
   const splitString = str.split(' ');
    let initials = splitString[0].charAt(0).toUpperCase()+'.'+ splitString[1].charAt(0).toUpperCase();
    return initials;


}

console.log(initials('first second'));