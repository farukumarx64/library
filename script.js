function clearInput(getValue){
    if (getValue.value !="") {
        getValue.value = "";
    }
}


let container = document.querySelector('.container');
let addBook = document.querySelector('.add');
let form = document.querySelector('.form');
form.style.display = 'none';

let closeForm = document.querySelector('.close');


let title = document.querySelector('.title');

let author = document.querySelector('.author');

let pages = document.querySelector('.pages');

let checker = document.getElementById('check');
let checkerString;

let submit = document.querySelector('.submit');



function createBookCard(book) {
    let bookDisplay = document.createElement('div');
    bookDisplay.className = 'book'

    let titleText = document.createElement('p');
    let authorText = document.createElement('p');
    let pagesText = document.createElement('p');

    let checkerButton = document.createElement('button');
    checkerButton.className = 'read'

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'remove'
    deleteButton.className = 'delete'

    titleText.textContent = book.title
    bookDisplay.appendChild(titleText)

    authorText.textContent = book.author
    bookDisplay.appendChild(authorText)

    pagesText.textContent = book.pages
    bookDisplay.appendChild(pagesText)

    checkerButton.textContent = checkerString
    console.log(checkerButton.textContent)
    if (checkerButton.textContent === 'read') {
        checkerButton.style.backgroundColor = 'lightgreen';
        checkerButton.style.color = 'white'
    } else {
        checkerButton.style.backgroundColor = '#e9e9ed';
        checkerButton.style.color = 'black'
    }

    checkerButton.addEventListener('click', function () {
        if (checkerButton.textContent === 'not read') {
            checkerButton.style.backgroundColor = 'lightgreen';
            checkerButton.style.color = 'white'
            checkerButton.textContent = 'read'
        } else {
            checkerButton.style.backgroundColor = '#e9e9ed';
            checkerButton.style.color = 'black'
            checkerButton.textContent = 'not read'
        }
    })

    bookDisplay.appendChild(checkerButton)

    bookDisplay.appendChild(deleteButton)

    deleteButton.addEventListener('click', function() {
        container.removeChild(bookDisplay)
    })

    container.appendChild(bookDisplay)

    console.log(container)
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read} yet`
    }
}

let myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book)
    console.log(myLibrary)
}

/* function displayBooks() {
    
    myLibrary.forEach(book => console.log(book))
} */
// #e9e9ed

function displayForm() {
    if (form.style.display == 'none') {
        form.style.display = '';
    }
    
}

addBook.addEventListener('click', displayForm);
closeForm.addEventListener('click', function () {
    form.style.display = 'none';
    clearInput(title)
    clearInput(author)
    clearInput(pages)
    checker.checked = false;

})

submit.addEventListener('click', function () {
    if (checker.checked) {
        checkerString = 'read'
    } else {
        checkerString = 'not read'
    }
    let book = new Book(title.value, author.value, pages.value, checkerString)
    console.log(book.info())
    addBookToLibrary(book);

    createBookCard(book)
    
    form.style.display = 'none';
    clearInput(title)
    clearInput(author)
    clearInput(pages)
    checker.checked = false;
})

