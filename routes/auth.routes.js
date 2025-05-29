import { Router } from "express";
import { SignIn, SignOut, SignUp } from "../controllers/auth.controller.js";

const authRouter = Router();

// ROUTES/Endpoints
// Sign Up
// Method: POST
// Endpoint: /sign-up
authRouter.post('/sign-up', SignUp);

// Sign In
// Method: POST
// Endpoint: /sign-in
authRouter.post('/sign-in', SignIn);

// Sign Out
// Method: POST
// Endpoint: /sign-out
authRouter.post('/sign-out', SignOut);

export default authRouter;