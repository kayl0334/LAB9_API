const express = require("express");

const app = express();

// Allows the API to receive JSON
app.use(express.json());

// Sample book records
let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  }
];

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Books API is running"
  });
});


// 1. GET ALL BOOKS
app.get("/api/books", (req, res) => {
  res.status(200).json(books);
});


// 2. GET ONE BOOK
app.get("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  res.status(200).json(book);
});


// 3. CREATE A BOOK
app.post("/api/books", (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({
      message: "Title, author, and year are required"
    });
  }

  const newBook = {
    id: books.length > 0
      ? Math.max(...books.map((book) => book.id)) + 1
      : 1,
    title: title,
    author: author,
    year: year
  };

  books.push(newBook);

  res.status(201).json(newBook);
});


// 4. UPDATE A BOOK
app.put("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({
      message: "Title, author, and year are required"
    });
  }

  book.title = title;
  book.author = author;
  book.year = year;

  res.status(200).json(book);
});


// 5. DELETE A BOOK
app.delete("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  const deletedBook = books.splice(bookIndex, 1);

  res.status(200).json({
    message: "Book deleted successfully",
    book: deletedBook[0]
  });
});


// Render provides the PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});