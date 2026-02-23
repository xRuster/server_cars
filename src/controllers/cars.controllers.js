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

const getCarByBrand = async (req,res) =>{
    try{
        const {brand} = req.params;
        const brandSelected = await Car.find({brand: brand});
        return res.status(200).json(brandSelected);
    }catch (error){
        res.status(500).json(error)
    }
}

const createCar = async(req,res)=>{
    try {
        //Creo una variable en la cual segun el modelo de la base de datos voy a cargar el body que llega del frontend
        const newCar = new Car(req.body)
        //Luego voy a crear la persistencia en la base de datos
        const createdCar = await newCar.save();
        return res.status(201).json(createCar);
    }catch(error){
        return res.status(200).json(error)
    }
}

const deleteCar = async(req,res)=>{
    try{
        const {id} = req.params;
        const carToDelete = await Car.findByIdAndDelete(id);
        if(!carToDelete){
            res.status(404).json("Coche a borrar no encontrado")
        }
        res.status(200).json({message:"Coche borrado"})
    } catch(error){
        res.status(500).json(error)
    }
}

const updateCar = async(req,res) =>{
    try{
        const {id} = req.params;
        const updated = await Car.findByIdAndUpdate(id,req.body,{
            new: true,
            runValidators: true,
        })
        if(!updated){
            return res.status(404).json("El coche ha actualizar no ha sido encontrado")
        }
        return res.status(200).json(updated);
    } catch (error){
        return res.status(500).json(error);
    }
}

module.exports = {getAllCars,getCarById,getCarByBrand,createCar,deleteCar,updateCar};