import express from 'express';
import Product from "../models/Product.js"

const router = express.Router();

router.post('/', async(req, res)=> {
    try{
    const product = await Product.create(req.body);
    res.status(201).json(product);
}catch(error){
    console.error(error);
    res.status(400).json({error: error.message});
}
});

router.get("/", async (req , res) =>{
try{
    const product = await Product.find({});
    res.json(product)
}catch(error){
    console.error(error);
    res.status(404).json({ message: error.message });
}
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});


router.delete('/:id', async(req,res)=>{
    try{
        const deleteproduct = await Product.findByIdAndDelete(req.params.id);
        res.json(deleteproduct)
    } catch(error) {
         console.error(error);
    res.status(500).json({ message: "Cant find the id" });
  }

    });









export default router;