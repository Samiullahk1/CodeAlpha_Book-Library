let myLibrary = [];

function Book(name, author, pages, read, category, borrowingHistory) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.category = category;
  this.borrowingHistory = borrowingHistory || []; // Initialize as an empty array if not provided
}

const addBookToLibrary = () => {
  alert("Add your book details");
  let name = prompt("Add your book name?");
  let author = prompt("Add the author?");
  let pages = parseInt(prompt("Add the pages?"));
  if (Number.isNaN(pages)) {
    alert("Pages must be a number.");
    return;
  }
  let read = prompt("What is your reading status?");
  let category = prompt("Enter the category:");

  let borrowingHistory = [];
  while (true) {
    let borrowDate = prompt("Enter borrow date (YYYY-MM-DD) or leave blank to finish:");
    if (!borrowDate) break;
    borrowingHistory.push(`Borrowed: ${borrowDate}`);
  }

  let book = new Book(name, author, pages, read, category, borrowingHistory);
  myLibrary.push(book);
};

const displayBooks = () => {
  let table = document.getElementById("tableData");
  table.innerHTML = ""; // Clear previous data before displaying books

  myLibrary.forEach((book, index) => {
    let row = table.insertRow();
    row.insertCell(0).innerText = book.name;
    row.insertCell(1).innerText = book.author;
    row.insertCell(2).innerText = book.pages;
    row.insertCell(3).innerText = book.read;
    row.insertCell(4).innerText = book.category;
    row.insertCell(5).innerText = book.borrowingHistory.join("\n");
    row.insertCell(6).innerHTML = `<button onclick="deleteBook(${index})">Delete</button>`;
  });
};

const searchBook = () => {
  let query = document.getElementById("searchInput").value.toLowerCase();
  let table = document.getElementById("tableData");
  table.innerHTML = ""; // Clear previous data before displaying search results

  myLibrary
    .filter((book) => book.name.toLowerCase().includes(query))
    .forEach((book, index) => {
      let row = table.insertRow();
      row.insertCell(0).innerText = book.name;
      row.insertCell(1).innerText = book.author;
      row.insertCell(2).innerText = book.pages;
      row.insertCell(3).innerText = book.read;
      row.insertCell(4).innerText = book.category;
      row.insertCell(5).innerText = book.borrowingHistory.join("\n");
      row.insertCell(6).innerHTML = `<button onclick="deleteBook(${index})">Delete</button>`;
    });
};

const deleteBook = (index) => {
  myLibrary.splice(index, 1);
  displayBooks();
};

const btn = document.getElementById("dataButton");
btn.addEventListener("click", addBookToLibrary);

const stn = document.getElementById("showButton");
stn.addEventListener("click", displayBooks);

const searchBtn = document.getElementById("searchButton");
searchBtn.addEventListener("click", searchBook);

const myDeleteFunction = () => {
  let table = document.getElementById("tableData");
  if (table.rows.length > 0) {
    table.deleteRow(0);
  } else {
    alert("No more rows to delete.");
  }
};
