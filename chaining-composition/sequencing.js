/**
 * Let's try composition/sequencing -> The concept is the same, just some differences
 * 
 * DEF. compose(f,g)(x) = f(g(x)) 
 *   - composition in a strict math way needs unary funtions
 *   - still we have to read funtion from right to left for the application order 
 * 
 * DEF. sequence(f,g)(x) = g(f(x))
 *      sequence(f,g,)(...args) = g(f(...args))
 *   - sequence can work on more than one argument functions
 *   - the order of application is now more readable (first g, than f, ...)
 */

 // TRICK: This is how work with n-ary function
 // sequence => (f1, f2) => ( (...args) => f2(f1(...args)) )
 // More concise, because fat arrow is right associative operator: 
 // sequence => (f1, f2) => (...args) => f2(f1(...args))
const sequence2 = (f1, f2) => (...args) => f2( f1(...args) );

const f1 = (a, b) => {
    console.log(`[f1] working on: ${a} and ${b}`);
    return a + b;
}
const f2 = a => {
    console.log(`[f2] working on ${a}`);
    return a;
}

const f3 = (r) => `[f3] I can do stuffs with return value: ${r}`;

// simple function application
const functionsResult = f2( f1(1, 2) );
console.log(functionsResult);

// sequence for 2 functions 
const seqResult = sequence2(f1, f2)(1, 2);
console.log(seqResult);

/**
 *  Let's try to generalize sequence for n functions
 *  NOTE: the important thing to understand is that:
 *  - function parameters will be acessible ONLY to the first function
 *  - the other functions in the sequence will receive only the return value
 * 
 *  Use a proper library to do thing like this, just an exercise.
 * */ 
const sequence = (f1, ...fRest) => fRest.reduce(sequence2, f1);
const seqNResult = sequence(f1, f2, f3)(1, 5);
console.log(seqNResult);