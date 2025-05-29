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
SubscriptionRouter.put('/:id', (req, res) => {
    res.send({title: 'Update subscription'});
});

// Delete subscription
// Method: DELETE
// Endpoint: /:id
SubscriptionRouter.delete('/:id', (req, res) => {
    res.send({title: 'Delete subscription'});
});

// Get all subscriptions of the specific user
// Method: GET
// Endpoint: /user/:id
SubscriptionRouter.get('/user/:id', (req, res) => {
    res.send({title: 'Get all user subscriptions'});
});

// Cance subscription
// Method: PUT
// Endpoint: /:id/cancel
SubscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title: 'Cancel subscription'});
});

// Get all upcoming renewals
// Method: GET
// Endpoint: /upcoming-renewals
SubscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({title: 'Get upcoming renewals'});
});

export default SubscriptionRouter;