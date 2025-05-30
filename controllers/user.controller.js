import User from "../models/user.model.js";

// Get all users
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            data: { users }
        });
    } catch (error) {
        next(error);
    }
}

// Get user by ID
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById();

        res.status(200).json({
            success: true,
            data: { user }
        });
    } catch (error) {
        next(error);
    }
}