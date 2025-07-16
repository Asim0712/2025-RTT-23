import express from  "express"
import { createUser, getAllUsers, getUsers } from "../controllers/userControllers.js";   
const router = express.Router();


//===Middleware===//
router.use(express.json());
router.use((req, res, next) => {
    console.log('Method:', req.method);
    console.log('Path:', req.path);
    console.log('Time:', Date.now());
    next();
})


// Get method /api/
router.get('/', getAllUsers);
router.get('/:id', getUsers);
router.get('/', createUser);

// Post /api/users/ 
router.post('/', (req,res) =>{
    res.send("creating Users data..")
});

//Get /api/users/:id
router.get('/:id', (req,res)=>{
    const {id} = req.params
    res.send(`sending user data by the id: ${id}`)
});


export default router;