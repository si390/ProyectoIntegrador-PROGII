const datos = require('../db/index');
const db = require('../database/models');
let bcrypt = require('bcryptjs');
let op = db.Sequelize.Op;
const {validationResult} =require("express-validator");


const profileController = {

    registro: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            //No hay errores, seguimos adelante
        }else{
            res.render('register', {errors: errors.mapped(), old: req.body});
        }
        const user = datos.usuarios[0];
        let nuevoUsuario = req.body.email;
        req.session.newUser = nuevoUsuario;
        res.cookie('UsuarioNuevo', nuevoUsuario, { maxAge: 1000 * 60 * 1 })
        return res.render('register', { nombre: user.nombre, email: user.email });

    },
    edit: function (req, res) {

        const user = datos.usuarios[0];
        return res.render('profile-edit', { nombre: user.nombre, email: user.email });

    },
    /* mostrarLogin: function (req, res) {
         const user = datos.usuarios[0];
         return res.render('login', {nombre: user.nombre, email: user.email }); 
         
     },
     mostrarPerfil: function (req, res) {
        const user = datos.usuarios[0];

        return res.render('profile', { nombre: user.nombre, email: user.email, foto: user.fotoPerfil });

    },*/

    mostrarPerfil: function (req, res) {
        .then(function(mostrarPerfil)){
           if (req.session.user !== undefined) {       /*Cambiar, tengo que agregar los productos*/
            const user = req.session.user;
            return res.render('profile', { nombre: user.nombre, email: user.email, foto: user.fotoPerfil });
        } else {
            return res.redirect('/login');
        }},
        .catch(function(error) {
            return res.render("profile" {error: "Error al cargar página de perfil de usuario"}),
        })  
    },

    mostrarLogin: function (req, res) {  
        .then(function(mostrarLogin)){
            if (req.session.user == undefined) {      

             return res.render('login', { mostrarLogin: mostrarLogin});
         } else {
             return res.redirect('/index');
         }},
         .catch(function(error) {
             return res.render("login" {error: "Error al cargar página de login"}),
         }) 
    },

    login: function (req, res) {
        let errors = validationResult(req);
        const { email, contrasenia } = req.body;

        if (!errors.isEmpty()) {
            return res.render("login", { errors: errors.mapped(), old: req.body });
        }
        
        db.Usuario.findOne({ where: { email: email } })
            .then(function (usuarioLogueado) {
                if (!usuarioLogueado) {
                    return res.render("login", { error: "Usuario no registrado" });
                } else {
                    let comparacion = bcrypt.compareSync(contrasenia, usuarioLogueado.contrasenia);
                    if (!comparacion) {
                        return res.render("login", { errorContraseña: "Contraseña incorrecta" });
                    } else {
                        req.session.user = usuarioLogueado;
                        if (req.body.recordarme) {
                            res.cookie('user', usuarioLogueado.id, { maxAge: 1000 * 60 * 1 });
                        }
                        return res.redirect('/profile');
                    }
                }
            })
            .catch(function (error) {
                return res.render("login", { error: "Error al buscar usuario" });
           });
    },


    mostrarLogout: function(req, res){
        
        };       
    },

    logout: function(req, res){
        
        req.session.destroy();    

        .then(function(salir{
            return res.redirect('/login');
        }));
        .catch(function (error) {
            return res.render("/index", { error: "Error al cerrar sesión" });
        });       
    },
};

module.exports = profileController;
