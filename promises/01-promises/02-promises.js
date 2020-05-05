/**
 * Promises describe the eventual result of an asynchronous operation
 * 
 * A promise have two outcome:
 * - a kept promise: a value is guaranteed
 * - a broken promise: a reason for rejection is guaranteed
 *
 * Promises have three states: starts in "pending" and can go in "fulfilled" or "rejected" state
 *    
 * (1) pending --> (2) fulfilled 
 *             --> (3) rejected
 */

// Ok what happens in case of errors?
// a "catch" callback can be added, it will be executed on every error thrown in the promises chain.
// - Also in the promise definition, will break the promise but the catch is executed (and logged)
//   without executing any of the "then" callbacks. Try to put "false" in the dummy if.
// - After the last catch, could be chained anothr "then" do it only if the last callback is another "catch"
//   It's always better to stick to "then, then, .. , catch" structure.
const wrongIceCreamPromise = new Promise(function(resolve, reject) {
    // dummy if
    if (true) {
        resolve('strawberry icecream');
    } else {
        reject(new Error('No icecream shops found!'));
    }
});

wrongIceCreamPromise.then( iceCream => {
    console.log(`Thank you for the ${iceCream}`);
    return 'I am eating strawberry';
}).then( status => {
    console.log(status);
    throw new Error('I wanted chocolate, not strawberry!');
}).catch( error => {
    console.log('Problem:', error.message);
    // return somethin else meaningful
    return 'No icecream or wrong flavour? I want cake';
}) //.then( lastAfterCatch => { console.log(lastAfterCatch)});


// It's possible to resolve a pomise right away
// Also note the async execution order of the promieses in the logs
const instantIcecream = Promise.resolve('chocolate').then( iceCream => { 
    console.log('Wow! Instant icecream! Flavor: ', iceCream);
});