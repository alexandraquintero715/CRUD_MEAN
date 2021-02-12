/* Se importa mongoose */
const mongoose = require('mongoose')
const esquemaAuto = new mongoose.Schema({
    marca: {
        type: String,
        default: "generico"
    },
    modelo: Number,
    color: String,
    precio: Number,
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
})

//Creamos el export
const Auto = mongoose.model("auto",esquemaAuto)
module.exports = Auto