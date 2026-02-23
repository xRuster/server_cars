const express = require("express");

const {getAllCars,getCarById,getCarByBrand,createCar,deleteCar,updateCar} = require ("../controllers/cars.controllers");

const router = express.Router();

//Especificamos las rutas que disparan los controladores

router.get('/', getAllCars);
router.get('/:id', getCarById);
router.get('/brand/:brand',getCarByBrand);
router.post('/create',createCar);
router.delete('/delete/:id',deleteCar);
router.put('/update/:id',updateCar);

module.exports = router;