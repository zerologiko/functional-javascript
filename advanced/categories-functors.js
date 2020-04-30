/**
 * Teorical concepts: Categories and Functors applied to Javascript
 */

 // Imagine a cetegory as "A set of Javascript values"
 // a category contains all possible values of values of a data type 
 // or a subset of those values.

 // Esamples:
 // - Boolean (true, false)
 // - Lamp states ("red", "yellow", "green") <- a subset of string

 // Also, when defining a category, we have to formalize the operations that transforms tha values
 // This operations are called morphisms (functions) defined on these values.
 // In Javascript, morphisms are represented by pure functions and must have 2 properties:
 //
 // - Identity transformation: x => x      
 // - Associativity: compose(compose(f, g), h) == compose(f, compose(g, h)) 
 const identity = x => x;

 // Let's define composition to and verify the associativity.
 const compose = (f1, f2) => x => f1(f2(x));

 // define 3 functions (our f, g, h for the example)
 const double = x => 2*x; // <- "homomorphic" operations becasue defined on one category
 const plusOne = x => x+1; //   mapping a return value in the same category as input value
 const toString = x => `Result is ${x}`; // <- This is a morphism between to categories (numbers and strings)
                                         //    It is a "polimorphic operation"

console.log ( compose(toString, compose(plusOne, double))(10) );
console.log ( compose(compose(toString, plusOne), double)(10) );

// To understand, just substitute the compose definition:
// compose( compose( toString, plusOne ), double)
// in the outher compose:
// x => compose( toString, plusOne )( double(x) )
// now in the inner compose:
// x => ( y => toString( plusOne(y) ) )( double(x) )
// let's focus: knowing that the left function "y => ..."" can be applied on the argument ( double(x) )
// finally we have 3 nested functions:
// x => toString( plusOne( double(x) ) ) 
// Also you can do the same reverse substitution from inner to outer function.


// Wrapping it up:
// Category in Javascript can be interpreted as:
// - a set of values
// - a set of side effetcts free morphisms (or functions) defined on these values.
// - exists an "identity" transformation
// - composing multiple functions obey "associativity" so precedence doesn't matter (can be grouped in different order)

// Let's define "Functors":
// - are "mappings" between categories -> Example: the "Map" function of arrays
// - functors works betwewn "containers"
// - Array implementing the "map" functions are functors
//   Array -> containers
//   Morphisms -> e.g. "square" function
//   
//    [1,2,3,4].map(x => x*x) yelds [2,4,9,16]
//    [1,2,3,4] and [2,4,9,16] are FUNCTORS 
//    They take values from a container, morph them and put them in a different container
//    So: a functor is a container that has a map function.
//        Array in Javascript are functors because thei implements a map function and acts as container
