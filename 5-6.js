function maskify(str){
   let  maskedStr = '#'.repeat(str.length-4)+str[str.length-4]+str[str.length-3]+str[str.length-2]+str[str.length-1];
   return maskedStr;
}

console.log(maskify('whateverman!'));