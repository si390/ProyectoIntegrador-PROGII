var express = require('express');
var router = express.Router();
const productController = require('../controllers/Controller');
const { body, validationResult } = require("express-validator")

router.get('/', productController.index);

// Detalle del producto
router.get('/:id', productController.detail);

router.get('/:id/edit', productController.editar);

// Eliminar el producto
router.delete('/:id/delete', productController.borrar);
router.get('/add/:id', productController.productAdd.renderizarProductAdd);
// Añadir un nuevo producto
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


router.post('/add/:id', productoValidations, (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.session.errors = errors.mapped();
        req.session.oldInput = req.body;
        return res.redirect(`/add/${req.params.id}`);
    }

    productController.productAdd.crearProducto(req, res);
});

// Buscar productos
router.get('/search', productController.search.busqueda);

module.exports = router;
