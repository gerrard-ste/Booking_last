const request = require('supertest');
const app = require('../app'); // Import your Express app instance

describe('Authentication API', () => {
  test('GET /api/auth should return 200 OK', async () => {
    const response = await request(app).get('/api/auth');
    expect(response.status).toBe(200);
  });
});
