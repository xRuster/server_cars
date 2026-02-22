const mongoose = require("mongoose");

const carSchema = new mongoose.Schema (
    {
        brand: {type: String, required:true},
        model: {type: String, required:true},
        year: {type: Number, required:true},
        marca: {type: String},
        modelo: {type: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Car = mongoose.model('Car', carSchema);
module.exports = Car; 