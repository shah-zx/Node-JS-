const express = require("express");
const mongoose = require("mongoose")
const port = 3000;
const app = express();



// Connecting to the mongo db via connection string - 

// 'mongodb://localhost:27017/node-mongo-app': This is the connection URI (Uniform Resource Identifier) for your MongoDB database. It specifies the protocol (mongodb://), the hostname (localhost), the port number (27017 is the default port for MongoDB), and the name of the database (node-mongo-app).

// { useNewUrlParser: true, useUnifiedTopology: true }: These are options passed to the mongoose.connect() method to handle various aspects of MongoDB's connection settings:

// useNewUrlParser: true: This option is required because MongoDB's default connection string parser is deprecated. By setting this to true, Mongoose will use the new URL parser.

//  useUnifiedTopology: true: This option is set to true to opt into using the new Server Discovery and Monitoring engine, which provides better handling of server discovery and monitoring events.


mongoose.connect('mongodb+srv://Nawaz:<password>@support.eva0uy5.mongodb.net/' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Making mongo db schema and model - 

// A schema is defined for items to be stored in the database. Each item has a name and description.
// A Mongoose model named Item is created based on the schema. This model represents a collection in the MongoDB database.


const MeraSchema = new mongoose.Schema({
   name : String,
   description : String
});

const Cheez = new ('Cheez' , MeraSchema);

// Stringifying json requests and adding middleware - 

// Adding middleware for parsing the json requests - 

// Middleware is added to parse incoming JSON requests. 
// This middleware parses the request body and makes it available in req.body for further processing.

app.use(express.json());

// things in the public directory such as - css , images etc are served statically - 

app.use(express.static('public'));

// Defining routes, we want the items from the index.html page to be added in db , so will send the filename as well.

app.get("/" , function(req , res) {
    res.sendFile(__dirname + '/index.html')
});


// Adding items to our db - 

app.post("/items" , async (req , res) => {
 try {
    const {name , description} = req.body;
    const newItem = Cheez({name , description});
    newItem.save();
    res.status(201).send("Item added successfully");
 }
 catch (err) {
    console.error(err);
    res.status(500).send("Server Failure");
 }
});

// Server listening on port - 

app.listen(port , () => {
    console.log(`server listening at port ${port}`);
})




