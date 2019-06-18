// Given an unsorted array of integers, find a subarray which adds to a given number. If there are more than one subarrays with sum as the given number, print any of them.

function findAllSubarray(array, sum){
    let startIndex = 0;
    let endIndex = 0;
    let currTotal = array[0];
  
    for(let i=1; i<array.length; i++){
        if(currTotal === sum){
          return 'Sum found between indexes ' + startIndex + ' and ' + endIndex;
        }
        currTotal += array[i];
        endIndex =  i;
        if(sum > 0){
          while (currTotal > sum){
          currTotal = currTotal - array[startIndex];
          startIndex ++
          }
        } else {
          while (currTotal < sum){
          currTotal = currTotal + array[startIndex];
          startIndex ++
          }
        }
        
      }
      return 'No subarray found'
  }