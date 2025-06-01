import dayjs from 'dayjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');
import Subscription from '../models/subscription.model.js';
import { sendReminderEmail } from '../utils/send-email.js';

const REMINDERS = [7, 5, 2, 1];

// Send Reminders
export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;

    // Step 1: Fetch Subscription
    const subscription = await fetchSubscription(context, subscriptionId);
    if (!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(subscription.renewalDate);

    // Check if the renewal date is before the current date and time
    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`);
        return; // Exit out of this workflow
    }

    // Step 2: Schedule & Send Reminders - Loop through reminder days (7, 5, 2 , 1)
    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');

        // Check if the remider date if after current date and time
        if (reminderDate.isAfter(dayjs())) {
            // Put reminder to sleep
            await sleepUntilReminder(context, `Reminder ${daysBefore} days before`, reminderDate);
        }

        // If NOT then Trigger the reminder
        if (dayjs().isSame(reminderDate, 'day')) {
            await triggerReminder(context, `${daysBefore} days before reminder`, subscription);
        }
        // await triggerReminder(context, `${daysBefore} days before reminder`, subscription);
    }
});

// Fetch Subscription using `context.run`
const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', async () => {
        return await Subscription.findById(subscriptionId).populate('user', 'name email');
    });
}

// Sleep until the exact reminder date - Put reminder to sleep until its day and time to trigger
const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleep until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());
}

// Trigger the reminder safely inside `context.run`
const triggerReminder = async (context, label, subscription) => {
    return await context.run(label, async () => {
        console.log(`Triggering ${label} reminder`);
        // Add real logic here e.g., send email/SMS/push-notification
        await sendReminderEmail({
            to: subscription.user.email,
            type: label,
            subscription,
        });
    });
}