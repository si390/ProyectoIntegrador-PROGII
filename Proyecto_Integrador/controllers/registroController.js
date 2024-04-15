const products = require('../db/index');

const registroController = {

registrarUsuario: function(req, res){
   
    let {nombre, contraseña, email, fechaNacimiento,  fotoPerfil, dni} = req.body;

        const nuevoUsuario = {
            nombre,
            contraseña,
            email,
            fechaNacimiento,
            fotoPerfil,
            dni
            };

        basedatos.perfil = nuevoUsuario;
            res.send('Usuario registrado correctamente');
            }
};

module.exports = registroController;