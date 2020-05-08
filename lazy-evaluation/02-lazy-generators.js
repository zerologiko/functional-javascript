/**
 * Generator functions can be used to create lazy functions
 * to get "lazy sequences".
 * 
 * - can only be accessed sequentially
 * - elements can be only retrieved once
 * - infinited sequences are not exhaustively enumerable
 * 
 */

// Let's implement a lazy "filter" using genrator funciton
// generators returns an iterabel on which .next() can be called.
// so, lazyFilter accept an iterable and return an iterable: this is useful!
 const lazyFilter = function * (iterable, filterFunction) {
    for (let elem of iterable) {
        if (filterFunction(elem)) yield elem;
    }
 }
const numbersFiler = lazyFilter([1,2,3,4,5,6,7], n => n % 2 === 0);
console.log(numbersFiler.next());
console.log(numbersFiler.next());
console.log(numbersFiler.next());

// Lazy map? Ok
const lazyMap = function * (iterable, mapFunction) {
    for (let elem of iterable) {
        yield mapFunction(elem);
    }
}
const numberMap = lazyMap([1,2,3,4,5,6,7], n => n * n);
console.log('mapping: ', numberMap.next());
console.log('mapping: ', numberMap.next());

// We can combine map and filter, suppose we have to capitalize names and filter those longer than 5 chars
const names = ['ugo', 'mario', 'isabelle', 'ed', 'bob'];
const capitalize = name =>  name[0].toUpperCase() + name.slice(1);
const filterLonger5 = name => name.length <= 5;

const mapIterable = lazyMap(names, capitalize);
// that's the little trick: use the first lazy sequence iterable into the filter (also accepting an iterable)
// so we can chain every lazy evaluated sequence this way
const filterMapperIterator = lazyFilter(mapIterable, filterLonger5);

// TEST calling next or iterating over
console.log( filterMapperIterator.next() );
for (let name of filterMapperIterator) {
    console.log(name);
} 



