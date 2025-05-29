import { Router } from "express";

const SubscriptionRouter = Router();

// ROUTES/Endpoints
// Get all subscriptions
// Method: GET
// Endpoint: /
SubscriptionRouter.get('/', (req, res) => {
  res.send({title: 'Get all subscriptions'});
});

// Get subscription by id
// Method: GET
// Endpoint: /:id
SubscriptionRouter.get('/:id', (req, res) => {
    res.send({title: 'Get subscription details'});
});

// Create new subscription
// Method: POST
// Endpoint: /
SubscriptionRouter.post('/', (req, res) => {
    res.send({title: 'Create new subscription'});
});

// Update subscription
// Method: PUT
// Endpoint: /:id
SubscriptionRouter.get('/:id', (req, res) => {
    res.send({title: 'Update subscription'});
});

// Delete subscription
// Method: DELETE
// Endpoint: /:id
SubscriptionRouter.delete('/:id', (req, res) => {
    res.send({title: 'Delete subscription'});
});

export default SubscriptionRouter;