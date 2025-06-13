import express from 'express';
import { PORT } from './config/env.js';
import dbConnection from './database/mongodb.js';
import cookieParser from 'cookie-parser';

// Routes
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import workflowRouter from './routes/workflow.routes.js';

// Middlewares
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import errorMiddleware from './middlewares/error.middleware.js';

// Config express app
const app = express();

// Middlewares
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Rate Limiting middleware
app.use(arcjetMiddleware);

// API Endpoints middlewares
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);

// Error middleware
app.use(errorMiddleware);

// Default API Endpoints
app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API!');
});

// Start server
app.listen(PORT, async () => {
    console.log(`Subscription Tracker API is running on port ${PORT}`);
    await dbConnection();
});

export default app;