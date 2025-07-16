import express from 'express';
import User from "../models/User.js";

const router = express.Router();

// create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

router.get('/', async(req,res)=>{
  try{
    const users = await User.find();
    res.json(users)
  } catch(error){
    res.status(500).json({message: error.message })
    console.error(error);
  }
  
});

router.get('/:id', async(req,res)=>{
  const {id} =req.params;
  try{
    const user = await User.findById(id);
    res.json(user)
  } catch(error){
    console.error(error)
  }
})
 export default router;