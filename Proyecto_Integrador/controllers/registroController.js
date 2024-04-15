const products = require('../db/index');

const perfil = basedatos.perfil

const registroController = {

registrarUsuario: function(req, res) {
   
const {nombre, contraseña, email, fechaNacimiento,  fotoPerfil, dni,} = req.body;

        const nuevoUsuario = {
            nombre,
            contraseña,
            fechaNacimiento,
            email,
            fotoPerfil,
            dni
        };

        basedatos.perfil = nuevoUsuario;
        res.send('Usuario registrado correctamente');
    }
};

module.exports = registroController;

module.exports = registroController;
