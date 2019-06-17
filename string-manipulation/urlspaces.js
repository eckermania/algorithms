// Write a method to replace all spaces in a string with ‘%20’.

function makeURLSpacing(string){
    let stringArray = string.split(' ');
    let outputString = '';
    for(let i=0; i<stringArray.length-1; i++){
      outputString = outputString + stringArray[i] + '%20'
      console.log(outputString)
    }
    outputString = outputString + stringArray[stringArray.length-1];
    return outputString
  }
  
  makeURLSpacing('hey gurl you are cool')