/**
 * Focus on: curriyng in some practical use cases.
 * 
 * Currying is bout trasforming a function with multiple arguments
 * in a function with one arguments returing a function that handles 
 * the rest of the arguments. It's a very powerful technique.
 * 
 *  Uncurried:
 *  f = (a, b) => value
 *  Becomes:
 *  f = a => (b => value)
 *  due to fat arrow right associativity (it's conventionally evaluated from right to left):
 *  f = a => b => value 
 * 
 *  Whenever you have some functionality to abstract, you can factor out some arguments of
 *  arguments of a function to anexternal function.
 * 
 *  Benefits: DRY: Dßon't Repeat Yourself
 * 
 *  REMEMBER: inner function just "see" the return value of the outer functions, 
 *            context and params should be managed in some other way (e.g. using a library)
 *            For example, "Lodash" have a _.curry(f) function already buit in. 
*/

const f = (a, b) => a * b;
console.log('f evaluated: ' + f(2, 3));

const fCurried = a => b => a * b;
const g = fCurried(2);
// so this is the b => a * b
console.log( 'fCurried partially applied: ' + g) ;
console.log( 'fCurried totally applied: ' + g(3) );
console.log( 'fCurried evaluated in one time: ' + fCurried(2)(3) );
// Another example with more params
const mul = a => b => c => a * b * c;
const mul6 = mul(3)(2);
console.log( 'curried mul6: ' + mul6(10));

/**
 * Practical example: an exam score evaluating function 
*/ 
const uncurriedPassExam = (average, testScore, passGrade, failGrade)  => 
        testScore > average ? passGrade : failGrade;

console.log('uncurried passExam: ' + uncurriedPassExam(7.5, 6, 'A', 'F') ); 

// Let's pull out the "average param" to build a "tester function":
const curriedLevelEasy = 
        average => 
        (testScore, passGrade, failGrade) =>
        testScore > average ? passGrade : failGrade;
console.log('curriedLevelEasy passExam: ' + curriedLevelEasy(6)(7.5, 'A', 'F') ); 
const testerFunction8Average = curriedLevelEasy(8);
console.log('testerFunction6Average passExam: ' + testerFunction8Average(7.5, 'A', 'F') ); 

// next step, curry the pass and fail grade to build a "tester with sutom grades":
const curriedLevelMedium = 
    (passGrade, failGrade) => 
    average => 
    testScore =>
    testScore > average ? passGrade : failGrade;
console.log('curriedLevelMedium passExam: ' + curriedLevelMedium('A', 'F')(6)(7.5) ); 
const testerFunction8AverageFunGrades = curriedLevelMedium('Oh Yes!','Booh I failed!')(6);
console.log('testerFunction8AverageFunGrades passExam: ' + testerFunction8AverageFunGrades(7,5));
console.log('testerFunction8AverageFunGrades passExam: ' + testerFunction8AverageFunGrades(4));

// last step fully curried function, just curry grades splitted:
const curriedFully = 
    passGrade => 
    failGrade => 
    average => 
    testScore =>
    testScore > average ? passGrade : failGrade;
console.log('curriedFully passExam: ' + curriedFully('A')('F')(6)(7.5) ); 

// Load the full build of Lodash and test the generic "curry" method implementation.
var _ = require('lodash');
const curriedByLodash = _.curry(uncurriedPassExam);
console.log('curried by Lodash passExam: ' + curriedByLodash('A')('F')(6)(7.5) ); 
const curriedPartiallyByLodash =curriedFully('A')('F')(6)
console.log('curried partially by Lodash passExam: ' + curriedPartiallyByLodash(7.5) ); 


// No custom implementation of currying yet... will see next.