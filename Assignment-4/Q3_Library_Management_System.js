// Q3: Library Management System (Classes + Objects)
"use strict";

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`"${this.title}" has been issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }
        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
        return true;
    }

    displayDetails() {
        return `${this.title} by ${this.author} | ISBN: ${this.isbn} | ${this.isIssued ? "Issued" : "Available"}`;
    }
}

const books = [
    new Book("Atomic Habits", "James Clear", "ISBN001"),
    new Book("Clean Code", "Robert C. Martin", "ISBN002"),
    new Book("The Alchemist", "Paulo Coelho", "ISBN003", true)
];

console.log("Available books:");
books.filter(book => !book.isIssued).forEach(book => console.log(book.displayDetails()));

// Change this ISBN to issue a different book.
const requestedISBN = "ISBN002";
const requestedBook = books.find(book => book.isbn === requestedISBN);

if (requestedBook) {
    requestedBook.issueBook();
} else {
    console.log(`No book found with ISBN ${requestedISBN}.`);
}

console.log("\nCurrent library status:");
books.forEach(book => console.log(book.displayDetails()));
