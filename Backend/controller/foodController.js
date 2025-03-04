import foodModel from "../model/foodModel.js";
import fs from "fs";

// Add food item

const addFood = async (req,res) => {
    let image_filename = `${req.file.filename}`
    
    const food =  new foodModel({
        name: req.body.name,
        des: req.body.des,
        current_price:req.body.current_price,
        original_price:req.body.original_price,
        offer: req.body.offer,
        category: req.body.category,
        subcategory: req.body.subcategory,
        image:image_filename,
        rating: req.body.rating
    })

    try {
        await food.save();
        res.json({success:true, message:"food item added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}


export {addFood}