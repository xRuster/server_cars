// FICHERO PARA CONECTAR CON LA BASE DE DATOS 

const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/garage";

const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log("✅Conectado con la base de datos");
    } catch (error) {
        console.log("❌ Error conectando con la base de datos")
    }
}

module.exports = connectDB;

