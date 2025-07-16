import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();

const app = express();
const PORT = 3000;
const uri = process.env.MONGODB_URL;

// Connect to MongoDB using Mongoose
mongoose.connect(uri)
  .then(console.log("Connected successfully to MongoDB!"))
  .catch((e) => console.log(`Error connecting to MongoDB: ${e}`));


app.get('/', async (req,res)=>{
    res.status(200).json({message: "Successfully connected to database!"})
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));