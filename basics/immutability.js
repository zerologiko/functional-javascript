/**
 * Focus on:
 *   pure functions -> no side effects
 *   true immutability?
 */
function addItem(cart, item, price) {
    /**
     * The push() adds elements to the end of an array and returns the new length of the array.
     * The concat() is used to merge arrays and does not change the existing arrays,
     * but instead returns a new array -> immutability preserved?
     */
    return cart.concat([{item, price }]);
}

const cart = [];
const cart1 = addItem(cart, 'Biscuits', 10);
const cart2 = addItem(cart1, 'Gummy bears', 5);
console.log('cart1 is: ', cart1);
console.log('cart2 is: ', cart2);

// now try to change biscuits price on cart2: will change also cart1?
// This is not correct if we want immutability!
// (...also this assignament is not correct because would break immutability)
cart2[0].price = 20;
console.log('modifyed cart2 is: ', cart2);
console.log('Is also cart1 modified?: ', cart1);

// Why? The first element of cart1 and cart2 points to the same exact object!
// The solution is DO NOT CHANGE OBJECTS in first place, or use cloning,
// or using an immutability library to enforce it (immutable.js)
// Use betterAddItem instead addItem and try again.
// Notes: 
// this cloning method cannot be used to clone methods of objects due to limitation of JSON format
// also will not work on circular data structures. Bottomline, use an opensource well tested cloning
let clone = (obj) => JSON.parse(JSON.stringify(obj));

function betterAddItem(cart, item, price) {
    const newCart = clone(cart);
    return newCart.concat([{item, price}]);
}

