import { Router } from "express";

const userRouter = Router();

// ROUTES/Endpoints
// Get all users
// Method: GET
// Endpoint: /users
userRouter.get('/users', (req, res) => {
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

// Get user by id
// Method: GET
// Endpoint: /users/:id
userRouter.get('/:id', (req, res) => {
    res.send({title: 'Get user details'});
});