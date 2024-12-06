/* Middlewares
Middleware functions in Express.js are functions that execute during the request-response lifecycle.
They can modify the request and response objects, terminate the request-response cycle, or call the next middleware in the stack. 
They are used for tasks such as logging, authentication, error handling, and more.


Types of Middleware in Express.js
1. Application-Level Middleware: Bound to the app object using app.use().
2. Router-Level Middleware: Bound to an instance of express.Router().
3. Error-Handling Middleware: Handles errors in the application.
4. Built-in Middleware: Provided by Express, e.g., express.json() and express.static().
5. Third-Party Middleware: Middleware installed from npm, e.g., cors, body-parser.
*/

// Importing the express module
const express = require('express')  // Express is a web framework for building APIs

const cors = require('cors')  // Cross Origin resource sharing i.e. it allows requests from other origins

// Initialize the express Application

const app = express()   // Creates an instance of Express application

const users =[
    {id:1, name:'Ram', email:'ram@gmail.com'},
    {id:2, name:'Shyam', email:'Shyam@gmail.com'},
    {id:3, name:'Kapil', email:'Kapil@gmail.com'}
  ]
//-----------Application-Level Middleware----------------------------//

//Middleware  to log the details of every request
// This middleware will runs before the route handlers
app.use(express.json());
app.use(cors({
    origin: 'https://web.postman.co'   // only requests from this origin will be allowed
  }));

app.use((req,res,next) =>{
    console.log(`${req.method} request made to ${req.url}`);  // Logs the http method and route
    next() // Pass control to the next middleware
})


// -------Router-Level Middleware-------------//

const userRouter = express.Router();   // Create a router instance for handling specific routes

// GET route for fetching all users

userRouter.get('/',(req,res)=>{
    res.json(users)  // List all users
})

// Mount the router at '/' path

app.use('/', userRouter)




//----------------------- Third-Party Middleware------------------------------//
// Middleware to enable CORS    




  // Dummy Data representing users in a database to use CRUD operations




  // ----------------------------Built-in Middleware-----------//

// Middleware to parse JSON data in request bodies
// Enable the server to understand and handles JSON formatted data sent in the requests



// GET route to fetch all the users (get all the users)

app.get('/api/users', (req,res)=>{
    res.json(users)    // Sends the entire users array as a JSON response
  })

//-------Error handling Middleware------//



// A sample route that triggers an error

app.get('/api/error', (req,res,next)=>{
    const error = new Error('Something went wrong') // Creates an error object
    error.status = 500;  // Attach http sttatus code to error
    next(error) // Pass the error to error handling middleware

})
//error handling middleware

//4 paarameters (err, req, res, next)

// app.use((err,req,res,next)=>{
//     console.error(err.stack) // Logs the error
//     res.status(500).json({error:"Something went wrong"})

// })

// Start the server on a specific port

app.use((req,res,next)=>{
    res.status(404).json({error:'Route not found'})
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    });