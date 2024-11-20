const mongoose = require("../db/mongo.db").mongoose;
const { Schema, Mongoose } = require("mongoose");


const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: Schema.Types.String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    password: {
        type: Schema.Types.String,
    },
    tarea: [
        { titulo: { type: Schema.Types.String, required: true, minlength: 1, maxlength: 255 } },
        { descripcion: { type: Schema.Types.String, required: true, minlength: 1, maxlength: 255 } },
        { fechaLimite:{
            type: Schema.Types.Date,
            required: true
        }}
    ]
})


const Usuario = mongoose.model("Usuario", usuarioSchema)

module.exports = Usuario