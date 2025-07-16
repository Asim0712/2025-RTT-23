import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("social-media").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");}
    catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ message: "Failed to connect to the database." });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello, from API!");
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));