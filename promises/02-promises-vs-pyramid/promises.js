/* eslint-disable no-undef */
/**
 *  In this exercise the pyramid of doom will be resolved 
 *  refactoryng nested callbacks with ES6 promises. 
 *  Bonus: removed jQuery and used only pure ES6 Javascript
 *  (See 00-pyramid-of-doom folder for the bad example code)
 * 
 *  ROOT CAUSE -> Handling asynchronous code
 *  SYMPTOM -> callback hell / pyramid of doom
 *  RESOLUTION -> using promises
 */

// Using docuement.querySelector do not returns 
console.log('childrens of body: ');
console.log(document.querySelector('body'));

// add some handlers to html elements
// this time with document.querySelector(..)
document.querySelector('.js-get-data').addEventListener('click', loadBooks);


function loadBooks() {
    const title = encodeURIComponent( document.querySelector('.js-book-title').value);
    // Using jQuery
    const getBooksPromiseJquery = new Promise( (resolve, reject) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
        // This is the doby of a promise, so we have to resolve the response of the get here.
        $.get(url, resp => resolve(resp));
    });
    getBooksPromiseJquery.then( resp => {
        // Work with response
        const results = resp.items.map( item => {
            const book = item.volumeInfo;
            const image = book.imageLinks ? book.imageLinks.thumbnail : '';
            return `<li data-thumbnail="${image}">${book.title}</li>`;
        }).join('\n');
        document.querySelector('.js-search-results').innerHTML = results;
    }).then( () => {
        // This "than" callback is not strictly necessary, we can do everything
        // in the previous then, but is just to show the chainability 
        document.querySelectorAll('.js-search-results li').forEach( node => {
            node.addEventListener('click', displayBook);
        }); 
    });
}

function displayBook(event) {
    const src = event.target.getAttribute('data-thumbnail');
    document.querySelector('.book-img-preview').innerHTML = `<img src="${src}" />`;
}

// Ok, now this code is way better than the nested code seen in the pyramid of doom!
// Every callback can be chained and not nested. 

// We used jQuery for the "get", a promise based Ajax library (like Axios), Fetch API,
// or classic XMLHttpRequest can be used instead