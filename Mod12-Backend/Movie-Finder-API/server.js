import express from 'express';
import axios from 'axios';



const app = express();
const PORT = 3000;



app.get('/movies',  (req, res) => {
    res.send("welcome to movie finder api");
});

app.listen(PORT, ()=>{"Server is running at port ", `${PORT}`});