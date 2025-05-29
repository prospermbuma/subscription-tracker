import { Router } from "express";
import { SignIn, SignOut, SignUp } from "../controllers/auth.controller.js";

const authRouter = Router();

/**
 * @route   /api/v1/auth
 * @desc    Authentication Routes
 */

// @route   POST /api/v1/auth/sign-up
// @desc    Register a new user
// @access  Public
authRouter.post('/sign-up', SignUp);

// @route   POST /api/v1/auth/sign-in
// @desc    Log in an existing user
// @access  Public
authRouter.post('/sign-in', SignIn);

// @route   POST /api/v1/auth/sign-out
// @desc    Log out the current user
// @access  Protected (if using token/session)
authRouter.post('/sign-out', SignOut);

export default authRouter;
