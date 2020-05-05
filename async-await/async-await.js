/**
 * After promieses, another way to handle asynchronous code is Async-Await
 * 
 * "async" is the Javascript construct to define an asynchronous function
 * 
 * const f = async function (...args) {...};
 * const f = async (...args) => {...};
 * async function f(...args) {...}; 
 * 
 * An asynchronou function return a promies
 */

// This will return the value wrapped in a resolved promise (nice!)
// Note: the use of the parenthesis to invoke the async function, 
// is slightly different from defining a promise directly.
const resolvedFive = async () => {
    return 5;
};
resolvedFive().then( resolvedValue => console.log(resolvedValue) );

// Also when an error is thrown, a rejected promise is returned
const rejectedFive = async () => {
    // throw new Error('Error getting the wanted 5');
};
// getting the value will throw the Error logging the reason.
// Since the Error is thrown in the async definition, 
// and the async immediately resolve/reject the promise,
// the catch is not executed and you get error right away invoking the async function. 
rejectedFive().catch(error => console.log('catch: ' + error.message)); 

// Ok that's the "Async", and the "Await" part?
// - await can be ONLY used in async function
// - it blocks the execution of the function until a promise is resolved or rejected
// This is useful to wait for an async operation to achieve sequential API calls 
// Example: we want to wait for a promise and then do something after
const blockingPromise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('GO'), 3000);
});
const asyncGetFive = async function() {
    const awaitedValue = await blockingPromise;
    console.log('[AWAIT] starting  waiting for a promise to resolve in an async function');
    if(awaitedValue) {
        console.log(`[AWAIT] waited a promise resolved to: ${awaitedValue}`);
    }
}
// call the aync function
asyncGetFive();

