import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { JWT_EXPIRES_IN, JWT_SECRET, NODE_ENV } from "../config/env.js";

// Sign Up Logics
export const SignUp = async (req, res, next) => {
    /**
    Peform atomic updates (Atomic Operations).
    Atomic Operations - Are database operations that update the state are atomic.
    Means the Insert/Update either works completely or it doesn't.
    You never get half an operation (Must do all operation or nothing).

    # Reasons why operations may not work
    1. One or more database constraints violated.
    2. Datatype mismatch.
    3. Syntax error.
    */
    const session = await mongoose.startSession(); // This is a Mongoose transaction session NOT user session.
    session.startTransaction();

    try {
        // Create new user
        const { name, email, password } = req.body;

        // Check if a user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create users
        const newUsers = await User.create([{ name, email, password: hashedPassword }], { session });

        // Generate token for a user to be able to sign-in
        const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        // Set the JWT token in a secure cookie
        /**
         * httpOnly: true	- The cookie can’t be accessed by JavaScript on the frontend. Helps prevent XSS attacks.
         * secure: true	- The cookie is only sent over HTTPS. Use this in production.
         * sameSite: 'strict' - Prevents the browser from sending the cookie with cross-site requests. Protects against CSRF attacks.
         */
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: NODE_ENV === 'production', // only secure in production
            sameSite: 'strict',
        });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                token,
                user: newUsers[0],
            },
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

// Sign In Logics
export const SignIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            const error = new Error('Invalid password');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        // Set the JWT token in a secure cookie
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: NODE_ENV === 'production', // only secure in production
            sameSite: 'strict',
        });

        res.status(200).json({
            success: true,
            message: 'User signed in successfully',
            data: {
                token,
                user,
            }
        });
    } catch (error) {
        next(error);
    }
}

// Sign Out Logics
export const SignOut = async (req, res, next) => {
    try {
        // Clear JWT cookie
        // res.clearCookie('token'); // 'token' is the cookie name used to store the JWT

        res.clearCookie('token', {
            httpOnly: true,
            secure: NODE_ENV === 'production',
            sameSite: 'strict',
        });

        return res.status(200).json({
            success: true,
            message: 'User signed out successfully'
        });
    } catch (error) {
        next(error); // Pass error to global error handler if any
    }
}