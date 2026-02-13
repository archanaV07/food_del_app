import userModel from "../models/userModel.js";

// add items to user Cart
const addToCart = async (req,res) => {
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        if(!userData) {
            return res.json({success:false, message: "User not found"})
        }
        let cartData = userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true, message: "Item added to cart successfully"})
    } catch(error){
        console.log(error);
        res.json({success:false, message: "Error adding item to cart"})
    }
}

// remove items from user Cart
const removeFromCart = async (req,res) => {
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        if(!userData) {
            return res.json({success:false, message: "User not found"})
        }
        let cartData = userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true, message: "Item removed from cart successfully"})
    } catch(error){
        console.log(error);
        res.json({success:false, message: "Error removing item from cart"})
    }
}

// fetch user Cart data
const getCart = async (req,res) => {
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;
        res.json({success:true, cartData:userData.cartData})
    } catch(error){
        console.log(error);
        res.json({success:false, message: "Error fetching cart"})
    }
    // try{
    //     let userData = await userModel.findOne({_id:req.body.userId});
    //     let cartData = await userData.cartData;
    //     res.json({success:true, cartData})
    // } catch(error){
    //     console.log(error);
    //     res.json({success:false, message: "Error fetching cart"})
    // }
}

export { addToCart, removeFromCart, getCart }