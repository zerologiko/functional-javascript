const mailForm = {
    name: 'Andrea',
    email: 'andrea@mail.com',
    
    resetCallback: function(e) {
        // we don't need jQuery anymore to access nodes
        document.querySelector('.js-name').value = this.name;
        document.querySelector('.js-email').value = this.email;
    },
    saveCallback: function(e) {
        this.name = document.querySelector('.js-name').value;
        this.mail = document.querySelector('.js-email').value;
    },
    toString: function() {
        return `>>> ${this.name} - ${this.email} `
    }, 
    log: function () {
        console.log('mail form logging: ' + this.toString());
    }
}

//Bind the methods to html controls

// This won't work because the callback can't access "this" of the values due to different context
// document.querySelector('.js-reset')
//    .addEventListener('click', mailForm.resetCallback);
// This, instead works weel using context binding on the callback functions
document.querySelector('.js-reset')
    .addEventListener('click', mailForm.resetCallback.bind(mailForm));
// TRICK: instead of using bind, we can use a arrow function
// this is also no pure because we trow away result of function and rely on side-effects
document.querySelector('.js-save')
    .addEventListener('click', () => mailForm.saveCallback());

// log every second using setInterval( callBackFn, milliseconds)
// Here we need context binding to access "this.toString()" used in the log function
// also here we use the arrow function trick
setInterval(() => mailForm.log(), 1000);