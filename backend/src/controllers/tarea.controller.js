const Usuario = require('../mongoSchema/Usuario.schema')
const Tarea = require('../mongoSchema/tarea.schema')
const mongoose = require('mongoose')
const mongoose = require("../db/mongo.db").mongoose;
//const { $_match } = require('../schemas/producto.schema')
const controller = {}


const getUsuarioById = async (req,res) =>{
    const idUsuario = req.params.id
    const usuario = await Usuario.findAll()
    res.status(200).json(usuario)
}

controller.getUsuarioById = getUsuarioById

const addTareaToUsuario = async (req,res)=>{
    const idusuario = req.paramas.id
    const usuario = await Usuario.findByIdAndUpdate(
        idusuario,
        {$push: {tarea: req.body}},
        {new:true}
    )
    res.status(201).json({mensagge: "Tarea agregada a usuario"})
}

controller.addTareaToUsuario = addTareaToUsuario

const createNewUsuario = async (req, res)=>{
    const {nombre, password} = req.body
    const usuario = await Usuario.create({
        nombre,
        password
    })
    res.status(201).json(usuario)
}
controller.createNewUsuario = createNewUsuario


const deleteUsuario = async (req,res)=>{
    const idUsuario = req.params.id
    const usuario = await Usuario.findByIdAndDelete({_id:idUsuario})
    res.status(200).json(`El usuario con id ${idUsuario} ha sido eliminado`)
}
controller.deleteUsuario = deleteUsuario