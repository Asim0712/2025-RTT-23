import express from "express";
import mongoose from "mongoose";

const { Schema }= mongoose;

const productSchema= new Schema ({
    name: {type: String, required: [true ,"Name is required"]},
    price:{type: Number, required: true},
    category:{type: String},

});

export default mongoose.model("Product", productSchema);