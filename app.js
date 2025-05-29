import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import SubscriptionRouter from './routes/subscription.routes.js';

// Configuration
const app = express();

// Middlewares
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Endpoints Middlewares
// authRouter
app.use('/api/v1/auth', authRouter);

// userRouter
app.use('/api/v1/users', userRouter);

// subscriptionRouter
app.use('/api/v1/subscriptions', SubscriptionRouter);

// Default API Endpoints
app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API!');
});

// Start server
app.listen(PORT, () => console.log(`Subscription Tracker API is running on port ${PORT}`));

export default app;