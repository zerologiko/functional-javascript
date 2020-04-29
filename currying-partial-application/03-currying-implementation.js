/**
 * After understanding currying and partial evaluation concepts
 * it is possible to implement a custom curry method. 
 */

 // First, remember partial implementation?
 const partial = (f, ...args1) =>
                    (...args2) =>
                    f(...args1, ...args2);
 // You see that is very similar to partial application implementation
 // but the outer function don't have parameters
const curry1 = f => a => (...rest) => f(a, ...rest);
const curry2 = f => a => b => (...rest) => f (a, b, ...rest);

const volume = (a, b, c) => a * b * c;
const curry1volume = curry1(volume);
const curry2volume = curry2(volume);
console.log('curry1 volume: ' + curry1volume(2)(3,5) );
console.log('curry2 volume: ' + curry2volume(2)(3)(5) );

// Generic currying implementation it's an advanced topic, fasten your seatbelt.
const curry = f => curryN(f, []);
const curryN = (f, acc) => 
        acc.length === f.length ? f(...acc) :
        arg => curryN(f, [...acc, arg]);
// This is not easy, just see the application sequence:
// curry(volume)
// curryN(volume [])
// a => currN(volume, [a])
// a => b => curryN(volume, [a, b])
// a => b => c => curryN(volume, [a, b, c])
// a => b => c => volume(a, b, c) 
// it's ok! Let's test!
const curryGeneric = curry(volume);
console.log('curry generic volume: ' + curryGeneric(2)(3)(5) );

// Second step: the bind function.
// We can use "bind" function.bind(thisArg [, arg1 [, arg2 [, ...]]]) 
// to implement partial application
const partialBind = (f, ...args) => f.bind(null, ...args);
// Moreover, we can use the brand new partial implementation 
// to implement curry without the accumulator and recursively.
// this form of is VERY important to understand the relation between currying an partial.
// So curryin can be implemented as a sequence of partial applications
const curryUsingPartial = f => 
                          a => 
                          f.length === 1 ? f(a) : curryUsingPartial( partialBind(f, a) ); 
// Test?
const curryWithPartial = curryUsingPartial(volume);
console.log('curry generic with partial volume: ' + curryWithPartial(2)(3)(5) );
