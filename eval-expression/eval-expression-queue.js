// Challenge from Kal: Evaluate an expression given only single digits and only 2 operators * and +.

function expressionEval(expression){
    let queue = [];
    let expressionArr = expression.split('');
    let total = 0;
    for (let i = 0; i < expressionArr.length; i ++){
      if (parseInt(expressionArr[i])){
        queue.push(parseInt(expressionArr[i]))
      } else if (expressionArr[i] === '*'){
        if(queue.length > 0){
          let subtotal = (queue.pop()) * (parseInt(expressionArr[i+1]));
          total += subtotal;
          i++
        } else {
            total = total * (parseInt(expressionArr[i+1]));
            i++
        }
      }
    }
    console.log(queue);
    if (queue.length >0) {
      queue.forEach(el => total += el);
    }
    return total;
}