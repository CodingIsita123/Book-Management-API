// src/routes/bookRoutes.ts

import { Router } from 'express';
import {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from '../controllers/bookController';
import { importBooks } from '../controllers/importController'; 
import upload from '../middlewares/upload';

const router = Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.post('/books/import', upload.single('file'), importBooks);

export default router;
