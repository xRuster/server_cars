const express = require("express");

const server = express();
const PORT = 3000;

server.get('/cars', (req,res) =>{
    const cars = ["Seat Ibiza", "Audi Q5", "Mercedes AMG"]
    res.send(cars)
})

server.listen((PORT), () => {
    console.log(`Server listening in http://localhost:${PORT}`)
})