// Given an unsorted array of nonnegative integers, find a continous subarray which adds to a given number.


function findSubarray(array, sum){
    let startIndex = 0;
    let endIndex = 0;
    let currTotal = array[0];
  
    for(let i=1; i<array.length; i++){
      if(currTotal === sum){
        return 'Sum found between indexes ' + startIndex + ' and ' + endIndex;
      }
      currTotal += array[i];
      endIndex =  i;
      while(currTotal > sum){
        currTotal = currTotal - array[startIndex];
        startIndex ++
      }
      
    }
    return 'No subarray found'
  }