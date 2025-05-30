import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

/**
 * @route   /api/v1/users
 * @desc    User Management Routes
 */

// @route   GET /api/v1/users
// @desc    Get all users
// @access  Private (Admin or Authenticated Only)
userRouter.get('/', getUsers);

// @route   GET /api/v1/users/:id
// @desc    Get user details by ID
// @access  Private (Self or Admin)
userRouter.get('/:id', (req, res) => {
    res.send({ title: 'Get user details' });
});

// @route   POST /api/v1/users
// @desc    Create a new user
// @access  Public (for registration)
userRouter.post('/', (req, res) => {
    res.send({ title: 'Create new user' });
});

// @route   PUT /api/v1/users/:id
// @desc    Update user by ID
// @access  Private (Self or Admin)
userRouter.put('/:id', (req, res) => {
    res.send({ title: 'Update user' });
});

// @route   DELETE /api/v1/users/:id
// @desc    Delete user by ID
// @access  Private (Admin)
userRouter.delete('/:id', (req, res) => {
    res.send({ title: 'Delete user' });
});

export default userRouter;
