const datos = require('../db/index');
const db = require('../database/models')
const profileController = {
    
    mostrarPerfil: function (req, res) {

        const user = datos.usuarios.lista[0];

        return res.render('profile', {nombre: user.nombre, email: user.email, foto: user.fotoPerfil });

    },
    registro: function (req, res) {

        const user = datos.usuarios.lista[0];
        let nuevoUsuario = req.body.email;
        req.session.newUser = nuevoUsuario;
        res.cookie('UsuarioNuevo', nuevoUsuario, {maxAge: 1000*60*1})
        return res.render('register', {nombre: user.nombre, email: user.email });
        
    },
    login: function (req, res) {

        const user = datos.usuarios.lista[0];

        return res.render('login', {nombre: user.nombre, email: user.email });
        
    },
    edit: function (req, res) {

        const user = datos.usuarios.lista[0];
        return res.render('profile-edit', {nombre: user.nombre, email: user.email });
        
    }
};

module.exports = profileController;
