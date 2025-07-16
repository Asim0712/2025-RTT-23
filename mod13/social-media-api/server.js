import express from "express";
// import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRouter from "./routes/users.js"
import postsRouter from "./routes/posts.js"
import productsRouter from "./routes/products.js"




dotenv.config();

const app = express();
const PORT = 3000;
const uri = process.env.MONGODB_URL;

// ====== middleware =======
app.use(express.json());
app.use('/api/users',usersRouter)
app.use('/api/post',postsRouter)
app.use('/api/product',productsRouter)
// Connect to MongoDB using Mongoose
mongoose.connect(uri)
  .then(console.log("Connected successfully to MongoDB!"))
  .catch((e) => console.log(`Error connecting to MongoDB: ${e}`));

// ======= Routes ===========
app.get("/", async (req, res) => {
  res.status(200).json({ message: "Successfully connected to the database!" });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));