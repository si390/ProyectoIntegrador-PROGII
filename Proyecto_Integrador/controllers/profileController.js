const usuario = require('../db/index');
const datos = usuario.perfil;

const profileController = {

    nombre: function (req, res){
        return res.render('profile', {nombre: datos.nombre});
    },

    email: function (req, res){
        return res.render('profile', {email: datos.email});
    },
    
}

module.exports = profileController;
