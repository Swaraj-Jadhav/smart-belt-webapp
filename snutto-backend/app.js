import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.route.js';

const app = express();

// Middleware (must come before routes)
app.use(cors({
  origin: [
    'https://snutto.onrender.com/',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Mount routes with /api prefix
app.use('/api', userRoutes);  

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'running',
    message: 'Welcome to Snutto API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      waitlist: {
        path: '/api/users/joinWaitList',
        method: 'POST',
        description: 'Join the application waitlist'
      },
      healthcheck: {
        path: '/healthcheck',
        method: 'GET',
        description: 'Service health status'
      }
    },
  });
});
export default app;