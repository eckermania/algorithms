// Given two sequences, print longest common subsequence
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.

// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

function LCS(stringA, stringB){
    let arrayA = stringA.split('');
    arrayA.unshift(0);
    let arrayB = stringB.split('');
    arrayB.unshift(0);
    let grid = []; 
    let subsequence =[];
  
    for (let i=0; i<arrayA.length; i++){
      let holderArray=[]
      for (let j=0; j<arrayB.length; j++){
      holderArray.push(0)
      }
      grid.push(holderArray)
    }
  
    for (let k=1; k<arrayA.length; k++){
      for (let l=1; l<arrayB.length; l++){      
        if(arrayA[k] === arrayB[l]){
          grid[k][l] = grid[k-1][l-1]+1
          console.log('match', arrayA[k])
        } else {
          grid[k][l] = Math.max(grid[k][l-1], grid[k-1][l])
        }
      }
    }
    
    let m = arrayA.length-1;
    let n = arrayB.length-1;
  
    while(m > 0 && n > 0){
      if(arrayA[m] === arrayB[n]){
        subsequence.unshift(arrayA[m]);
      } else if (arrayA[m-1] === arrayB[n]){
        subsequence.unshift(arrayA[m-1]);
        n--;
      } else if (arrayA[m] === arrayB[n-1]){
        subsequence.unshift(arrayA[m]);
        n--;
      } else {
        n--
      }
      m--
    }
    return 'LCS for input sequences ' + stringA + ' and ' + stringB + ' is ' + subsequence.join('') + ' of length ' + grid[m][n] + ' .';
  
  }
