/**
 * Map is a higher order function to replace iterative loops 
 * that can be used on arrays to filter elements given a function "predicate"
 * the filter will return only the elements that satisfy the boolean predicate.
 */

const filterSimple = ([head, ...tail], predicate) => {
    if (typeof head === 'undefined') {
        return [];
    } else if (predicate(head) === true) {
        return [head, ...filter(tail, predicate)];
    } else {
        return filter(tail, predicate);
    }
}

 // Ok, very short version, using ternary operator a bit too mutch
 const filter = ([head, ...tail], predicate) => 
    typeof head === 'undefined' ? [] :
        predicate(head) ? [head, ...filter(tail, predicate)] 
            : filter(tail, predicate);

const filterResult = filter([10, 20, 30, 1, 2], n => n > 10);

console.log("filter: " + filterResult);