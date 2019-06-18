// Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.  O(n)

function maxSumSubarray(array){
    let maxSumSoFar = array[0];
    let currentSumMax = array[0];
  
    for(let i=0; i < array.length; i++){
      currentSumMax = Math.max(array[i], currentSumMax + array[i]);
      maxSumSoFar = Math.max(maxSumSoFar, currentSumMax)
    }
  
    return maxSumSoFar
}