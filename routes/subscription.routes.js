import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

/**
 * @route /api/v1/subscriptions
 * @desc  Subscription Routes
 */

// @route   GET /api/v1/subscriptions
// @desc    Get all subscriptions
// @access  Private
subscriptionRouter.get('/', (req, res) => {
  res.send({ title: 'Get all subscriptions' });
});

// @route   GET /api/v1/subscriptions/user/:id
// @desc    Get all subscriptions of a specific user
// @access  Private
subscriptionRouter.get('/user/:id', (req, res) => {
  res.send({ title: 'Get all user subscriptions' });
});

// @route   GET /api/v1/subscriptions/upcoming-renewals
// @desc    Get all upcoming renewals
// @access  Private
subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({ title: 'Get upcoming renewals' });
});

// @route   GET /api/v1/subscriptions/:id
// @desc    Get subscription details by ID
// @access  Private
subscriptionRouter.get('/:id', (req, res) => {
  res.send({ title: 'Get subscription details' });
});

// @route   POST /api/v1/subscriptions
// @desc    Create a new subscription
// @access  Private
subscriptionRouter.post('/', authorize, (req, res) => {
  res.send({ title: 'Create new subscription' });
});

// @route   PUT /api/v1/subscriptions/:id
// @desc    Update subscription by ID
// @access  Private
subscriptionRouter.put('/:id', (req, res) => {
  res.send({ title: 'Update subscription' });
});

// @route   PUT /api/v1/subscriptions/:id/cancel
// @desc    Cancel subscription by ID
// @access  Private
subscriptionRouter.put('/:id/cancel', (req, res) => {
  res.send({ title: 'Cancel subscription' });
});

// @route   DELETE /api/v1/subscriptions/:id
// @desc    Delete subscription by ID
// @access  Private
subscriptionRouter.delete('/:id', (req, res) => {
  res.send({ title: 'Delete subscription' });
});

export default subscriptionRouter;
