import { Router } from "express";

const userRouter = Router();

// ROUTES/Endpoints
// Get all users
// Method: GET
// Endpoint: /
userRouter.get('/', (req, res) => {
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
// Endpoint: /:id
userRouter.get('/:id', (req, res) => {
    res.send({title: 'Get user details'});
});

// Create new user
// Method: POST
// Endpoint: /
userRouter.post('/', (req, res) => {
    res.send({title: 'Create new user'});
});

// Update user
// Method: PUT
// Endpoint: /:id
userRouter.put('/:id', (req, res) => {
    res.send({title: 'Update user'});
});

// Delete user
// Method: DELETE
// Endpoint: /:id
userRouter.delete('/:id', (req, res) => {
    res.send({title: 'Delete user'});
});

export default userRouter;
