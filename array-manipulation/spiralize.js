// Given a 2D array, print it in spiral form. 

function spiralize(array){
    let output = [];
    let rowCount = array.length;
    let columnCount = array[0].length;
    let row = 0;
    let column  = 0;
    let lastRow = rowCount-1;
    let lastColumn = columnCount-1;
    while (row <= lastRow && column <= lastColumn){
      for (let i=column; i<= lastColumn; i++){
        output.push(array[row][i])
      }
      row++
      for(let i=row; i<=lastRow; i++){
        output.push(array[i][lastColumn])
      }
      lastColumn--
      if(row <= lastRow){
        for(let i=lastColumn; i>=column; i--){
          output.push(array[lastRow][i])
        }
        lastRow--;
      }
      if(column<=lastColumn){
        for(let i=lastRow; i>=row; i--){
          output.push(array[i][column])
        }
        column++
      }
    }
    return output
  }
