import mongoose from "mongoose";
import { goalSchema, userSchema } from "./model.js";
import bodyParser from "body-parser";
import { __dirname } from "../dir.js";



const User = mongoose.model('User', userSchema)
const Goal = mongoose.models.Goal || mongoose.model('Goal', goalSchema);



// const makeServer = new Goal({ goal: 'Make a NodeJS server hosting your goals', timeLimit: 2 })

// const temporaryGoal = new Goal({
//     goal: 'Complete this goal app',
//     timeLimit: 5,
//     completed: true,
//     description: 'no need to describe this'
// })
// temporaryGoal.save();

// console.log('>>>>> ', makeServer.goal, makeServer.timeLimit)
// makeServer.save();

export const createGoal = async (req, res) => {
    const newGoal = new Goal(req.body)
    await newGoal.save((err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data)
        console.log('Post success.');
        console.log(data);
    })
}

export const findGoals = async (req, res) => {
    Goal.find({}, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);
        console.log(data);
    })
}

export const updateComplete = async (req, res) => {
    console.log('req body id from controller', req.body._id);
    console.log('req body from controller', req.body);
    Goal.findOneAndUpdate({ _id: req.body._id }, { completed: req.body.completed }, { new: true, useFindAndModify: false }, (err, goal) => {
        if (err) {
            console.log(err);
        }
        res.json(goal)
        console.log('goal from controller', goal);
    })
}

export const removeGoal = async (req, res) => {
    console.log('remove goal id', req.body._id);

    Goal.deleteOne({ _id: req.body._id }, (err, goal) => {
        if (err) {
            console.log(err);
        }
        console.log('goal', goal);
        res.json({ message: `Goal ${req.body._id} has been deleted successfully!`})
    })
}

export const createUser = (req, res) => {
    let user = new User(req.body);

    user.save((err, data) => {
        console.log('req.body: ', req.body);
        if (err) console.error(err);
        res.json(data);
        
    })
}

export const checkForUser = (req, res) => {
    let userID = req.query.clerkID;
    console.log(userID);
    User.findOne({ clerkID: userID }, (err, user) => {
        if (err) console.error(err)
        if (user) {
            res.json({ exists: true })
        } else {
            res.json({ exists: false })
        }
    })
}