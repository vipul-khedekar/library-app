const form = document.querySelector(`[data-form]`);
const formTitle = document.querySelector(`[data-form-title]`)
const formAuthor = document.querySelector(`[data-form-author]`)
const formPrice = document.querySelector(`[data-form-price]`)
const formStatus = document.querySelector(`[data-form-status]`)

function BOOK(title, author, price, status) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.status = status;
}