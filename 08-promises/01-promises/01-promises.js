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

// Let's start with a simple promise that can resolves only:
// it takes two callback functions: "resolve" and "reject"
const iceCreamPromise = new Promise( function(resolve, reject) {
    // here do something async and time consuming (Network, I/O, ...)
    resolve('chocolate icecream');
});
// With "then" we can add one or more "resolve" callbacks: "then" are chainable
iceCreamPromise.then( iceCream => {
    console.log(`Thank you for the ${iceCream}`);
    return 'Ice cream was good.';
}).then( status => {
    return console.log('Status message:', status);
});
// Also other than can be added aside.
iceCreamPromise.then( () => {
    return console.log('Someone got gelato?!');
});

// Note the flow of execution of async promises: do not take order for granted :)
console.log('>> This is a console log in the end of the file');


