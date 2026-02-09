import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddelapp:213453321@cluster0.uaegkri.mongodb.net/food-del').then(()=>console.log("DB connected"));
}
