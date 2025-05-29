import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6,
    },
}, {timestamps: true}); // {timestamps: true} will automatically add crearedAt and updatedAt fields to the schema.

// User Model
const User = mongoose.model('User', userSchema);

export default User;



