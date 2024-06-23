var express = require('express');
var router = express.Router();
const productController = require('../controllers/Controller');
const { body, validationResult } = require("express-validator")

// Añadir nuevo producto
let productoValidations = [
    body("imagen")
        .notEmpty().withMessage("Debes agregar una imagen")
        .isURL().withMessage("Debes agregar una URL válida"),
    body("nombreProducto")
        .notEmpty().withMessage("Debes agregar un nombre al producto")
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),
    body("descripcion")
        .notEmpty().withMessage("Debes agregar una descripción")
        .isLength({ min: 5 }).withMessage("La descripción debe tener al menos 5 caracteres")
];

// product detail
router.get('/:id', productController.detail);

router.get('/:id/delete', productController.borrar);
router.get('/:id/edit', productController.editar);

// Búsqueda
router.get('/search', productController.search.busqueda);

// product add
router.get('/add/:id', productController.productAdd.renderizarProductAdd);
router.post('/add/:id', productoValidations, (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.session.errors = errors.mapped();
        req.session.oldInput = req.body;
        return res.redirect(`/add/${req.params.id}`);
    }
    productController.productAdd.crearProducto(req, res);
});



module.exports = router;
