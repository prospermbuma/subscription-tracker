import dayjs from 'dayjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');
import Subscription from '../models/subscription.model.js';

const REMINDERS = [7, 5, 2, 1];

// Send Reminders
export const sendReminders = serve(async (context) => {
    try {
        const { subscriptionId } = context.requestPayload;
        const subscription = await fetchSubscription(context, subscriptionId);

        if (!subscription || subscription.status !== 'active') return

        const renewalDate = dayjs(subscription.renewalDate);

        // Check if the renewal date is before the current date and time
        if (renewalDate.isBefore(dayjs())) {
            console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`);
            return; // Exit out of this workflow
        }

        // Loop through reminder days (7, 5, 2 , 1)
        for (const daysBefore of REMINDERS) {
            const reminderDate = renewalDate.subtract(daysBefore, 'day');

            // Check if the remider date if after current date and time
            if (reminderDate.isAfter(dayjs())) {
                // Put reminder to sleep
                await sleepUntilReminder(context, `Reminder ${daysBefore} days before`, reminderDate);
            }

            // If NOT then Trigger the reminder
            await triggerReminder(context,`Reminder ${daysBefore} days before`);
        }
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

// Put reminder to sleep until its day and time to trigger
const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleep until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());
}

// Trigger Reminder
const triggerReminder = async (context, label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder`);
        // Send email, SMS, Push notificarion, etc.
    });
}