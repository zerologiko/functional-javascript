/**
 * Focus on: partial application.
 *   
 *   Partial evaluation is the process of fixing any arguments of a function to reduce it's arity:
 *   f(x, y, z, u) => value   (arity 4)
 *   after fixing x = a and y = b with  a,b two constants decided upfront:
 *   f_ab(z, u) => value      (arity 2)
 * 
 *   Underscore.js have implementations for partial and currying.
 */

// Using Lodash to compare partial evaluation vs currying
var _ = require('lodash');

// Let's take a function to calculate volume with arity 3 (3 arguments).
const volume = (a, b, c) => a * b * c;
console.log('volume simple:' + volume(2,3,5));
// currying with lodash: no params are fixed, just sequencially used one by one:
const curriedVolume = _.curry(volume);
console.log('curried volume: ' + curriedVolume(2)(3)(5));
// Instead, partial evaluation fix one or more arguments:
// So, essentially partialVolume_2_3 == curriedVolume(2)(3)
const partialVolume_2_3 = _.partial(volume, 2, 3);
console.log('parital volume (with a=2 b=3): ' + partialVolume_2_3(5));

// Now let's implement our "partial" method implementation 
// we want a fuction, taking a function "f" and a list of parameters1
// this function, must return a function, taking a list of parameters2
// and returns the application of "f" to the first list of parameters1
// and the second list of parameters2.
// In this way, we can use the inner function and change the parameters2.
const partial = (f, ...args1) =>
                    (...args2) =>
                    f(...args1, ...args2);

const partialVolume = partial(volume, 2, 3);

console.log('custom partial volume (with a=2 b=3): ' + partialVolume(5));
console.log('custom partial volume example: ' + partial(volume, 2)(3, 5));

// Caution: brain meltdown :)
// We can also compose two nested partial application -> combining currying and partial application!
// currying an partial evaluation are strongly related.
console.log ('paritial and currying: ' + partial( partial(volume, 2), 3)(5) );