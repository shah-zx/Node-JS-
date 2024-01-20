// Printing to the terminal - 

console.log("Hello World");

// Creating own server - 

// var http  = require('http');
// const port = 3000;
// http.createServer(function (req , res){
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end("Hello Shahnawaz");
// }).listen(`${port}`);
// console.log(`server listening at ${port}`);

// Another Server - 

const express = require('express');
const port = 3000; 
const app = express();

app.get("/" , function (req , res) {
     res.send("Hello Shahnawaz");
});

app.get("/gold" , function (req , res) {
    res.send("You got 1 kg gold");
})

app.get("/silver" , function (req , res) {
    res.send("You got 1 kg silver");
})

app.listen(
    port , function (){
    console.log(`server listening on port ${port}`);
    }
)


// Arrow Function -> 

// const names = ['Shahnawaz', 'Hamza', 'Jatin', 'shubham'];
// console.log(names.map
//     ((names) => names.length)
//     );

// let a = 12;
// // let b;

// const hey = (a) => {
//     console.log(a+12);
// }


// Synchronous API  -  

// API that totally executes itself once then only second funcion is called - 

// Example - 

console.log("Hey there , shahnawaz here !!");

// Asynchronous API - 

setTimeout (function() {
    console.log("Print one");
} , 3000);
console.log("print Two");

