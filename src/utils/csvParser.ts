
import { Book } from '../models/book';
import { v4 as uuidv4 } from 'uuid'; 

export function parseCSV(data: string): { validBooks: Book[], errors: string[] } {
  const lines = data.trim().split('\n');

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
      id: uuidv4(), 
      title,
      author,
      publishedYear,
    });
  });

  return { validBooks, errors };
}
