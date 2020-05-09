/* eslint-disable no-undef */
/**
 * To introduce asynchronous operation, we must know the problem: 
 * "callback hell" or "pyramid of doom" is an anti-pattern we don't want.
 * We'll use jQuery just to demonstrate this scenario.
 * 
 *  ROOT CAUSE -> Handling asynchronous code
 *  SYMPTOM -> callback hell / pyramid of doom
 */

// Jquery is loaded in the html page
console.log('childrens of body: ');
console.log($('body').children());

// add some handlers to html elements
$('.js-get-data').click( () => {
    //get the book title from form input
    const title = encodeURIComponent( $('.js-book-title').val());
    //get the URL of the Google public API and fire an ajax request with $.get(...)
    //example: https://www.googleapis.com/books/v1/volumes?q=moby%20dick
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
    $.get(url, resp => {
        const results = resp.items.map( item => {
            const book = item.volumeInfo;
            const image = book.imageLinks ? book.imageLinks.thumbnail : '';
            return `<li data-thumbnail="${image}">${book.title}</li>`;
        }).join('\n');
        // disply items result injecting into the DOM node
        $('.js-search-results').html(results);
        // define a click event on the book title extract data for image
        $('.js-search-results li').click( event => {
            const src = $(event.target).attr('data-thumbnail');
            $('.book-img-preview').html(`<img src="${src}" />`);
        });
    });
});


// Ok the code works BUT is very nested, and only with a simple page we have 3 level of nesting.
// Callbacks inside callbacks, inside callbacks: we must escape this pyramid!
// We need to learn how to manage async operation with promises, async-await, etc..