const db = require('../database/models');
const { validationResult } = require("express-validator");

const commentController = {

    crearComentario: function (req, res) {
        let errors = validationResult(req);
        const productId = req.params.productoId;

        if (!req.session.user) {
            let error = "Debes estar logueado para comentar";
            return res.render(`product/${productId}`, { loguearse: error });
        } else {
            const texto = req.body.comment;

            if (errors.isEmpty()) {
                db.Comentario.create({
                    texto: texto,
                    productoId: productId,
                    usuarioId: req.session.user.id,
                })
                    .then(function () {
                        return res.redirect(`/product/${productId}`);
                    })
                    .catch(function () {
                        return res.render(`product/${productId}`, { error: "Error al subir comentario" });
                    });
            } else {
                return res.render(`product/${productId}`, { errors: errors.mapped(), old: req.body });
            }
        }
    },

};

module.exports = commentController;
