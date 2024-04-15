const usuario = require('../db/index');

const profileController = {

nombre: function (req, res){
    return res.render('profile', usuario.perfil.nombre);
},

email: function (req, res){
    return res.render('profile', usuario.perfil.email);
},

}

module.exports = profileController;