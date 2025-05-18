// src/utils/csvParser.ts
import { Book } from '../models/book';
import { v4 as uuidv4 } from 'uuid'; // To generate unique IDs

export function parseCSV(data: string): { validBooks: Book[], errors: string[] } {
  const lines = data.trim().split('\n');

  // Expect the first line to be a header: title,author,publishedYear
  const [header, ...rows] = lines;

  const validBooks: Book[] = [];
  const errors: string[] = [];

  rows.forEach((line, index) => {
    const parts = line.split(',');
    if (parts.length !== 3) {
      errors.push(`Row ${index + 2} is malformed (expected 3 columns)`);
      return;
    }

    const [title, author, publishedYearStr] = parts.map((s) => s.trim());
    const publishedYear = parseInt(publishedYearStr, 10);

    if (!title || !author || isNaN(publishedYear)) {
      errors.push(`Row ${index + 2} has invalid data`);
      return;
    }

    validBooks.push({
      id: uuidv4(), // Generate unique ID
      title,
      author,
      publishedYear,
    });
  });

  return { validBooks, errors };
}
