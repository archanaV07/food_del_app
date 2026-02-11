import foodModel from "../models/foodModel.js";
import fs from 'fs';

// add food item
const addFood = async (req, res) => {
  try {

    if (!req.file) {
      return res.json({ success: false, message: "Image not uploaded" });
    }

    const food = new foodModel({
      name: req.body.name,
      image: req.file.filename,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category
    });

    await food.save();

    res.json({ success: true, message: "Food item added" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while adding food item" });
  }
};


// list food
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while fetching food list" });
  }
};


// delete food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    if (food) {
      fs.unlink(`uploads/${food.image}`, () => {});
      await foodModel.findByIdAndDelete(req.body.id);
    }

    res.json({ success: true, message: "Food item removed" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while removing food item" });
  }
};

export { addFood, listFood, removeFood };
