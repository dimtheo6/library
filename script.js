const addButton = document.querySelector('#add_book');
const dialog = document.querySelector('dialog');
const submit = document.querySelector('.submit');
const books = document.querySelector('.books');

let bookForm = document.getElementById('bookForm')

// array to store the books
const library = [];

// define the Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//  function to add the book to the library
function addBookToLibrary() {
    let newBook = new Book(title.value, author.value, pages.value, read.checked);

    library.push(newBook)

    createCard(newBook);

}

// function to create the Book Card
function createCard(book) {
    const div = document.createElement("div");
    const div2 = document.createElement('div');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    
    const b1 = document.createElement('button');
    const b2 = document.createElement('button');

    div.classList.add('book');
    div2.classList.add('group_button')
    

    p1.classList.add('book_title');
    p2.classList.add('book_author');
    p3.classList.add('book_pages');

    b1.classList.add('book_read');
    b2.classList.add('book_delete');

    p1.innerHTML = `<span class="book_label">Title:</span> <span>${book.title}</span>`;
    p2.innerHTML = `<span class="book_label">Author:</span> <span>${book.author}</span>`;
    p3.innerHTML = `<span class="book_label">Pages:</span> <span>${book.pages}</span>`;

    b1.textContent = 'Have you read this?';
    b2.textContent = 'Delete'

    // Append elements to the DOM
    books.appendChild(div);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
    div.appendChild(div2);
        div2.appendChild(b1);
        div2.appendChild(b2);

    b1.textContent = book.read ? 'Read' : 'Not Read';
    b1.style.background = book.read ? 'rgba(1, 235, 1, 0.5)' : 'rgba(252, 37, 37, 0.5)';
    
    //  Read Toggle Button
    b1.addEventListener('click', function () {
        
        // Read - Not Read Toggle
        book.read = !book.read;

        b1.textContent = book.read ? 'Read' : 'Not Read';
        b1.style.background = book.read ? 'rgba(1, 235, 1, 0.5)' : 'rgba(252, 37, 37, 0.5)';
        
    })

    // Store the book object as a property of the div
    div.book = book;

    //      remove parent
    b2.addEventListener('click', function () {
        // remove the parent
        div.remove();

        // remove the object from the array
        const index = library.indexOf(div.book);

        if (index > -1) {
            library.splice(index, 1);
        }
    });

}


//    Submit button
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let read = document.getElementById('read');
    1
    addBookToLibrary();

    document.querySelector('form').reset();
    dialog.close();

})


//  modal

addButton.addEventListener('click', () => {
    dialog.showModal();
})

window.onclick = function (event) {
    if (event.target == dialog) {
        dialog.close();
    }
}
