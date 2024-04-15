var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

//Mi perfil//

router.get('/', profileController.nombre);

router.get('/email', profileController.email);

module.exports = router;


