/**
 * Lodash library offer a native "lazyList" implementation
 */

// import lodash
var _ = require('lodash');

// just use the "_" function to wrap an array
const lazyList = _([1, 2, 3, 4, 5, 6]);

// a "map" operation over a lazy list will return another lazy list
// but no elements are computed yet
const lazyListMapped = lazyList.map(n => 2 * n); 

// take the first 2 elements of the lazy list and returns another lazyList
const first2LazyListMapped = lazyListMapped.take(2);

// ONLY when the .value() method is called, the map operation is performed on the lazy list 
console.log( first2LazyListMapped.value());