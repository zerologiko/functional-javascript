/**
 * Some functional basics with ES6 Javascript
 * function to create a new invoice focus on immutability
 * 
 */

function createInvoice(invoiceNumber) {
    return {
        invoiceNumber,
        items: []
    };
}

function clone(o) {
    return JSON.parse(JSON.stringify(o));
}

function addItem(invoice, quantity, price, description) {
    // Using clone to return a new copy -> try to keep immutability.
    const newInvoice = clone(invoice);
    // this is a side effect (but we can stand it for now)
    newInvoice.items.push({
        quantity,
        price,
        description
    });
    return newInvoice;
}

function calculateSum(invoice) {
    const logReducer = (acc, item) => {
        console.log('[logging] -> acc , item :', acc, item);
        return acc + item.quantity * item.price;
    }
    return invoice.items.reduce(logReducer, 0);
}

// Let's try, just to show immutability
const invoice1 = createInvoice(1);
const invoice1b = addItem(invoice1, 2, 50, "banana");
const invoice1c = addItem(invoice1b, 4, 10, "apple");
const invoice1d = addItem(invoice1c, 1, 30, "orange");

console.log('Invoice sum:', calculateSum(invoice1d));
