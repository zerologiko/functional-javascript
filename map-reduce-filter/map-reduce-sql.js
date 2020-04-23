/**
 * Map, filter, find, reduce can be used like SQL to do SELECT, JOIN, GROUPBY 
 * More generally, for processing data in a declararive way in functional programming 
 */

const students = [
    { id: 1, name: 'Andrea' },
    { id: 2, name: 'Mario' },
    { id: 3, name: 'Luigi' },
    { id: 4, name: 'Maria' },
    { id: 5, name: 'Ugo' }
];

const exams = [
    { id: 1, course: 'Math', score: 10, studentId: 3 },
    { id: 2, course: 'Math', score: 9, studentId: 2 },
    { id: 3, course: 'Biology', score: 7, studentId: 3 },
    { id: 4, course: 'Science', score: 5, studentId: 1 },
    { id: 5, course: 'Biology', score: 10, studentId: 4 }
];

// SELECT S.name, E.course, E.score 
// FROM exams E
// JOIN students S on S.id = E.strudentId
const joinStudentExams = exams.map(e => {
    const student = students.find(s => s.id === e.studentId);
    return {
        name: student.name,
        course: e.course,
        score: e.score
    }
}
);
console.table(joinStudentExams);

// SELECT S.name, count(E.id)
// FROM students S
// JOIN exams E on on E.strudentId = S.id
// GROUP BY S.id 
const studentsCountExams = students.map(s => {
    //the count can be done also with filter and taking the length of the result array  
    const countReducer = (count, exam) => exam.studentId === s.id ? count + 1 : count;
    const examCount = exams.reduce(countReducer, 0);
    return {
        studentName: s.name,
        examCount
    };
});
console.table(studentsCountExams);
