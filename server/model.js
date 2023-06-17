import mongoose from "mongoose";

export const goalSchema = new mongoose.Schema({
    goal: String,
    timeLimit: Number,
    completed: Boolean,
    description: String,
},
{ timestamps: true })

export const userSchema = new mongoose.Schema({
    email: String,
    clerkID: String
},
{ timestamps: true })