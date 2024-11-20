const Tarea = require('../mongoSchema/tarea.schema')
const Usuario = require('../mongoSchema/Usuario.schema')
const middleware = {};

const validarId = (modelo) => {
    return async (req, res, next) => {
        const id = req.params.id;
        const instancia = await modelo.find({id});
        if (!instancia) {
            return res.status(404).json({ message: `El ${id} no existe` });
        }
        next();
    };
};

middleware.validarUsuarioId = validarId(Usuario)
middleware.validarTareaId = validarId(Tarea);

module.exports = middleware