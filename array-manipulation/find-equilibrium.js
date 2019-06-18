// Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes. For example, in an array A:
// Example :
// Input : A[] = {-7, 1, 5, 2, -4, 3, 0}
// Output : 3
// 3 is an equilibrium index, because:
// A[0] + A[1] + A[2]  =  A[4] + A[5] + A[6]

// Write a function int equilibrium(int[] arr, int n); that given a sequence arr[] of size n, returns an equilibrium index (if any) or -1 if no equilibrium indexes exist.


function findEquilibrium(array){
    if(array.length < 2){
      return  -1
    }
  
    let equilIndex = 1;
    let leftSum = array[0];
    let rightSum=0;
  
    for(let i=2; i<array.length; i++){
      rightSum += array[i]
      console.log(rightSum)
    }
  
    while(equilIndex<array.length-1){
      if(leftSum === rightSum){
        return equilIndex
      }
      leftSum += array[equilIndex];
      rightSum -= array[equilIndex + 1];
  
      equilIndex++
    }
  
    return -1
}