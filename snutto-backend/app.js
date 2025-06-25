import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';

import connectDB from './db/db.js';
connectDB();
import cors from 'cors';
import userRouter from './routes/user.route.js';

const app = express();
app.use(cors({
  origin: [
    'http://localhost:3001',
    'http://localhost:5173' 
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRouter);

app.get('/', (req , res) => {
  res.send('Backend is running!');
});

app.get('/', (req, res) => {
    res.end("Hello from server");
});
// Error handling middleware 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'API Error',
    message: err.message 
  });
});

// 404 handler (add this after all routes)
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found',
    message: 'API endpoint not found' 
  });
});

export default app;