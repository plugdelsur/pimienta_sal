const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js');

router.get('/menu', productsController.detalleMenu);

module.exports = router;