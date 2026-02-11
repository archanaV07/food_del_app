import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB();


// api endpoints
app.use("/api/food", foodRouter);
app.use("/image", express.static("uploads"));
app.use("/api/user", userRouter);

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



// password  213453321
//mongodb+srv://fooddelapp:213453321@cluster0.uaegkri.mongodb.net/?