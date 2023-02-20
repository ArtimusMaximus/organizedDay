import mongoose from "mongoose";
import * as dotenv from 'dotenv'

// mongoMain().catch(err => console.log(err))
dotenv.config();
let pw = process.env.PASSWORD
const uri = `mongodb+srv://dbUserMain:${pw}@cluster0.hlxx9.mongodb.net/?retryWrites=true&w=majority`

async function mongoMain() {
    await mongoose.connect(uri)
    // await mongoose.connect('mongodb://127.0.0.1:27017/test')
          mongoose.set('strictQuery', true)
}

export default mongoMain;