import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

// CORS Configuration (if not already in app.js)
import cors from 'cors';
app.use(cors({
  origin: [
    'https://snutto.onrender.com',
    'http://localhost:3000' // for local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Try these endpoints:
  - POST /users/joinWaitList
  - GET /healthcheck`);
});

// Add health check endpoint
app.get('/healthcheck', (req, res) => {
  res.status(200).send('OK');
});