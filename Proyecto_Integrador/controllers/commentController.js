const db = require('../database/models');
const op = db.Sequelize.Op;
const { validationResult } = require("express-validator");

const commentController = {

    
    crearComentario: function (req, res) {
        let errors = validationResult(req);

        if (req.session.user == undefined) {
            return res.redirect("/login")
        } else {
            const texto = req.body.comment;
            const productId = req.params.id;

            if (errors.isEmpty()) {
                Comentario.create({
                    texto: texto,
                    productoId: productId,
                    usuarioId: req.session.user.id,
                })
                    .then(function (comentario) {
                        return res.redirect(`/product/${productId}`);
                    })
                    .catch(function (error) {
                        return res.render(`/product/${productId}`, { error: "Error al subir comentario" });
                    });
            } else {
                return res.render(`/product/${productId}`, { errors: errors.mapped(), old: req.body });
            }}
    },

};

module.exports = commentController;