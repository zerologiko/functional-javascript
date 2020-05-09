/**
 * What is lazy evaluation? 
 * Lazy vs Eager evaluation:
 * 
 * EAGER: will compute all the elements even if later we need/access only one of them
 *        - is generally faster when all elements are needed
 *        - maybe slower when only some elements are needee (depends on how the code is written)
 *        - compute every element exactly once
 *        - works only on finite sequences
 * 
 * [1, 2, 3, 4, 5].map(x => 2 * x)[0]  <- the classic/eager "map" will porcess all the array in advance
 * [2, 4, 6, 8][0]  <- here all the array was computed but we will need only the first element after
 * 2  
 * 
 * LAZY: will defer the application of a function until really needed
 *       - slower when all elements are needed
 *       - A LOT faster when just some elements are needed
 *       - compute only some elements 
 *       - possbile problem: multiple calculations on same elements -> use with "memoization" to reduce drowback
 *       - works on infinite sequences
 * 
 * lazyMap( [1, 2, 3, 4, 5] ).get(0)  <- a lazy version of map function (implemented after in the file)
 * (x => 2 * x)( [1, 2, 3, 4, 5][0])  <- here the map function is delayed, first we apply the get function
 * (x => 2 * x)(1)  <- here we only applyied the get function, and we can apply map on ONE ELEMENT only
 * 2
 */

 // Let's implement a lazy map function
 // We will use object oriented notation to simplyfy (some lazy libraries use this abstraction, Lodash for example)
 // i.e the return value is an object with some methods available
 const lazyMap = (array, mapFunction) => {
     return {
        get: index => mapFunction(array[index]),
        take: n => array.slice(0, n).map(mapFunction),
        value: () => array.map(mapFunction)
     }
 }

 // Let's test!
 console.log( lazyMap([1, 2, 3, 4, 5], x => 2 * x).get(0) );
 console.log( lazyMap([1, 2, 3, 4, 5], x => 2 * x).value() );

 // It's always convenient use lazy evaluation? No.
 // Suppose you acces to all elements or multiple time to a subset of elements, in this case map function
 // will be applied over and over again lazily on the same elements, it would be better use eager once:
 // in the following scenario you will evaluate map 3 times on the first element, 2 times on the second.
 console.log( lazyMap([1, 2, 3, 4, 5], x => 2 * x).take(3) );
 console.log( lazyMap([1, 2, 3, 4, 5], x => 2 * x).take(2) );
 console.log( lazyMap([1, 2, 3, 4, 5], x => 2 * x).take(1) );

// The problem of accessing multiple time the same values can be solved using another tecnique: memoization.
// Let's implement a lazy memo map function, for semplicity only the get method:

const lazyMemoMap = (array, mapFunction) => {
    const memo = [];
    return {
       get: function(index) {
           if (memo[index]) {
               return memo[index];
           } else {
               memo[index] = mapFunction(array[index]);
               return memo[index];
           }
       },
       //for convenience of showing how works
       getMemo: () => memo
    }
}

console.log('--- Lazy Memo Map test ---');
// To use the memo function you have to assign it to a variable/const so that the context of the function is the same
const lazyArray = lazyMemoMap([1, 2, 3, 4, 5], x => 2 * x)

console.log( lazyArray.get(0) );
console.log( lazyArray.get(2) );
console.log( lazyArray.get(3) );
console.log( lazyArray.get(3) );
console.log( lazyArray.get(3) );
// So the memo will contain all previously calculated values ready to be used again
console.log( lazyArray.getMemo() );