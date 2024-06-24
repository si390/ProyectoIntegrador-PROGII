const { Association } = require('sequelize');
const db = require('../database/models');
const { validationResult } = require("express-validator");
const Product = db.Product;
const Usuario = db.Usuario;
const Comentario = db.Comentario;

const commentController = {
    crearComentario: function(req, res) {
        if (!req.session.user) {
            return res.redirect('/profile/login');
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const { comment } = req.body;
            db.Comentario.create({
                texto: comment,
                usuario_id: req.session.user.id,
                producto_id: req.params.productoId,
                created_at: new Date()
            })
           .then(() => {
                res.redirect(`/product/${req.params.productoId}`);
            })
           .catch(error => {
                res.status(500).send(error.message);
            });
        } else {
            return res.render('product', {
                errors: errors.mapped()
            });
        }
    },
}

module.exports = commentController;
