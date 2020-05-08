/**
 * ES6 introduce generators functions.
 * 
 * With a generator function is easy to implement infinite sequences of elements
 * - A generator function is denoted by a star sign "*"
 * - A generetor returns "yield" a singe value everytime .next() method is called.
 * - infinited sequences are not exhaustively enumerable
 */

// Example a day of week generator
function * daysOfWeekGenerator() {
    yield 'MON';
    yield 'TUE';
    yield 'WED';
    yield 'THU';
    yield 'FRI';
    yield 'SAT';
    yield 'SUN';
}
const daysOfWeeks = daysOfWeekGenerator();
// Generators implements iterable interface, everytime .next() is called a value is yield.
// The yeld object hava a "value" and a "done" flag 
console.log( daysOfWeeks.next() );
console.log( daysOfWeeks.next() );
// also can be used with loops using only the value
for (let day of daysOfWeeks) {
    console.log(day);
}

// Example: an infinite natural numbers generator 
// Infinte sequences can only be avaluated lazyly: 
// if you use a for loop, or a spread operator the loop will never terminate
function* naturalNumbers() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
const myNumbers = naturalNumbers();
console.log( myNumbers.next() );
console.log( myNumbers.next() );

// Example: a random number generator
function * randomGen() { 
    while (true) { yield Math.random(); }
};
const randoms = randomGen();
console.log( randoms.next() );
console.log( randoms.next() );
