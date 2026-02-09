import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';   
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';


// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// db connection
connectDB();


// api endpoints
app.use("/api/food", foodRouter);

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

//mongodb+srv://stack:Archana*1234@cluster0.rrzlhxu.mongodb.net/?