var express = require('express');
const profileController = require('../controllers/profileController');
var router = express.Router();

//Mi perfil//
router.get('/', profileController.nombre);

router.get('/email', profileController.email);

module.exports = router;
