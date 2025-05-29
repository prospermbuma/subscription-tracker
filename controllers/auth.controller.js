import mongoose from "mongoose";

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
}

export const SignIn = async (req, res, next) => {
}

export const SignOut = async (req, res, next) => {
}