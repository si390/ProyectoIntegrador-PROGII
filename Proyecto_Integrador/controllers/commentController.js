const db = require('../database/models');

const commentController = {

    crearComentarios: function (req, res) {
    if (req.session.user != undefined){
         return res.redirect("/")
    } else{
        return res.redirect("/login")
    }
    },

};

module.exports = commentController;