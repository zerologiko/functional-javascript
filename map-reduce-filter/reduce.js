/**
 * Reduce is a higher order function to replace iterative loops, ES6 already have a array.reduce(..) 
 * function that is side effetcs free. 
 * ...but you need to make sure that your callback functions have no side effects
 */

const numbers = [1, 2, 3, 4, 5, 6];

// Let's try reduce with a sum function 
const sum = (a, b) => a + b;

const result = numbers.reduce(sum, 0);
console.log("Sum with reduce: " + result);

// For exercise we can implement a simple reduce function:
// note: this kind of reduce is called "fold-left" or "fold-l" because the functions
//       are applyied from left to right on the elements (also exists fold-l)
const reduce = ([head, ...tail], fn, accumulator) =>
   typeof head === 'undefined' ? accumulator : reduce(tail, fn, fn(accumulator, head)); 

const reduceCustom = reduce(numbers, sum, 0);
console.log ("Sum with reduce custom: " + reduceCustom);