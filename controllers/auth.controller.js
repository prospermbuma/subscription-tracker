import mongoose from "mongoose";
import User from "../models/user.model";
import bcrypt from "bcryptjs";

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
        const existingUser = await User.findOne({ filter: email });

        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);


        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const SignIn = async (req, res, next) => {
}

export const SignOut = async (req, res, next) => {
}