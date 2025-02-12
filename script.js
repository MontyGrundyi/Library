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

Book.prototype.toggleBookStatus = function() {
    this.read =! this.read
}



const book1 = new Book("J.K. Rowling", "Harry Potter", 400, true);
book1.addBookToLibrary();

const book2 = new Book("George Orwell", "1984", 328, false);
book2.addBookToLibrary();

const verity = new Book("Colleen Hoover", "Verity", 240, false )
verity.addBookToLibrary()

function addDataToTable() {
    const tableBody = document.querySelector("#booksTable tbody");
    tableBody.innerHTML = "";

    myLibrary.forEach((book, index)=> {
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
        readCell.textContent = book.read? "✅ Yes" : "❌ No";
        row.append(readCell)

        const actionCell = document.createElement("td")
        actionCell.classList.add("action-buttons")

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.setAttribute("data-index", index)
        row.append(deleteButton);
        actionCell.appendChild(deleteButton)
        // tableBody.append(row);

        const toggleStatusButton = document.createElement("button")
        toggleStatusButton.textContent = "Toggle Read";
        toggleStatusButton.classList.add("toggle-btn")

        if (book.read) {
            toggleStatusButton.classList.add("read")
        } else {
            toggleStatusButton.classList.add("not-read")
        }
        toggleStatusButton.setAttribute("data-index", index)
        actionCell.appendChild(toggleStatusButton)
        // row.append(toggleStatusButton);


        row.appendChild(actionCell)
        tableBody.appendChild(row)

    });
    attachDeleteEvents();
    attachToggleStatus();

    
}

function attachDeleteEvents() {
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", (e)=> {
            const index = e.target.getAttribute("data-index");
            myLibrary.splice(index, 1);
            addDataToTable();
        })
    })
}

function attachToggleStatus() {
    document.querySelectorAll(".toggle-btn").forEach(button=> {
        button.addEventListener("click", (e)=>{
            const index = e.target.getAttribute("data-index");
            myLibrary[index].toggleBookStatus();
            addDataToTable();
        })
    })
}

addDataToTable()

const clickNewBookButton = function() {
    const newBookButton = document.querySelector("#addBook")

    newBookButton.addEventListener("click", ()=> {
        const body = document.querySelector("body")

        const dialog = document.createElement("dialog")
        dialog.setAttribute("id","dialog")
    })
}

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const submitbtn = document.getElementById("submit");
const bookForm = document.getElementById("bookform"); 
const cancelbtn = document.getElementById("cancel")


showBtn.addEventListener("click", ()=>{
    dialog.showModal();
})

dialog.addEventListener("click", (e)=>{
    if (e.target === dialog) {
        bookForm.reset()
        dialog.close();
    }
        
})

cancelbtn.addEventListener("click", ()=>{
    bookForm.reset();
    dialog.close()
})

submitbtn.addEventListener("click", (e)=>{
    e.preventDefault();

    let author = document.getElementById("author").value.trim();
    let title = document.getElementById("title").value.trim();
    let pages = document.getElementById("pages").value.trim();
    let read = document.getElementById("read").checked;

    if (author === "" || title === "" || pages==="") {
        alert("All fields must be filled")
        return;
    }

    let newBook = new Book(author, title, pages, read)

    newBook.addBookToLibrary()
    addDataToTable()

    bookForm.reset();
    dialog.close();
})

// addDataToTable()

