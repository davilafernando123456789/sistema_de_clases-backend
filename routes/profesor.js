const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController');

// Rutas para Profesores
router.get('/', profesorController.getAllProfesores);
router.get('/:id', profesorController.getProfesorById);
router.post('/', profesorController.createProfesor);
router.put('/:id', profesorController.updateProfesorById);
router.delete('/:id', profesorController.deleteProfesorById);

module.exports = router;