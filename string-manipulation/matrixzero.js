// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

function matrixZero(array){
    for (let i=0; i<array.length; i++){
      for (let j=0; j<array[i].length; j++){
        if(array[i][j] === 0){
          for(let k=0; k < array[i].length; k++){
            array[i][k] = 0;
          };
          for (let l=0; l<array.length; l++){
            array[l][j] = 0;
          }
          return array       
        }
      }
    }
  }