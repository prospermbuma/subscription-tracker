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

app.get('/api/users', (req, res) => {
    res.send([
        {
            id: 1,
            name: "Prosper Mbuma",
            email: "prospermbuma@yahoo.com"
        },
         {
            id: 2,
            name: "Josiana Mbuma",
            email: "josianambuma@yahoo.com"
        },
         {
            id: 3,
            name: "Precious Mbuma",
            email: "preciousmbuma@yahoo.com"
        },
    ]);
});

// Start server
app.listen(PORT, () => console.log(`Subscription Tracker API is running on port ${PORT}`));

export default app;