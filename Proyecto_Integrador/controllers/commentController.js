const db = require('../database/models');

const commentController = {

    crearComentario: function (req, res) {
        
    },

    mostrarComentarios: function (req, res) {
        db.Comentario.findAll({
            order: [['createdAt', 'DESC']]
        })
        .then(function(comentarios){
            res.render("product", { comentarios: comentario });
        })
        .catch(function(error){
            return res.render("product", { error: "error al mostrar comentarios" });
        })
    },

};

module.exports = commentController;