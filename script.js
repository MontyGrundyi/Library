const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addBookToLibrary = function() {
    return myLibrary.push(this)
  } 

const book1 = new Book("J.K. Rowling", "Harry Potter", 400, true);
book1.addBookToLibrary();

const book2 = new Book("George Orwell", "1984", 328, false);
book2.addBookToLibrary();

const verity = new Book("Colleen Hoover", "Verity", 240, false )
verity.addBookToLibrary()

function addDataToTable() {
    const tableBody = document.querySelector("#booksTable tbody")

    myLibrary.forEach(book=> {
        const row = document.createElement("tr");

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        row.append(authorCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        row.append(titleCell);

        const pagesCell = document.createElement("td");
        pagesCell.textContent = book.pages;
        row.append(pagesCell)

        const readCell = document.createElement("td");
        readCell.textContent = book.read;
        row.append(readCell)

        tableBody.append(row)




    })
}


addDataToTable()