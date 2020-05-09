/**
 * This technique shows how to call a sequence of Promiese in sequence.
 * This is a generic way to handle more promises in sequence with await
 */

const asyncSequence = async function() {

    const promise1 = new Promise( (resolve, reject) => {
        setTimeout(() => resolve('promise 1 resolved'), 1000);
    });
    const callBackArgs1 = await promise1;
    console.log(callBackArgs1);

    const promise2 = new Promise( (resolve, reject) => {
        setTimeout(() => resolve('promise 2 resolved'), 500);
    });
    const callBackArgs2 = await promise2;
    console.log(callBackArgs2);

    const promise3 = new Promise( (resolve, reject) => {
        setTimeout(() => resolve('promise 3 resolved'), 500);
    });
    const callBackArgs3 = await promise3;
    console.log(callBackArgs3);

    return callBackArgs3;
};

// Test: also, the async method itsel returns a promise, so we can chain thens 
asyncSequence().then( (asyncSeqReturnArgs) => console.log('End of the chain: ' + asyncSeqReturnArgs));