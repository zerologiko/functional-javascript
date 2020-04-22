/**
 * Map is a higher order function to replace iterative loops, ES6 already have a array.map(..) 
 * function that is side effetcs free.
 * ...but you need to make sure that your callback functions have no side effects
 */

const numbers = [1, 2, 3, 4, 5];

// Let's try map with a square function 
const squareFn = (n) => n ** 2;

const squares = numbers.map(n => squareFn(n));
console.log("Squares with map: " + squares);

// For exercise we can implement a simple map function:
// const map = (array, fn) => {
//     let [head, ...tail] = array;
//     //termination condition
//     if (typeof head === 'undefined') {
//         return [];
//     }
//     return [fn(head), ...map(tail, fn)];
// }

// shorter verision :)
// note the use of: the "rest parameters" ...tail, and the "spread operator" in ...map(..) 
const map = ([head, ...tail], fn) => {
    typeof head === 'undefined' ? [] : [fn(head), ...map(tail, fn)];
}

const squaresCustomMap = map(numbers, squareFn);
console.log("Squares with custom map: " + squares);