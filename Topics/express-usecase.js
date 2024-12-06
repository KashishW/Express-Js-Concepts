// ExpressJs and Why ExpressJs

// ExpressJs is a framework built on the top of NodeJs


/* Why ExpressJs

We prefer express js over node js because it simplifies many tasks that are complex and repetitive when using plain node JS.
Following are the examples:

- Simplified Routing

    -- In case of node js handling routes like (/home or /about) requires writing a lot of boilerplate code,
    -- Now in case of Expressjs it provides a simple built in way to define routes.

    
    
- Middleware Support

    -- In case of node js we manually handle tasks like parsing requests data logging or authentication 
    -- Now in express it offers middleware that is small functions that run between request and response 
    -- It makes it easy to add features like parsing request data, logging and authentication etc.


    Note: 
    - Express.Json() is a middleware that parses incoming Json requests.
    - Express.Json() simplifies working with APIs that send data in Jason format 
    - Express js has a large ecosystem of plugins and middlewares (available via npm)
        i.e. we can easily add features like security validation etc without building everything from scratch


- Boiler Plate Code

    NodeJs requires writing more code to handle the requests and responses and to set up the basic feature.
    Now Expressjs reduces boilerplate code, so we can focus on the logic of our app rather than setting up the basic features.


*/

// // Simplfied routing and Boiler plate code

// // Import express

// const express = require('express');

// // Create an express application

// const app = express();

// // Define a route for the home page

// app.get('/home', (req,res)=>{
//     res.send("Welcome to home page")      // Send a response when the /home route is accessed
// })
// // Define a route for the about page

// app.get('/about', (req,res)=>{
//     res.send("Welcome to about page")      // Send a response when the /home route is accessed
// })

// // Start the server on port 3000

// app.listen(3000,()=>{
//     console.log('Server is listening on port 3000');
// })


// Middleware Support

// const express = require('express');
// const app = express();

// // Use express.json() middleware to parse incoming JSON requests.
// app.use(cors());
// app.use(express.json());

// // A route to demonstrate middleware

// app.get('/home', (req,res)=>{
//     res.send("Welcome to home page")      // Send a response when the /home route is accessed
// })

// app.get('/data', (req,res)=>{
//     console.log(req.body);     // Access the parsed JSON data from request body
//     res.send("Data received successfully")
// })

// // Start the server on port 3000

// app.listen(3000,()=>{
//     console.log('Server is listening on port 3000');
// })

// Import required modules
const express = require('express');
const cors = require('cors'); // Import the CORS middleware

const app = express(); // Create an Express application

// Use CORS middleware to enable cross-origin requests
app.use(cors());

// Use express.json() middleware to parse incoming JSON requests
app.use(express.json());

// Route 1: Home route (GET request)
app.get('/home', (req, res) => {
    res.send("Welcome to the home page!"); // Send a response for the /home route
});

// Route 2: Data route (POST request)
app.post('/data', (req, res) => {
    console.log(req.body); // Access the parsed JSON data from the request body
    res.send("Data received successfully!"); // Respond to the client
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000'); // Log the server's URL
});

