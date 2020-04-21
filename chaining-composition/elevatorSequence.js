/**
 * Focus on: 
 * 
 *  chaining vs pure -> readability vs pure functional approach
 *  alternative to chaining -> pure "sequencing" a.k.a "function composition" -> increase readability
 */

/**
 * Now let's try to do chaining in pure functional style
 * Will be readable as well as chaining
 */
const elevator = {
    floor: 0
}
// write pure functions, no side effects, no context use, only return value based
const down = elevator => {
    return {
        floor: elevator.floor - 1
    }
}
const up = elevator => {
    return {
        floor: elevator.floor + 1
    }
}
// This is barely readable
const newFloor = up(up(up(down(elevator)))).floor;
console.log('Elevator stopped on: ' + newFloor);

/**
 * Let's try composition/sequencing -> The concept is the same, just some differences
 * 
 * DEF. compose(f,g)(x) = f(g(x)) 
 *   - composition in a strict math way needs unary funtions
 *   - still we have to read funtion from right to left for the application order 
 * 
 * DEF. sequence(f,g)(x) = g(f(x))
 *      sequence(f,g,)(...args) = g(f(...args))
 *   - sequence can work on more than one argument functions
 *   - the order of application is now more readable (first g, than f, ...)
 */

 // TRICK: This is how work with n-ary function
 // sequence => (f1, f2) => ( (...args) => f2(f1(...args)) )
 // More concise, because fat arrow is right associative operator: 
 // sequence => (f1, f2) => (...args) => f2(f1(...args))

 // first, creata a sequence of 2 function
 const sequence2 = (f1, f2) => (...args) => f2(f1(...args));
 // than use reduce to make a sequence of n functions
 const sequence = (f1, ...fRest) => fRest.reduce(sequence2, f1)

 const move = sequence(up, up, up, down);
 const newElevator = move(elevator);
 console.log('Elevator stopped on: ' + newElevator.floor);
   
