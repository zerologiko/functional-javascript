/**
 * Nothing scary here: higer order function are functions that 
 * take functions as arguments end/or returns functions
 * 
 * Example: 
 *   setInterval(() => console.log('test'), 1000) takes a function as argument. 
 *   array1.forEach(elem => console.log(elem)) takes a function 
 */

// This function returns a function that takes a value to format
const formatCurrency = (symbol, decimalSeparator) => (value) => {
    const wholePart = Math.trunc(value / 100);
    let fractionalPart = value % 100;
    if (fractionalPart < 10) {
        fractionalPart = '0' + fractionalPart;
    }
    return `${wholePart}${decimalSeparator}${fractionalPart}${symbol}`;
};

// 'peel' the first function, we have the second function in the currencyFormatter
const currencyFormatter = formatCurrency(' €', ',');
console.log( currencyFormatter(1290) );
console.log( currencyFormatter(0) );

// Format all the currencies with some arrays higher order functions
const currencies = [100, 125, 0, 10, 35, 9,];

// ES6 introduced the "for of" loop, worth knowing it.
// for (let curr of currencies) {
//    console.log( currencyFormatter(curr) )
// }

// for each using side effect -> ACCETTABLE, no modifications on data
currencies.forEach( e => console.log(currencyFormatter(e)) );


// for each NOT ACCETTABLE -> side effects, rely on context, mutability!. 
let formattedCurrencies = [];
currencies.forEach(
    e => formattedCurrencies.push(currencyFormatter(e))
);
