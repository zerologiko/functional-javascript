/**
 * An example of async await: 
 * suppose we want to do something sequencial like wait for a user authentication 
 * and than, only after authentication call two or more API (asynchronous operation) in parallel
 * like get all the books from an API and render all the books right after.
 */

// So we "serialized" a login operation with 2 parallel async operation
//    
//          Login            <- async function
//         /     \
//   getBook1   getBook2     <- async function used like promieses
//          \   /
//            |
//       renderBooks1        <- sync functions
//            |
//       renderBooks2


// these are two async function
// rememeber:  an async function will return a resolved promise as seen before)
const isUserLogged = async (userName) => {
     console.log(`[LOGIN] doing login for ${userName}`);
     return true;
};
const getTopTenBooks = async x => x;

// this is a simple synchronous function
const renderBooks = b => console.log(`Renderd book: ${b}`);

// Let's try, we need an async function to use await
const populateBooks = async (user) => {
    // awit on an async function
    const isLogged = await isUserLogged(user);
    if (isLogged) {
        console.log('user is logged now.');
        // we can await also on promises
        // rember: Promise.all returns an array of all the fulfilled promises values
        // we can use "destructuring assignament" to conviently get the two results
        const [firstTenBooks, secondTenBooks] = await Promise.all([
            getTopTenBooks('Android'),
            getTopTenBooks('JavaScript')
        ]);
        console.log('All promises resolved in parallel.');
        // here we have all the books to render
        renderBooks(firstTenBooks);
        renderBooks(secondTenBooks);
    }
};
// Let's test.
// note: also populateBooks(..) will return a default undefined promise because is async itself
// so you can chain other "than" clauses after the execution if needed. 
populateBooks('Mario').then(() => console.log('[THEN] All books rendered.'));


