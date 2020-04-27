/**
 * Foscus on "arity" of a function (Arietà, rango in italian)
 * 
 * The number of operands or arguments of a function, 
 * arity 1: unary function
 * arity 2: binary function
 * arity 3: ternary function
 * arity n n-ary function
 */

// In Javascript is possible to use "lenght" of a function ...almost in any case.
console.log('unary arity: ' + (a => a * 2).length);
const sum = (a, b) => a + b;
console.log('binary arity: ' + sum.length);

// if an argument is bound, the arity is reduced
const sumBound = sum.bind(null, 10)
console.log('binary bound arity: ' + sumBound.length);

// If you use a default argument, the arity is the number of params before the first default param
console.log('default argument arity: ' + ((a, b, c = 0, d) => a + b + c + d).length);

// Using rest parameters: careful! 
// function with rest parameters are called "variadic functions"
const sumReduced = (...args) => args.reduce(sum, 0);
console.log ('arity of rest parameters: ' + sumReduced.length);