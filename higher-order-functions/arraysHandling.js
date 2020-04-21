
/**
 * Focus on: 
 *   ES6  Arrays handling with higher order functions 
 *   And some useful functions to know that DO NOT mutate the original array.
 */
const arr1 = [1,5,3], arr2 = [4,2,6];
arr1.concat(arr2);

// "every" predicate: reduce the array to ONE boolean value
// true only if every elements satisfy the function condition
console.log('every? ', arr1.concat(arr2).every(e => e % 2 === 1) );

// "some" predicate: reduce the array to ONE boolean value
// true only if some elements satisfy the function condition
console.log('some? ', arr1.concat(arr2).some(e => e % 2 === 1) );

// "find" predicate: find the first element that satisfy the function condition
console.log('find: ', arr1.concat(arr2).find(e => e >= 4) );

// "join", "split, "reverse"
console.log('join: ', arr1.concat(arr2).join('-')); 
console.log('join, split: ', arr1.concat(arr2).join('-').split('-')); 
console.log('join, split, reverse: ', arr1.concat(arr2).join('-').split('-').reverse() ); 

/**
 * For each, realies on side effects, is not pure but in real world functional programming it's ok.
 */