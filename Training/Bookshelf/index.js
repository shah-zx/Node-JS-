// Makign a server - 
const express = require('express');
const port = 5050;
const app = express();
const fs = require('fs');

app.listen(port , (req , res) => {
console.log(`app listening on port : ${port}`);
// res.send("Hello")
})

// Reading a file and sending the text in rsponse - 

const text = fs.readFileSync('../sample.txt' , 'utf-8');

app.get('/' , (req , res)=> {
    res.send("Hello there , root url here");
    console.log(text);
})

// custom module - 

// A set of functions -

let a = 12;
exports.addNo = function (a){
    return a + 5; 
}




