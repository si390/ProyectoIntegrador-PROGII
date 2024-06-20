var express = require('express');
var router = express.Router();
const Controller = require('../controllers/Controller')
const {body}=require("express-validator");



// Home page
router.get('/', Controller.getAllProducts);
router.post('/login', (req, res) => {

    req.session.user = {
        id: user.id,
        email: user.email,
    };
    res.redirect('/');
});
module.exports = router;
