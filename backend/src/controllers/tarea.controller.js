const Usuario = require('../mongoSchema/Usuario.schema')
const Tarea = require('../mongoSchema/tarea.schema')
const controller = {}


const createTarea = async (req,res) =>{
    const tarea = await Tarea.create(
        req.body
    )
    res.status(200).json(tarea)
}

controller.createTarea = createTarea

const getTareas = async(req,res)=>{
    const tareas = await Tarea.find({})
    res.status(200).json(tareas)
}
controller.getTareas = getTareas

const deleteTarea = async (req,res)=>{
    const idTarea = req.params.id
    const tarea = await Tarea.findByIdAndDelete(idTarea)
    res.status(200).json('Tarea eliminada correctamente')
}
controller.deleteTarea = deleteTarea


const updateTarea = async (req, res)=>{
    const {titulo, descripcion, fecha} = req.body
    const idTarea = req.params.id
    const tareaModificada = await Tarea.findByIdAndUpdate({_id: idTarea}, {
        $set: {titulo, descripcion, fecha }},{ new: true} )
    res.status(200).json(tareaModificada)
}

controller.updateTarea = updateTarea

const getTareaByID = async (req, res)=>{
    const idTarea = req.params.id
    const tarea = await Tarea.findById({_id:idTarea})
    res.status(200).json(tarea)
}
controller.getTareaByID = getTareaByID



const addTarea = async (req,res)=>{
    const idusuario = req.paramas.id
    const usuario = await Usuario.findByIdAndUpdate(
        idusuario,
        {$push: {tarea: req.body}},
        {new:true}
    )
    res.status(201).json({mensagge: "Tarea agregada a usuario"})
}

controller.addTarea = addTarea
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


module.exports =  controller