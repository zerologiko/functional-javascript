/**
 * Multiple promises are usefull whenever we need to call multiple async operations.
 * 
 * Javascript have "Promise.all" to handle multiple promises:
 * 
 * Promise.all([firstPromise], [secondPromise])
 *      .then(onAllPromisesAreFulfilled)
 *      .catch(onAnyPromiseIsRejected);
 */

// We'll use two promises: 
// - an immediately resolved promise for icecream
// - a delayed promise for a console game that resolve/reject in 3 seconds
const instantIcecream = Promise.resolve('chocolate')

const gamePromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // resolve('Super Mario Kart'); 
        reject(new Error('Game is out of stock'));
    }, 3000);
});

Promise.all([instantIcecream, gamePromise])
    .then( values => console.log('All resolved values: ', values) )
    .catch( error => console.log('The first error is: ', error.message) );