const db = require('../database/models');
const { validationResult } = require("express-validator");

const commentController = {

    crearComentario: function (req, res) {
        const errors = validationResult(req);
        const productId = req.params.productoId;

        if (!req.session.user) {
            const error = "Debes estar logueado para comentar";
            return res.render('product/detail', { productId, loguearse: error });
        }
        const texto = req.body.comment;

        if (errors.isEmpty()) {
            db.Comentario.create({
                texto,
                productoId: productId,
                usuarioId: req.session.user.id,
            })
            .then(() => {
                res.redirect(`/product/${productId}`);
            })
            .catch((error) => {
                console.error("Error al crear comentario:", error);
                res.render('product/detail', { productId, error: "Error al subir comentario" });
            });
        } else {
            res.render('product/detail', { productId, errors: errors.mapped(), old: req.body });
        }
    }
};

module.exports = commentController;
