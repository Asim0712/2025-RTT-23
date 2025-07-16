import express from 'express';
import { dirname } from 'path';
const app = express();
const PORT = 3000;

//======Middleware======//


//======Global Middleware======//
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Call the next middleware or route handler    
});

app.use((req, res, next) => {
  req.requestTime = Date.now(); // Add a new property to the request object
  console.log('Middleware 1: Time set' + req.requestTime);
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2: Just checking in!');
  next();
});

app.use('/admin', (req,res,next) => {
    if (req.query.user === 'admin') {
        console.log('Admin access granted');
        next(); // Proceed to the next middleware or route handler
    } else{
        console.log('Access denied');
        res.status(403).send('Access denied'); // Send a 403 Forbidden response
    }
});

app.use(express.json()); // For parsing application/json
app.use(express.static('public')); // For serving static files from the 'public' directory



//======Routes======//
//post used cuz data sent to backend
app.post('/users', (req, res) => {
    console.log(req.body);
    res.send(`Creating a new user with data: ${req.body.name}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});


app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    res.send('Sending user data for user ID: ');
});

app.get('/admin', (req, res) => {
console.log('Admin route accessed');
    res.send('Welcome to the admin area!');
});

app.get('/books/:bookId/chapter/:chapterNum', (req, res) => {
    const { bookId, chapterNum } = req.params;


    console.log('Book ID:', bookId);
    console.log('Chapter:', chapterNum);

    res.send("books")
});


app.get('/search', (req, res) => {
    console.log(req.query);


    const size = req.query.size || 'Large';
    const topping = req.query.page || "cheese";

    res.send(`Searching for ${size} pizza with ${topping} topping`);
});

//======Error Handling Middleware======//
// app.use((req, res, next) => {       
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error); // Pass the error to the next middleware
// });


app.listen(PORT, () => ('Server is running on port ${PORT}'));

