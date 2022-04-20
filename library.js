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

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let title = formTitle.value;
    let author = formAuthor.value;
    let price = formPrice.value;

    let status;
    if(formStatus.checked) {
        status = `read`;
    } else {
        status = `unread`;
    }
    const book = new BOOK(title, author, price, status);
    console.log(book);
});