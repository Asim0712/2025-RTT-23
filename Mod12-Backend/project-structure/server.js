import express from 'express';
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'


const app= express();
const PORT =  8000;

//=====Routes=======//
app.use('/api/users', userRoutes);

app.use('/api/post', postRoutes);

app.get('/', (req, res)=> {
res.send("Hello")
});



app.listen(PORT, () => console.log(`Server runnng on Port ${PORT}`))

