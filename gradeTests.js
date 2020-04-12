/**
 * Focus on: 
 *   map, reduce, currying
 *   mapping elements unig recursion and then using "map" 
 */

// Using "reduce" implement the an average function
function avg(exams) {
    return exams.reduce((acc, elem) => { return acc + elem; }) / exams.length;
}
// We want to map exam grades from numbers to a grade 'PASS' or 'FAIL'
// This is a simple recursive version
function mapTestsToGradesRecursive(exams, average) {
    if (exams.length == 0) {
        return [];
    }
    const head = exams[0];
    const tail = exams.slice(1);
    return [head >= average ? 'PASS' : 'FAIL'].concat(
        mapTestsToGrades(tail, average)
    );
}
// ...but map is way cleaner using also arrow functions :)
function mapTestsToGrades(exams, average) {
    // here using currying we will pass 'average' to 'map' in a clean way.
    // So, getGradeTest is a unary function, that returns a function, 
    // that return the grade using the value of the prevoius function
    let getGrade = average => ((exam) => exam >= average ? 'PASS' : 'FAIL');
    // gradeTest is a "partial applyied" function that "knows the average" and can be applied to an exam 
    let gradeTest = getGrade(average);
    return exams.map(gradeTest);
}
// A function that decide if an exam is pass or fail
function gradeExams(exams) {
    const averages = avg(exams);
    return mapTestsToGrades(exams, averages);
}
// ok let's try
const someExams = [10, 5, 6, 7, 9, 2, 3, 4];
const avgVotes = avg(someExams);
console.log('Exams are: ' + someExams + ' Avg is: ' + avgVotes);
console.log('Grades recursive are: ' + mapTestsToGradesRecursive(someExams, avgVotes));
console.log('Grades with map are: ' + gradeExams(someExams));
