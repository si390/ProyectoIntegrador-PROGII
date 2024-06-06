const db = require('../database/models');

const commentController = {

    crearComentario: function (req, res) {
        
    },

    mostrarComentarios: function (req, res) {
        db.Product.findAll({
            order: [['createdAt', 'DESC']]
        })
        .then(function(comentarios){

        })
        .catch(function(error){
            return res.render("product", { error: "error al mostrar comentarios" });
        })
    },

};

module.exports = commentController;