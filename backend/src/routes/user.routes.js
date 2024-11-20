const {Router} = require('express')
const route = Router()
const usuarioSchema = require('../mongoSchema/Usuario.schema')
const usuarioController = require('../controllers/usuario.controller')
const usuarioMiddleware = require('../middlewares/validarId.middlewares')

/*TRAER USUARIO*/
route.get('/usuario/:id', 
    usuarioMiddleware.validarUsuarioId, 
    usuarioController.getUsuarioById)


/*CREAR USUARIO*/
route.post('/usuario', usuarioController.createNewUsuario)


/*ELIMINAR USUARIO*/
route.delete('/usuario/:id',
    usuarioMiddleware.validarUsuarioId, 
    usuarioController.deleteUsuario
)

/*MODIFICAR USUARIO*/
route.put('/usuario/:id',
    usuarioMiddleware.validarUsuarioId, 
    //usuarioController.
)

/*AGREGAR TAREA A USUARIO*/
route.post('/usuario/:id',
    usuarioMiddleware.validarUsuarioId, 
    usuarioController.addTareaToUsuario
)

module.exports = route