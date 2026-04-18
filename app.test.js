const request = require('supertest');
const app = require('./app');

test('Home route returns 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

test('Health route returns OK', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('OK');
});