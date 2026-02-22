const Car = require("../models/Car");

// Obtener todos los cars 

const getAllCars = async (req,res) =>{
    try{
        const cars = await Car.find();
        return res.status(200).json(cars);
    }catch (error){
        return res.status(500).json(error);
    }
}

// Obtener un car por su ID

const getCarById = async (req,res) =>{
    
    try{
        const {id} = req.params;
        const carId = await Car.findById(id);
        if (!carId){
            res.status(404).json("No se encuentra el coche con el id especificado")
        }
        return res.status(200).json(carId);
    } catch (error){
        return res.status(500).json(error);
    }
}

module.exports = {getAllCars,getCarById}