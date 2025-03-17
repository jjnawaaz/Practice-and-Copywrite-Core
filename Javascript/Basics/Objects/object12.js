/**
 * ✅ Problem 6: Filter and Map on Array of Objects inside Object
👉 Task:
You are given an object library:

javascript
Copy
Edit
const library = {
  name: "City Library",
  location: "Downtown",
  books: [
    { title: "Book A", author: "Author 1", pages: 200 },
    { title: "Book B", author: "Author 2", pages: 150 },
    { title: "Book C", author: "Author 3", pages: 300 },
  ],
};
Now do the following:
✅ Print the name and location of the library.
✅ Print the title and author of each book in this format:

Title: Book A, Author: Author 1
✅ Filter out books that have more than 200 pages and print only their titles.
✅ Create an array of book titles using map() and print that array.
 */

const library = {
  name: "City Library",
  location: "Downtown",
  books: [
    { title: "Book A", author: "Author 1", pages: 200 },
    { title: "Book B", author: "Author 2", pages: 150 },
    { title: "Book C", author: "Author 3", pages: 300 },
  ],
};

// Print Names
console.log(library.name, library.location);

// Print Title and Author

library.books.forEach((val) =>
  console.log(`Title: ${val.title}, Author: ${val.author}`)
);

// Filter books more than 200 pages
const filteredBooks = library.books.filter((value) => value.pages > 200);

filteredBooks.forEach((val) => console.log(val.title));

const mapBooks = library.books.map((val) => val.title);
console.log(mapBooks);
