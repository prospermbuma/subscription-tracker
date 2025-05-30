import User from "../models/user.model.js";

// Get all users
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            message: 'Users List',
            data: {
                users,
            }
        });
    } catch (error) {
        next(error);
    }
}