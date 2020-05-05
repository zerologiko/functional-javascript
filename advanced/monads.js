/**
 * Introduction on "monads"
 * 
 * - What are monads
 * - Three axioms of monads
 * - flatMap function
 * - Examples (monet.js)
 */

 // monads are containers (just like functors) that implments
 // two functions:
 // - a "unit" method -> unit(value) : monad    (This create a monad from a value)
 // - a "flatMap" method  (pritty much like map for functors, but also flattens the result)

// let's play with Lodash flatMap:
// Note: Lodash was previousely imported with "npm" package manager 
//       you can see it in the package.json. The command to import it: "npm install --save lodash"
var _ = require('lodash');

// Suppose we want an array with all letters of he words in a array 
// using map we have two arrays as result (one per input word).
// map is mapping the element from the input container to new different containerS.
console.log( _.map(['understanding', 'monads'], e => [...e]) );
// adding a flatten after map do the trick: a single flattened array of chars
// in a single container
console.log( _.flatten( _.map(['understanding', 'monads'], e => [...e]) ) );
// same result using "flatMap" in one step: from input container to one single new container.
console.log( _.flatMap(['understanding', 'monads'], e => [...e]) );

// So, array of strings in lodash are MONADS because:
// - are containers that define a flatMap operation (that flattens all the returning monads into one)
// - can define a unit operation like e => [e] that create a monad from a value string

// When checking if a container is a monad, we need to check this 3 axioms:
// 1. flatMap(monad, unit) = monad
// 2. flatMap(unit(value), f) = f(value)
// 3. flatMap(flatMap(monad, f), g) = flatMap(monad, value => flatMap(f(value), g))

// To unederstand the axioms, we have 3 functions: flatMap, unit and f, all returning a monads.
// - The 1st axiom says: that trasforming a monad with flatMap and unit function we get the same monad.
// - The 2nd axiom says: that you can create a new monad applying flatMap and a function f 
//   to a monad created with "unit(value)" from a value
// - The 3rd axiom is abaout function composition with monads: nested flatMaps can be flattened
//   into one single flatMap. We can write in object oriented way:
//   
//   flatMap(monad, f) --> monad.flatMap(f)
//   flatMap(monad.flatMap(f), g) --> monad.flatMap(f).flatMap(g) 
//   monad.flatMap(f).flatMap(g) = monad.flatMap( value => f(value).flatMap(g) )
//   
//   That is, function composition on the right is essentially an application of chaining on the left. 
//
// Ok, monads ain't easy material, see this for in depth talk: https://www.youtube.com/watch?v=b0EF0VTs9Dc
// For some monads applications in Javascript see monet.js https://github.com/monet/monet.js/
