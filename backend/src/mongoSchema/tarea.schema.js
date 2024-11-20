const mongoose = require("../db/mongo.db").mongoose;
const { Schema, Mongoose } = require("mongoose");


const tareaSchema= new mongoose.Schema({
    titulo:{
        type:Schema.Types.String,
        required:true,
        minlength:1,
        maxlength:255
    },
    descripcion:{
        type: Schema.Types.String,
        required:true,
        minlength:1,
        maxlength:255
    }
})


const Usuario = mongoose.model("Tarea", tareaSchema)

module.exports = Tarea