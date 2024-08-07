import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from "./routes/reviews.js"
import bookingRoute from "./routes/booking.js" //roter ka kuch bhi naam de sakte hai




dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions = {
    origin:true,
    credentials:true
}


// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }));

app.use(cors({
    origin: 'https://travel-traverse.vercel.app',
    credentials: true
}));


// app.use(cors({
//          origin: ["https://travel-traverse.vercel.app"],
//          method: ["POST","GET"],
//          credentials: true
// }));



mongoose.set("strictQuery", false)

const connect=async()=>{
    try {

        await mongoose.connect("mongodb+srv://Ashok:12345123@cluster0.6m2v3lh.mongodb.net/tours_booking?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDB database connected');
        
    } catch (err) {

        console.log('MongoDB database connection failed')
        
    }
} 




//how to connect to mongoDb
//first built mongoDb schema
//then make model
//connect mongoDb with our backend server

//mongodb represent data in documnent form, mongoDb have collection instead of table, in collection there are document

//connecting mongoDb
//mongoose.connect("mongoDb_url")
//.then(()=>console.log("MongoDB connected"))
//.catch((err)=>console.log("mongo error",err));


//middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/auth', authRoute) //jab /api/v1/auth pe koi request aate hai tho authRoute ka istemal karna
app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/booking', bookingRoute)
connect();
app.listen(port, ()=>
{
    console.log('server listening on port yaaa huu',port)
})
