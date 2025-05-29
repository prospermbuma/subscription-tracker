import mongoose from "mongoose";

// Subscription Schema
const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLength: 0,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, 'Subscriptin price is required'],
        min: [0, 'Price must be greater than 0'],
        max: [1000, 'Price must be less than 1000'],
    }
}, { timestamps: true });

// Subscription Model
const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;