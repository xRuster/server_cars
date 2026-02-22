const express = require("express");

const {getAllCars,getCarById} = require ("../controllers/cars.controllers");

const router = express.Router();

//Especificamos las rutas que disparan los controladores

router.get('/', getAllCars);
router.get('/:id', getCarById);

module.exports = router;