import express from 'express';
import User from '../models/User.js'; // Assuming you have a User model defined

const router = express.Router();

router.get('/', (req, res) => {
    res.send('User endpoint');
})



router.post("/register", async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Assuming you have a method to find user by email
        const user = await User.findOne({ email: email });
        console.log(user);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const correctpw = await user.isCorrectPassword(password);
        if (!correctpw) {
            return res.status(401).json({ error: "Incorrect password" });
        }
        res.json({ message: "Login successful"})
    }
catch (error) {
   
    return res.status(500).json({ error: "Internal Server Error" });
}
  });

export default router;