/**
 * Focus on context binding
 * 
 * This is not strictly a functionl programming concept, 
 * but is useful in javascript for callbacks, event handling, set timeouts, ...
 * also will introduce currying and partial evaluation
 */

 function rectangleArea() {
    return this.height * this.witdh;
 }
// this will return obiouvsly undefined beacause no this.height and this.witdh 
// are in the context of the function (and the function have no parameter)
 console.log('area unbind: ' + rectangleArea());

 const rectangle = {
     height: 5,
     witdh: 10
 };

 console.log('area bound: ' + rectangleArea.bind(rectangle)());

 // Actually bind() thake more than one param, if used will substitute params of the binded function one by one
 const add = (a, b) => {
     console.log(`adding: ${a} and ${b}`);
     return a + b
};

const add5 = add.bind(null, 5);
// So this will add (a, 5) passing "a" param like 10 will call add(10, 5)
// note that it is some sort of "partial application"
console.log(add5(10));