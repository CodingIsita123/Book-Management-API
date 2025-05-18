import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

// GET /books
export const getAllBooks = (req: Request, res: Response): void => {
  const books = bookService.getAllBooks();
   res.json(books);
};

// GET /books/:id
export const getBook = (req: Request, res: Response): void => {
  const book = bookService.getBookById(req.params.id);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  res.json(book);
};


// ✅ POST /books
export const createBook = (req: Request, res: Response): void => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
     res.status(400).json({ error: 'Missing fields' });
     return;
  }

  const newBook = bookService.createBook({ title, author, publishedYear });
   res.status(201).json(newBook);
};

// PUT /books/:id
export const updateBook = (req: Request, res: Response): void => {
  const updated = bookService.updateBook(req.params.id, req.body);
  if (!updated)  res.status(404).json({ error: 'Book not found' });
   res.json(updated);
  
};


// DELETE /books/:id
export const deleteBook = (req: Request, res: Response): void => {
  const deleted = bookService.deleteBook(req.params.id);
  if (!deleted) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }

  console.log('DELETE RESPONSE:', { message: 'Book Deleted' }); // ✅ Add this log
  res.status(200).json({ message: 'Book Deleted' }); // ✅ Fix response message
};


// CSV Import
export { importBooks } from './importController';
