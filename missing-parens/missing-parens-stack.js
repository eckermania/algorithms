// Challenge from Kal: Find missing parenthesis in a given expression – 2 * ( 3 + 5(sasdfasdfasd)


function findMissingParens(expression){
    let stack = [];
    for (let i = 0; i < expression.length; i++){
      if(expression[i]=== '('){
        stack.push(expression[i])
      } else if (expression[i] === ')'){
        if(stack.length === 0){
          return 'missing opening parens'
        } else {
          stack.pop()
        }
      }
    }
    if (stack.length === 0){
      return 'no missing parens'
    } else {
      return 'missing closing parens'
    }
  
}