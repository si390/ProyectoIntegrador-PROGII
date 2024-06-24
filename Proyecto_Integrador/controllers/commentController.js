const db = require('../database/models');
const { validationResult } = require("express-validator");
const Product = db.Product;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
const commentController = {

        crearComentario: function (req, res) {
            const errors = validationResult(req);
            const productId = req.params.productId; 
    
            if (!req.session.user) {
                const error = "Debes estar logueado para comentar";
                return res.render('product', { producto: { id: productId }, loguearse: error });
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

                    res.render('product', { producto: { id: productId }, error: "Error al subir comentario" });
                });
            } else {
                res.render('product', { producto: { id: productId }, errors: errors.mapped(), old: req.body });
            }
        }
};

module.exports = commentController;
