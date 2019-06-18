// You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in list. One of the integers is missing in the list. Write an efficient code to find the missing integer.

function findMissingInt(array){
    let actualTotal = 0;
    let expectedTotal = 0;
    for(let i = 0; i < array.length; i++){
      actualTotal += array[i];
      expectedTotal += (i+1)
    }
    let missingInt = expectedTotal - actualTotal;
    if(missingInt === 0){
      return 'no missing integers'
    }
    return missingInt + array.length + 1
}