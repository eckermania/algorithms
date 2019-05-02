let wordPattern = function(pattern, string){
    let pattArr = pattern.split('');
    let strArr = string.split(' ');
    if (pattArr.length !== strArr.length){
      return false
    } else {
    let container = [];
    let pattIndices = [];
    let strIndices = [];
  
    pattArr.map(el => {
      if(container.includes(el)){
        pattIndices.push(pattArr.indexOf(el))
      } else {
        container.push(el);
        pattIndices.push(pattArr.indexOf(el))
      }
    })
    container = [];
    strArr.map(el => {
      if(container.includes(el)){
        strIndices.push(strArr.indexOf(el))
      } else {
        container.push(el);
        strIndices.push(strArr.indexOf(el))
      }
    })
    return pattIndices.join('') === strIndices.join('');
  }
}