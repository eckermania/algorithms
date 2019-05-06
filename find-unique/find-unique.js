var singleNumber = function(nums) {
    let numbersMap = {};
    nums.map(el => {
      if (numbersMap[el]){
      numbersMap[el]++
      } else {
        numbersMap[el] = 1;
      };
    });
    let values = Object.values(numbersMap);
    let keys = Object.keys(numbersMap);
    let location = values.indexOf(1);
    return parseInt(keys[location])
  }