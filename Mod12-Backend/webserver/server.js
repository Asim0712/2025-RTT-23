// const  express =  require ('express');
// const path = require ('path');

import express from 'express';
import path from 'path';
import url from 'url';

// Express App
const app = express();
const PORT=2000;
// console.log(import.meta.url);

const filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
//  console.log(__dirname);



//====Middleware====//
app.use(express.static(path.join(__dirname, 'public')));

//========Routes========//
// Get/ 
app.get('/', (req, res) => {

    //req: incoming request
    console.log(req.url);
 

    // res: outgoing response
  res.send('<h1>Hello World!</h1>');
});

// Get /users
app.get('/users', (req, res) => {
    //req: incoming request 
    res.send('List of users');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});