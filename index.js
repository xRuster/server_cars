const express = require("express");
const connectDB = require('./src/config/db');
const carRouter = require('./src/routes/cars.routes');

//Definimos el puerto
const PORT = 3000;

//Conectamos a la base de datos 
connectDB();

//Creamos el server
const server = express();

//Tenemos que indicarle que vamos a trabajar con JSON
server.use(express.json())

//Definimos las rutas que tenemos
server.use('/api/cars', carRouter);

//Definimos las rutas no definidas
server.use((req,res)=>{
    return res.status(404).json({message: "Route not found"})
})

//Definimos una ruta especial para errores basicos
server.use((err,req,res)=>{
    console.log(err);
    return res.status(500).json({message:"Internal Server Error"});
})

server.listen((PORT), () =>{
    console.log(`🛜 Servidor levantado en http://localhost:${PORT}`)
})


