var express = require('express');
var router = express.Router();
const productController = require('../controllers/Controller');
const {body}=require("express-validator");



router.get('/', productController.index);

// Detalle del producto
router.get('/:id', productController.detail);

// Editar el producto
router.get('/:id/edit', productController.editar);

// Eliminar el producto
router.delete('/:id/delete', productController.borrar);

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

router.get('/add', (req, res) => {
    res.render('product-add');
});
router.post('/add', productoValidations, productController.productAdd.crearProducto);


// Buscar productos
router.get('/search', productController.search.busqueda);

module.exports = router;

