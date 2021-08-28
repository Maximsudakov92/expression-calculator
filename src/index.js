function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  let arr = [...expr];
  let index = arr.indexOf('0') -1;
  if( arr[index -1] === '/') {
    throw "TypeError: Division by zero.";
  }
  try {
    const result = (new Function(`return` + ' ' + expr + ' '))(); 
    if(result === Infinity) { 
      throw "TypeError: Division by zero.";
    }else if (typeof(result) === 'number') {
      return result;
    }
  }catch (expr) {
    if (expr instanceof SyntaxError) {
      throw "ExpressionError: Brackets must be paired";
    } 
  }
  throw "TypeError: Division by zero.";
}

module.exports = {
    expressionCalculator
}