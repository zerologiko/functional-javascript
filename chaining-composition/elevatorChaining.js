/**
 * /**
 * Focus on: Elevator chained example
 *  This is not strictly functional, but is very common used.
 *  See elevatorSequence.js for pure functional example
 */
const elevetor = {
    floor: 4,
    up() {
        this.floor += 1;
        return this;
    },
    down() {
        this.floor -= 1;
        return this;
    },
    logFloor() {
        console.log('Elevator now on floor: ' + this.floor);
        return this;
    }
};

const newFloor = elevetor
    .up()
    .logFloor()
    .up()
    .logFloor()
    .up()
    .logFloor()
    .down()
    .logFloor()
    .floor;

console.log('elevetor stopped on: ' + newFloor);
