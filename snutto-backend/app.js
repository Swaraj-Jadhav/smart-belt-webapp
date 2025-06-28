import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.route.js';

const app = express();

// Configure CORS with additional security headers
const allowedOrigins = [
  'https://snutto.onrender.com',
  'http://localhost:3000'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`Blocked CORS request from: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browser support
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests globally
app.options('*', cors(corsOptions));

// Additional security headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || allowedOrigins[0]);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Expose-Headers', 'Authorization');
  next();
});

app.use(express.json());

// Mount routes with /api prefix
app.use('/api', userRoutes);

// Root endpoint
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
    }
  });
});

export default app;