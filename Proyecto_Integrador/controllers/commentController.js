const db = require('../database/models');
const { validationResult } = require("express-validator");


const commentController = {

    crearComentario: function(req, res) {
        if (!req.session.user) {
            return res.redirect('/profile/login');
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return db.Producto.findByPk(req.params.productoId, {
                include: [{ model: db.Comentario, include: [db.Usuario] }]
            })
            .then(producto => {
                res.render('product', {
                    producto: producto,
                    comentarios: producto.Comentarios,
                    errors: errors.mapped()
                });
            });
        }

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
    },
    
};


module.exports = commentController;
