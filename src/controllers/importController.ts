// src/controllers/importController.ts

import { Request, Response } from 'express';
import * as bookService from '../services/bookService';
import { parseCSV } from '../utils/csvParser';

// Extend the Request interface to include the file field from multer
interface MulterRequest extends Request {
  file: Express.Multer.File;
}

export const importBooks = (req: Request, res: Response): void => {
  const multerReq = req as MulterRequest;
  const file = multerReq.file;

  if (!file) {
    res.status(400).json({ error: 'No file uploaded' });
    return;
  }

  const content = file.buffer.toString();
  const { validBooks, errors } = parseCSV(content);
  const addedCount = bookService.importBooks(validBooks);

  res.json({ added: addedCount, errors });
};
