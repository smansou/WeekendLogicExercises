const arr = [[12, 0], [8, 4], [5, 2]]

function bus(passengerArray){
    let result = 0;
    passengerArray.forEach(element=> result += element[0]-element[1])
    return result;
}

console.log(bus(arr));