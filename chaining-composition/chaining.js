/**
 * Focus on: 
 *  chaining -> apply a sequence of functions one after another
 *  This is not strictly functional, but is very common used
 */

console.log(
    ['Apple', 'Kiwi', 'Orange', 'Peach', 'Watermelon']
        .map(elem => elem.length)
        .filter(elem => elem % 2 == 0)
        .reduce((a, b) => a + b, 0)
);



