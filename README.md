# LAB9 Books RESTful API

A simple RESTful API for managing books using Node.js and Express.js. It supports Create, Read, Update, and Delete operations.

## Technologies Used

- Node.js
- Express.js
- Postman
- GitHub
- Render

## Installation and Local Execution

1. Install dependencies:

npm install

2. Start the server:

npm start

The server uses process.env.PORT or port 3000 as a local fallback.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get one book |
| POST | /api/books | Create a book |
| PUT | /api/books/:id | Update a book |
| DELETE | /api/books/:id | Delete a book |

## Example POST Request

{
  "title": "Harry Potter",
  "author": "J.K. Rowling",
  "year": 1997
}

## GitHub Repository

https://github.com/kayl0334/LAB9_API

## Render Deployment

https://lab9-api.onrender.com

## Known Limitations

This API uses in-memory storage. The data is temporary and may be lost when the Render service restarts or redeploys.