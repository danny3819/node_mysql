const express = require('express');
const rutas = express.Router();
const controlador = require('../controllers/controladorComprador')

rutas.get('/', controlador.lista);

rutas.post('/add', controlador.guardar);

module.exports = rutas;