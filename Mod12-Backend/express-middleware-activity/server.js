import express from 'express';


const app = express();
const PORT = 3000;

    // Assuming the API key is passed as a query parameter
   

//======Middleware======//

//======Global Middleware======//
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request path: ${req.path}`);
    next(); // Call the next middleware or route handler    
});

app.use((req,res,next) => {
    req.requestTime = Date.now(); // Add a new property to the request object
    console.log('Middleware 1: Time set' + req.requestTime);    
    next();
});

 function checkApiKey(req, res, next) {
    
    if(req.headers['x-api-key']=== "supersecretkey") {
        console.log('API key is valid');
        next(); // Proceed to the next middleware or route handler
    }
    else {
        console.log('Invalid API key');
        res.status(401).send({error: 'Unauthorized: API key required '});
    };
}
    
app.use("/api", checkApiKey);



//=====Routes======//
app.get('/api',checkApiKey, (req, res) => {
    res.send('API is working correctly!');
});

app.get('/',(req,res) => {
    res.send('Welcome to my Express Middleware API!' );
});

app.get('/test', (req, res) => {
    res.send('This is a test route!');
});



app.listen(PORT, () => (`Server is running on port ${PORT}`));
