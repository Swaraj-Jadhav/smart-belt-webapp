import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

const app = express();

// Middleware (must come before routes)
app.use(cors({
  origin: [
    'https://snutto.onrender.com',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Mount routes with /api prefix
app.use('/api', userRoutes);  

// Health check
app.get('/healthcheck', (req, res) => {
  res.status(200).send('OK');
});

export default app;