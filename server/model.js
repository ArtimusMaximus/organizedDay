import mongoose from "mongoose"

export const goalSchema = new mongoose.Schema({
    goal: String,
    timeLimit: Number,
    completed: Boolean,
    description: String,
},
{ timestamps: true })