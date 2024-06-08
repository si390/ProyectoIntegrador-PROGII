const db = require('../database/models');
const {validationsResult} =require("express-validator");

const commentController = {

    crearComentarios: function (req, res) {
        if (req.session.user == undefined) {

            return res.redirect("/login")
        } else {
            const texto = req.body.comment;
            const productId = req.params.id;

            Comentario.create({
                texto: texto,
                productoId: productId,
                usuarioId: req.session.user.id,
            })
                .then(function (comentario) {
                    return res.redirect(`/product/${productId}`);
                })
                .catch(function (error) {
                    return res.render("product", { error: "Error al subir comentario" });
                });
        }
    },

};

module.exports = commentController;