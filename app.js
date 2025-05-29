import express from 'express';
import { PORT } from './config/env.js';

// Configuration
const app = express();

// Middleware
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Endpoints
app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API!');
});


// Start server
app.listen(PORT, () => console.log(`Subscription Tracker API is running on port ${PORT}`));

export default app;