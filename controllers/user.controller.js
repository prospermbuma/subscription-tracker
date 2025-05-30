import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = User.find();

        res.status(200).json({
            success: true,
            message: 'Users List',
            data: {
                users,
            }
        });
    } catch (error) {
        console.error('Error fetching users: ', error);
    }
}