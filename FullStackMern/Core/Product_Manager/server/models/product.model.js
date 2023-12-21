const mongoose = require("mongoose")


const product = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "the first name is required"],
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [10, "Title cannot exceed 10 characters"]
        
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        min: [0, "Price cannot be negative"]
    },
    description: {
        type: String,
        required: [true, "the description is required"],
        minlength: [10, "description must be at least 10 characters long"],
        maxlength: [30, "description cannot exceed 30 characters"]
    }
   
}, { timestamps: true })


const productSchema = mongoose.model("productSchema", product)

module.exports = productSchema