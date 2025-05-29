import { Router } from "express";

const authRouter = Router();

// ROUTES/Endpoints
// Sign Up
// Method: POST
authRouter.post('/sign-up', (req, res) => {
    res.send({title: 'Sign Up'});
});

// Sign In
// Method: POST
authRouter.post('/sign-in', (req, res) => {
    res.send({title: 'Sign In'});
})

// Sign Out
// Method: POST
authRouter.post('/sign-out', (req, res) => {
    res.send({title: 'Sign Out'});
})

export default authRouter;