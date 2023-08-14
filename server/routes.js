import { createGoal, findGoals, updateComplete, removeGoal, createUser, checkForUser } from "./controller.js"
import path from 'path';
import { __filename } from '../dir.js';
import { __dirname } from '../dir.js';




export const routes = app => {
    app.route('/')
        // .get((req, res) => {
        //     res.sendFile(__dirname);
        //     console.log('supposed redirect ?');
        //     console.log(__dirname);
        // })
        // .get(checkForUser)
        .post(createUser)

    app.route('/goal/:clerkID')
        .get((req, res) => {
            res.sendFile(__dirname + '/goal_page/')
            console.log('THE GET FIREED OFF');
            console.log('params from get', req.params.clerkID)
        })
        .post(createGoal)

        // .get((req, res) => {
        //     res.send('You have reaced the home page')
        //     console.log('/ Home')
        // })
        // .get((req, res) => {
        //     res.sendFile(path.join(__dirname, '/index.html'))
        //     // res.render('index')
        //     console.log('__dirname: ', __dirname);
        // })

        // .get((req, res) => {
        //     res.sendFile(path.join(__dirname, '/styles2.css'))
        // })
    app.route('/finduser')
       .get(checkForUser)
        
    app.route('/find/:clerkID')
        .get(findGoals)

    app.route('/updateCompleted')
        .post(updateComplete)
        
    app.route('/del/:clerkID')
        .delete(removeGoal)

    
    app.route('/testing')
        .get((req, res) => {
            res.send('Okay it is working!')
        })

}