/**
 * How to linearize nested code with promises?
 * 
 * This file is demo only, don't try to execute it
 */

 // The problem, nested callbacks:
 /**
  * asyncFunction1( callBackArg1 => {
  *     // ...
  *     asyncFunction2( callBackArg2 => {
  *         // ...
  *         asyncFunction3( callBackArg3 => {
  *             // ...
  *         });
  *     });
  * });
  */

  // A solution with promises:
  const asyncPromise1 = new Promise( (resolve, reject) => {
    //...
    resolve(callBackArg1);
    //...
  }).then( callBackArg1 => {
    //...
    const asyncPromise2 = new Promise( (resolve, reject) {
        //...
        resolve(callBackArg2);
        //...
    });
    return asyncPromise2;
  }).then( callBackArg2 => {
    //...
    const asyncPromise3 = new Promise( (resolve, reject) {
        //...
        resolve(callBackArg3);
        //...
    });
    return asyncPromise3;
  }).then( callBackArg3 => {
    // end of the chain, use callBackArg3 here, all the promises resolved
  });

