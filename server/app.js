import express from 'express';
import ViteExpress from 'vite-express'
import path from 'path';
import mongoMain from '../database/mongodb.js';
import { routes } from './routes.js';
import bodyParser from 'body-parser';
import { __filename } from '../dir.js';
import { __dirname } from '../dir.js';
import * as dotenv from 'dotenv';
import { MongoClient } from 'mongodb';


// const __filename = fileURLToPath(import.meta.url); // app.js is the filename
// const __dirname = path.dirname(__filename) // now is making the dirname where the file (app.js) is ....../server/

// console.log(__filename + '\n', __dirname + '\n');

mongoMain()
    .then(() => console.log('Connected to Mongo~'))
    .catch(err => console.log(err))

// dotenv.config();
// let pw = process.env.PASSWORD
// const uri = `mongodb+srv://dbUserMain:${pw}@cluster0.hlxx9.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// (async function main() {
//     try {
//         await client.connect();
//         await listDatabases(client);

//     } catch(e) {
//         console.log(e)
//         console.error(e)
//     } 
//     // finally {
//     //     await client.close();
//     // }
//     console.log('connected to mongodb successfully');
// })()
// main()
//     .then(() => console.log('connected to mongodb successfully'))
//     .catch(console.error)

console.log(__dirname);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(__dirname)) // this replaces your GET '/'
app.use(express.static(__dirname + '/dist'))
// app.use(express.static(__dirname + '/login/'))


routes(app);
const PORT = process.env.PORT || 3333;




app.listen(PORT, () => {
    console.log(`Server running on ${PORT}~`);
})

// ViteExpress.listen(app, PORT, () => {
//     console.log(`Listening on ${PORT}~`);
// })

// app.get('/', (_, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'))
//     console.log('__dirname in apphjs', __dirname)
//     // res.send('okayyyyyyy')
// })

// app.get('/styles2.css', (req, res) => {
//     res.sendFile(__dirname + '/' + 'styles2.css')
//     console.log(__dirname);
// })