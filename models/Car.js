const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const carSchema = new Schema (
    {
        brand: {typeof: String, required:true},
        model: {typeof: String, required:true},
        year: {typeof: Date, required:true},
        marca: {typeof: String},
        modelo: {typeof: String},
    },
    {
        timestamps: true
    }
);

const Car = mongoose.model('Car', carSchema);
module.exports = Car;