/**
 * Memoization is about storing previously calculated value to be reused.
 * Can be used when the funtction is not depending by external data (DB, random numbers)
 * and the function calculation is time consuming.
 * 
 * Usallly, a lookup table of reuslts is used:
 * "Keys": the arguments 
 * "Values": the reuslt of function
 * 
 * In real life, you'll use well tested memoization utility from libraries like Loadash
 */

 // Let's try a one argument function memoization
 // for multiple argument function we can use a key object 
 // and build the proper key from all the arguments
 const memo = f => {
     //ES6 Map
     let memoMap = new Map();

     // For test porpouses let's share the map
     global["theMap"] = memoMap;
     
     return fArg => memoMap.has(fArg) ? 
                    memoMap.get(fArg) : 
                    memoMap.set(fArg, f(fArg)).get(fArg);
 }

 let factorial = num => 
    num <= 1 ? 
    1 : 
    num * factorial(num - 1);
// assign to the same variable is important!?
factorial = memo(factorial);

console.log(factorial(5));
console.table(global["theMap"]);



