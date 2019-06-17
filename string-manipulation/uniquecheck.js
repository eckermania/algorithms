function uniqueCheck(string){
    if(string.length>256){
      return false
    }
    for(let i=0; i<string.length; i++){
      if(string.indexOf(string[i]) !== string.lastIndexOf(string[i])){
        return false
      }
    }
    return true
  }