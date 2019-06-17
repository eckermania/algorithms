// Implement a method to perform a basic string compression using the counts of repeated characters. For example, the string aabccccaaa would become a2b1c4a3. If the compressed string would not become smaller than the original string, your method should return the original string.

function compressString(string){
    let charMap = {};
    for(let i=0; i<string.length; i++){
      if(charMap.hasOwnProperty(string.charAt(i))){
        charMap[string.charAt(i)] ++;
      } else {
        charMap[string.charAt(i)] = 1;
      }
    }
  
    let values = Object.values(charMap);
    if((Math.max.apply(null, values)) === 1){
      return string
    } else {
      let compression = '';
      for(let i=0; i < (Object.keys(charMap)).length; i++){
        compression = compression + Object.keys(charMap)[i] + Object.values(charMap)[i]
      }
      return compression
    }
    
  }
