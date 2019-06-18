// Write a program to sort an array of 0's,1's and 2's in ascending order.

function sortSmallInts(array){
    let location0=0;
    let location2=array.length-1;

    for(let i=0; i<=array.length; i++){
        let tempVar;
        if(array[i] === 0){
        tempVar=array[location0];
        array[location0] = array[i];
        array[i] = tempVar;
        location0++
        console.log(array)
        }
    }

    for(let i=location2; i > 0; i--){
        if(array[i] === 2){
        tempVar=array[location2];
        array[location2] = array[i];
        array[i] = tempVar;
        location2--
        console.log(array)
        }
    }
    return array
}