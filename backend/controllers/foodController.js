import foodModel from "../models/foodModel.js";
import fs from 'fs';


// add food item
const addFood = async (req, res) => {
   let image_filename  = `$(req.file.filename)`;

   const food = new foodModel({
    name: req.body.name,
    image: image_filename,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
   })
   try { 
    await food.save();
    res.json({sucess:true, message: "New food item added"})
   } catch (error) {
    console.log(error);
    res.json({sucess:false, message:"Error while adding new food item"})
   }
}

export { addFood };