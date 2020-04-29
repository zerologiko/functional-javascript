/**
 * Many functional programming languages implments Map in partially applied way.
 */

// Recall map implementation?
const mapClassic = ([head, ...tail], f) => {
    typeof head === 'undefined' ? 
    [] : 
    [fn(head), ...map(tail, f)];
}
// We can use partial application to do the same: using the curried sintax
const map = f =>
            ([head,...tail]) =>
            typeof head === 'undefined' ? 
            [] : 
            [f(head), ...map(f)(tail)];
// Test
console.log( map( x => x * 2)([1,2,3,4,5]) );