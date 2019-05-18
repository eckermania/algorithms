function findUnique(arr){
    if(arr.length === 1){
      console.log(arr[0])
    } else {
      let mid = Math.floor(arr.length/2);
      if(arr[mid] !== arr[mid+1] && arr[mid] !== arr[mid-1]){
        return arr[mid];
        console.log('first if', arr);
      } else if((arr[mid] === arr[mid+1] &&  (arr.length - mid) %2 === 0) || (arr[mid] !== arr[mid+1] && (arr.length-mid)% 2 !== 0)){
        arr.splice(mid);
        console.log('second if', arr);
        findUnique(arr)
      } else {
        arr.splice(0, mid+2);
        console.log('last if', arr);
        findUnique(arr)
      }
    }
  }
  
  
  // findUnique([1,1,3,3,4,5,5,7,7,8,8]);
  // findUnique([1,3,3,4,4,5,5])
  // findUnique([1,1,3,3,4])
  // findUnique([1,1,3,3,4])
  // findUnique([1,1,2,3,3])