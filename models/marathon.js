const mongoose = require('mongoose');
const Schema = mongoose.Schema;

MarathonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre del maratòn es requerido']
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: [true, 'El pais donde se realiza el maraton es requerido']
    },
    location: {
        type: String,
        required: [true, 'El lugar deonde se realiza el maraton es requerido']
    },
    altitude: Number,
    race_web: {
        type: String,
        lowercase: true
    },
    race_logo: String,
    race_since: String,
    race_day: String,
    race_date: Date,
    race_type: {
        type: String,
        enum: ['City','Trail'],
        default: 'City'
    },
    distance: {
        type: Number,
        min: 42.195,
        default: 42.195
    },
    resume: String
    /**
     * name
     * county
     * location
     * altitude
     * race_web
     * race_logo
     * race_since
     * race_day
     * race_date
     * race_type
     * distance
     * resume
     */
})
// MongoDB va pluralizar y poner en minusculas el modelo
module.exports = mongoose.model('Marathon', MarathonSchema);