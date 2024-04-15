const usuario = require('../db/index');
const datos = usuario.perfil;

const profileController = {

    nombre: function (req, res){
        return res.render('profile', datos.nombre);
    },

    email: function (req, res){
        return res.render('profile', datos.email);
    },

}

module.exports = profileController;
