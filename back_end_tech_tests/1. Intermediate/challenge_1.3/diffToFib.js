function diffToFib(number) {
    const fibonacciArray = [1, 0];
  
    for (let i = 1; i < number; i = fibonacciArray[0] + fibonacciArray[1]) {
      fibonacciArray.unshift(i);
    }
    firstFibonacciNumberGreaterThanNumber = fibonacciArray[0] + fibonacciArray[1];
    return firstFibonacciNumberGreaterThanNumber - number;
  }
  
  module.exports = diffToFib;