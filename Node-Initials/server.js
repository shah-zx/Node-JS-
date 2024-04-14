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
// const app = express();
const router = express.Router();

// app.get("/" , function (req , res) {
//      res.send(soaps);
// });

// app.get("/update" , function (req , res) {
//     res.send("This is the update API and list is updated with one more soap - nirma");
//     res.send(soaps);
//     soaps.push('nirma');
    
// })

// app.get("/delete" , function (req , res) {
//     res.send("This is the delete API , and lux is deleted from the list");
//     soaps.pop('lux');
//     res.send(soaps);
// })

// app.get("/create" , function(req, res) {
//     res.send("This is the create API");
// })

// app.listen(
//     port , function (){
//     console.log(`server listening on port ${port}`);
//     }
// )

router.get("/" ,function (req , res) {
    res.send("Hello from router");
})

router.get("/about" , function(req , res) {
    res.send("This is the about section");
})



const soaps = ['pears' , 'dettol' , 'lux' , 'cinthol' , 'liril' , 'medimix'];

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


var w = 21;

