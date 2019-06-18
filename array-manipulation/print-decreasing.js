// Print the elements of an array in the decreasing frequency if 2 numbers have same frequency then print the one which came first.
 
function printDecreasing(array){
    let output = [];
    let keys = [];
    let values = [];
    for (let i=0; i<array.length; i++){
      if(keys.indexOf(array[i])> -1){
        values[keys.indexOf(array[i])]++
      } else {
        keys.push(array[i]);
        values.push(1);
      }
    }
  
    let length = keys.length
    for(let i=0; i<length; i++){
      let freq = Math.max(... values);
  
      let num = keys[values.indexOf(freq)];
      console.log(num)
      for(let j=freq; j>0; j--){
        output.push(parseInt(num))
      }
      keys.splice(values.indexOf(freq), 1)
      values.splice(values.indexOf(freq), 1)
      
    }
    return output
}
  