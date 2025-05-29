import express from 'express';
import 'dotenv/config';

// Configuration
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Endpoints
app.get('/', (req, res) => {
    res.send('API WORKING');
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
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));