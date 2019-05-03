let wordPattern = function(pattern, string){
    let pattArr = pattern.split('');
    let strArr = string.split(' ');
    if (pattArr.length !== strArr.length){
      return false
    } else {
    let pattIndices = [];
    let strIndices = [];
    pattArr.map(el => {
        pattIndices.push(pattArr.indexOf(el))
    })
    strArr.map(el => {
        strIndices.push(strArr.indexOf(el))
    })
    return pattIndices.join('') === strIndices.join('');
  }
}