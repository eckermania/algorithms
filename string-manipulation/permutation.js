// Question 2 - Given two strings, write a method to decide if one is a permutation of the other?

function permCheck(stringA, stringB){
    if (stringA.length !== stringB.length){
      return false
    }
  
    let stringATotal = 0;
    let stringBTotal = 0;
  
    for (let i = 0; i<stringA.length; i++){
      stringATotal += stringA.charCodeAt(i);
      stringBTotal += stringB.charCodeAt(i);
    }
    return stringATotal === stringBTotal;
  } 
  