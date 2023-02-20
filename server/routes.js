import { createGoal, findGoals, updateComplete, removeGoal } from "./controller.js"
import path from 'path';
import { __filename } from '../dir.js';
import { __dirname } from '../dir.js';



export const routes = app => {
    app.route('/goal')
        .get((req, res) => {
            res.sendFile(__dirname + '/index.html')
            console.log('THE GET FIREED OFF');
        })
        .post(createGoal)

    app.route('/')
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
        
    app.route('/find')
        .get(findGoals)

    app.route('/updateCompleted')
        .post(updateComplete)
        
    app.route('/del')
        .delete(removeGoal)

    
    app.route('/testing')
        .get((req, res) => {
            res.send('Okay it is working!')
        })

}