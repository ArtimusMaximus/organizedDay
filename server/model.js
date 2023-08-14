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
    clerkID: String,
    goals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Goal'}]
},
{ timestamps: true })


const User = mongoose.model('User', userSchema)
// const Goal = mongoose.models.Goal || mongoose.model('Goal', goalSchema);
const Goal = mongoose.model('Goal', goalSchema);

export {
    Goal,
    User
}