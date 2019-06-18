// Given an array and a number k where k is smaller than size of array, we need to find the k’th smallest element in the given array. It is given that all array elements are distinct.
 
function kthSmallestElement(array, k){
    if(array.length < k){
      return 'array of insufficient length'
    }
    let currMin;
    for (let i=0; i<k-1; i++){
      currMin = array.indexOf(Math.min.apply(null, array))
      array.splice(currMin, 1)
      console.log(array)
    }
    return Math.min.apply(null, array)
  
}