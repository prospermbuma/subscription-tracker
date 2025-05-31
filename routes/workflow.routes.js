import { Router } from "express";

const workflowRouter = Router();

workflowRouter.get('/', (req, res) => { res.send({title: 'Welcome to Workflow Router'})});

export default workflowRouter;