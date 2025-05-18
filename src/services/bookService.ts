import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/book';

let books: Book[] = [];

export const getAllBooks = () => books;

export const getBookById = (id: string) => books.find(book => book.id === id);

export const createBook = (data: Omit<Book, 'id'>): Book => {
  const newBook = { id: uuidv4(), ...data };
  books.push(newBook);
  return newBook;
};

export const updateBook = (id: string, data: Partial<Book>): Book | null => {
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...data };
  return books[index];
};

export const deleteBook = (id: string): boolean => {
  const originalLength = books.length;
  books = books.filter(book => book.id !== id);
  return books.length < originalLength;
};

export const importBooks = (newBooks: Book[]): number => {
  books.push(...newBooks);
  return newBooks.length;
};
