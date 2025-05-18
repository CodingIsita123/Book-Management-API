# 📘 Book Management REST API (Node.js + TypeScript)

This is a Book Management REST API built using **Node.js**, **Express**, and **TypeScript**. It supports full CRUD operations and CSV file import functionality, with structured error handling, environment config support, and Jest-based unit testing.

---

##  Features
A Node.js + TypeScript REST API for managing books with CRUD operations and CSV import.
-  CRUD for managing books
-  Import books via CSV upload
-  Unit tests using Jest + Supertest
-  RESTful architecture with MVC structure
-  Centralized error handling middleware
-  Environment variable support using `.env`
-  Logging via Morgan middleware
-  UUIDs for unique book identification

---

##  Project Structure
 book-management-api
├── 📁 src
│   ├── 📁 controllers        # Handles request logic (e.g., bookController.ts)
│   ├── 📁 routes             # Defines API routes (e.g., bookRoute.ts)
│   ├── 📁 services           # Contains business logic (e.g., bookService.ts)
│   ├── 📁 middleware         # Error handlers, logging, etc.
│   ├── 📁 utils              # Helper functions (e.g., parseCSV.ts)
│   ├── 📄 app.ts             # Express app configuration
│   └── 📄 server.ts          # Entry point to start the server
├── 📁 tests                  # Jest test cases (e.g., book.test.ts)
├── 📄 sample-books.csv       # Sample CSV file for import testing
├── 📄 .env                   # Environment variables
├── 📄 jest.config.js         # Jest config
├── 📄 tsconfig.json          # TypeScript config
├── 📄 package.json           # NPM metadata and scripts
└── 📄 README.md              # Project documentation

###  Clone the Repository

```bash
git clone https://github.com/your-username/book-management-api.git

cd book-management-api

### API Endpoints
| Method |       Route       |     Description      |
.....................................................
| GET    | /api/books        |   Get all books      |
| GET    | /api/books/\:id   |   Get book by ID     |
| POST   | /api/books        |   Create new book    |
| PUT    | /api/books/\:id   | Update existing book |
| DELETE | /api/books/\:id   |   Delete a book      |
| POST   | /api/books/import |Import books from CSV |

here is the url
http://localhost:3000/api/books (GET)
http://localhost:3000/api/books/{id} (GET)
http://localhost:3000/api/books (POST)
http://localhost:3000/api/books/{id} (PUT)
http://localhost:3000/api/books/{id} (DELETE)
http://localhost:3000/api/books/import (POST)

