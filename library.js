const form = document.querySelector(`[data-form]`);
const formTitle = document.querySelector(`[data-form-title]`)
const formAuthor = document.querySelector(`[data-form-author]`)
const formPrice = document.querySelector(`[data-form-price]`)
const formStatus = document.querySelector(`[data-form-status]`)

function BOOK(title, author, price, status) {
    //constructor template
    this.title = title;
    this.author = author;
    this.price = price;
    this.status = status;
}

function DISPLAY(){
    //constructor for output
}

//methods for constructor
//prototype sharing/passing to methods
DISPLAY.prototype.clear = function() {
    formTitle.value = ``;
    formAuthor.value = ``;
    formPrice.value = ``;
    formStatus.checked = false;
    // form.reset();                To reset form input fields in single command.
}

DISPLAY.prototype.add = function() {

}

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let title = formTitle.value;
    let author = formAuthor.value;

    let price = `${formPrice.value} INR`;
    if(formPrice.value === `` || formPrice.value == 0) {
        price = `0 INR`;
    }

    let status;
    if(formStatus.checked) {
        status = `read`;
    } else {
        status = `unread`;
    }

    const book = new BOOK(title, author, price, status);
    
    const display = new DISPLAY();
    display.add();
    display.clear();
});