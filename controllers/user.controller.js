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
        const userId = req.params.id

        const user = await User.findById(userId);
        // const user = await User.findOne({ _id: userId });

        if (!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            data: { user }
        });
    } catch (error) {
        next(error);
    }
}