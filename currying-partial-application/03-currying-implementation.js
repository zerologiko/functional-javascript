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

// 