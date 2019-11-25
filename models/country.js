const mongoose = require('mongoose');
const Schema = mongoose.Schema;

CountrySchema = new Schema({
    code: {
        type: String,
        required: [true, 'El Codigo del pais es requerido'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'El nombre del pais es requerido'],
        unique: true
    }
    /**
     * code
     * name
     */
})

// MongoDB va pluralizar y poner en minusculas el modelo
module.exports = mongoose.model('Country', CountrySchema);