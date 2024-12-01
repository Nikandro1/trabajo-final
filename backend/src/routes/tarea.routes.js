const {Router} = require('express')
const route = Router()
const usuarioSchema = require('../mongoSchema/Usuario.schema')
const tareaController = require('../controllers/tarea.controller')
const usuarioMiddleware = require('../middlewares/validarId.middlewares')

/*TRAER tarea*/
route.get('/tarea', 
    //usuarioMiddleware.validarUsuarioId, 
    tareaController.getTareas)

/*CREAR tarea*/
route.post('/tarea', 
    tareaController.createTarea)

/*Borrar tarea*/
route.delete('/tarea/:id',
    usuarioMiddleware.validarTareaId, 
    tareaController.deleteTarea
)

/*Editar tarea*/
route.put('/tarea/:id',
    usuarioMiddleware.validarTareaId, 
    tareaController.updateTarea
)

/*Traer tarea por id*/
route.get('/tarea/:id',
    usuarioMiddleware.validarTareaId,
    tareaController.getTareaByID)


module.exports = route