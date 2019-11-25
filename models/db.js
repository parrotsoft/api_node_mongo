const c = console.log;
const mongoose = require('mongoose');
const config = require('../config');

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(process.env.URL_DB, { useNewUrlParser: true } )
        .then(() => c(`Conexion exitosa al servidor de MongoDB: ${process.env.URL_DB}`))
        .catch(err => c(`Error de conexion al servidor DB: ${err}`))
    }
}

module.exports = new Database();