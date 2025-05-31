import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');
import Subscription from '../models/subscription.model.js';

// Send Reminders
export const sendReminders = serve(async (context) => {
    try {
        const { subscriptionId } = context.requestPayload;
        const subscription = await fetchSubscription(context, subscriptionId);

        if (!subscription || subscription.status !== 'active') return
        
    } catch (error) {
        console.log("Error sending reminders", error);
    }
});

// Fetch Subscription
const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
}