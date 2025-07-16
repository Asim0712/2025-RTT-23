import express from "express"
 const postrouter = express.Router();
 import { PostData } from "../controllers/postController.js";




// Post /api/users/ 
// postrouter.post('/', (req,res) =>{
//     res.send("Posting Data from Post Route..")
// });

postrouter.post('/', PostData)





export default postrouter;