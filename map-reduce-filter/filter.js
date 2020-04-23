/**
 * Filter is a higher order function to replace iterative loops, ES6 already have a array.filter(..) 
 * function that is side effetcs free.
 * that can be used on arrays to filter elements given a function "predicate"
 * the filter will return only the elements that satisfy the boolean predicate.
 */

const students = [
    { id: 1, name: 'Andrea' },
    { id: 2, name: 'Mario' },
    { id: 3, name: 'Luigi' }
];

const exams = [
    { id: 1, course: 'Math', studentId: 3 },
    { id: 2, course: 'Math', studentId: 2 },
    { id: 3, course: 'Biology', studentId: 3 },
    { id: 4, course: 'Science', studentId: 1 },
]

const filteredExams = exams.filter(e => e.course === 'Math');
console.table(filteredExams);


// As exercise, let's implement our simple filter 
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

// NOTE: filter function is syntactic sugar, can be implemented with a reduce function
const filter = (array, filterFunction) => {

    const filterReducer = (accumulator, elem) =>
        filterFunction(elem) ? [...accumulator, elem] : accumulator;

    return array.reduce(filterReducer, []);
} 