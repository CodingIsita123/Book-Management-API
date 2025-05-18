import path from 'path';
import request from 'supertest';
import app from '../src/app'; 
// Book API endpoint
describe('POST /api/books/import', () => {
  let createdBookId: string;

  it('should return empty list initially', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new book', async () => {
    const res = await request(app).post('/api/books').send({
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      publishedYear: 1988,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('The Alchemist');
    createdBookId = res.body.id;
  });

  it('should get the created book by ID', async () => {
    const res = await request(app).get(`/api/books/${createdBookId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toBe(createdBookId);
    expect(res.body.title).toBe('The Alchemist');
  });

  it('should update the created book', async () => {
    const res = await request(app).put(`/api/books/${createdBookId}`).send({
      title: 'The Alchemist - Updated',
      author: 'Paulo Coelho',
      publishedYear: 1988,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toBe('The Alchemist - Updated');
  });

  it('should delete the created book', async () => {
    const res = await request(app).delete(`/api/books/${createdBookId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Book Deleted');
  });

  it('should return 404 for deleted book', async () => {
    const res = await request(app).get(`/api/books/${createdBookId}`);
    expect(res.statusCode).toEqual(404);
  });

it('should import books from CSV file', async () => {
  const res = await request(app)
    .post('/api/books/import')
    .attach('file', path.join(__dirname, 'sample-books.csv'));

    expect(res.status).toBe(200);
  console.log('IMPORT RESPONSE:', res.body);

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('added');
  expect(typeof res.body.added).toBe('number'); 
  expect(res.body.added).toBeGreaterThan(0);     
});

});
