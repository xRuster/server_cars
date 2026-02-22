const mongoose = require("mongoose");

const carSchema = new mongoose.Schema (
    {
        brand: {typeof: String, required:true},
        model: {typeof: String, required:true},
        year: {typeof: Number, required:true},
        marca: {typeof: String},
        modelo: {typeof: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Car = mongoose.model('Car', carSchema);
module.exports = Car; 