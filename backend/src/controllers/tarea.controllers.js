const { Model, where } = require('sequelize')
const {Tarea} = require('../models')
const controller = {}


const getAllTareas = async (req,res) =>{
    const tareas = await Tarea.findAll()
    res.status(200).json(tareas)
}

controller.getAllTareas = getAllTareas

const getTareasByUserId = async (req,res)=>{
    const idUser = req.params.id
    const tareas = await Tarea.findAll({
        where:
        idUser = {idUser}
    })
    res.status(200).json(tareas)
}

const createNewTarea = async (req, res)=>{
    const {descripcion, completada, idCategoria, idUser} = req.body
    const tarea = await Tarea.create({
        descripcion,
        completada,
        idCategoria,
        idUser
    })
    res.status(201).json(tarea)
}