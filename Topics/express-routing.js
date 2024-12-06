/* Routing 

- Routing in Express refers to the endpoints (URLs) of our application and specifys how it should respond to users request.

- A route is defined using methods like GET, POST,PUT, DELETE etc to specify HTTP requests.
*/

// Importing the express module
const express = require('express')  // Express is a web framework for building APIs

const cors = require('cors')  // Cross Origin resource sharing i.e. it allows requests from other origins

// Initialize the express Application

const app = express()   // Creates an instance of Express application

// Middleware to enable CORS

app.use(cors({
  origin: 'https://web.postman.co'   // only requests from this origin will be allowed
}));

// Dummy Data representing users in a database to use CRUD operations

const users =[
  {id:1, name:'Ram', email:'ram@gmail.com'},
  {id:2, name:'Shyam', email:'Shyam@gmail.com'},
  {id:3, name:'Kapil', email:'Kapil@gmail.com'}
]

// Middleware to parse JSON data in request bodies
// Enable the server to understand and handles JSON formatted data sent in the requests

app.use(express.json());

// GET route to fetch all the users (get all the users)

app.get('/api/users', (req,res)=>{
  res.json(users)    // Sends the entire users array as a JSON response
})

// Get route to fetch a single user by ID

// Uses route parameters (ex. /api/users/2) to identify specific user

app.get('/api/users/:id', (req,res)=>{

  const userId = parseInt(req.params.id)  // Extracts the id parameter from the URLand converted it into number

  const user = users.find(u => u.id === userId)  // Find the user with the matching id in the users array

  if(user){
    res.json(user)  // If user exists, respond with user data in JSON format
  }
  else{
    res.status(404).json({message:'User not found'})  // Sends a 404 response if user not found
  }
})



// POST route to add a new user
// This route allows the client to send new user data to the server

app.post('/api/users', (req,res)=>{
  const newUser={
    id: users.length + 1,   // Generates a new Id by adding 1 to the current number of users
    name: req.body.name,   // retriving the name field from request body
    email: req.body.email // retriving the email field from request body
  }

  users.push(newUser)  // Adds the new user to the users array

  res.status(201).json(newUser); // Sends a 201 Created status and in response we will get newly added user
})


// PUT Route to update an existing user

app.put('/api/users/:id', (req,res)=>{
  const userId = parseInt(req.params.id)  // Extracts the id parameter from the URLand converted it into number
  const user = users.find(u => u.id === userId)  // Find the user with the matching id in the users array

  if(user){
    user.name = req.body.name || user.name  // Updating the user fields only if the values are provided in the request body
    user.email = req.body.email || user.email
    res.json(user)
  }
  else{
    res.status(404).json({message:'User not Found'})
  }

})


// Delete Route to remove a user by Id

app.delete('/api/users/:id', (req,res)=>{
  const userId = parseInt(req.params.id)  // Extracts the id parameter from the URLand converted it into number
// Find the indexof the user with the matching id

const index = users.findIndex(u => u.id === userId);

if(index !== -1){
  users.splice(index,1) // remove the user from array
  res.json({message:"user deleted succesffully"})
}
else{
  res.status(404).json({message:"User not found"})
}
})

// Start the server on a specific port

app.listen(3000,()=>{
console.log('Server is running on port 3000');
});

