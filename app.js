import express from 'express';

// Configuration
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Endpoints
app.get('/api/users', (req, res) => {
    res.render();
});

// Start server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));