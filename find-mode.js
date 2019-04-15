// Given a sorted array, return the mode.  e.g. input: [1,1,2,2,2,2,4,4,5,5,5] output: 2.  Input will never have more than one mode and if the array is empty or null the method should return null.

function maxVal(arr){
    if (arr == null || arr.length <1){
      return null;
    } else if (arr.length == 1){
      return arr[0];
    } else {
      let numTable = new Map();
      for (let i=0; i<arr.length; i++){
        if (numTable.has(arr[i])){
          let tableFreq = numTable.get(arr[i]);
          tableFreq ++;
          numTable.set(arr[i], tableFreq);
        } else {
          numTable.set(arr[i], 1);
        }
      }
      let nums = numTable.values();
      let values = [];
      for(let value of nums){
        // let int = parseInt(value);
        values.push(value);
      };
      let maxFreq = Math.max(...values);
      let keys = numTable.keys();
      for(let key of keys){
        let freq = numTable.get(key);
        if(freq == maxFreq) {
          return key
        }
      }
    }
  }
