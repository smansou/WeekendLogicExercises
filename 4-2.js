function tribonacci(n){

    const tribArray = [];
    tribArray[0]=0;
    tribArray[1]=1;
    tribArray[2]=1;
    for( let i = 3; i<n; i++ ){
        tribArray[i] = tribArray[i-1]+tribArray[i-2]+tribArray[i-3];
    }
    return tribArray;
}

console.log(tribonacci(20));