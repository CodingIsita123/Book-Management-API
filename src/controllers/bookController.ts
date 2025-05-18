import { Request, Response } from 'express';
import * as bookService from '../services/bookService';


export const getAllBooks = (req: Request, res: Response): void => {
  const books = bookService.getAllBooks();
   res.json(books);
};


export const getBook = (req: Request, res: Response): void => {
  const book = bookService.getBookById(req.params.id);
  if (!book) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  res.json(book);
};



export const createBook = (req: Request, res: Response): void => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
     res.status(400).json({ error: 'Missing fields' });
     return;
  }

  const newBook = bookService.createBook({ title, author, publishedYear });
   res.status(201).json(newBook);
};


export const updateBook = (req: Request, res: Response): void => {
  const updated = bookService.updateBook(req.params.id, req.body);
  if (!updated)  res.status(404).json({ error: 'Book not found' });
   res.json(updated);
  
};

export const deleteBook = (req: Request, res: Response): void => {
  const deleted = bookService.deleteBook(req.params.id);
  if (!deleted) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }

  console.log('DELETE RESPONSE:', { message: 'Book Deleted' }); 
  res.status(200).json({ message: 'Book Deleted' }); 
};



export { importBooks } from './importController';
