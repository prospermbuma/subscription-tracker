import express from 'express';
import { PORT } from './config/env.js';

// Routes
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import dbConnection from './database/mongodb.js';

// Configuration
const app = express();

// Middlewares
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Endpoints Middlewares
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

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