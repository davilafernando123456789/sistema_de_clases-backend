// controllers/profesoresController.js
const Profesores = require('../models/Profesor');

// Obtener todos los profesores
exports.getAllProfesores = async (req, res) => {
  try {
    const profesores = await Profesores.findAll();
    res.json(profesores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener profesores' });
  }
};

// Obtener un profesor por ID
exports.getProfesorById = async (req, res) => {
  const profesorId = req.params.id;

  try {
    const profesor = await Profesores.findByPk(profesorId);
    if (profesor) {
      res.json(profesor);
    } else {
      res.status(404).json({ error: 'Profesor no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener profesor' });
  }
};

// Supongamos que el modelo del profesor tiene un campo Roles_id

// Crear un nuevo profesor
exports.createProfesor = async (req, res) => {
  try {
    // Agrega el valor 2 al campo Roles_id antes de crear el profesor
    req.body.Roles_id = 2;

    const nuevoProfesor = await Profesores.create(req.body);
    res.status(201).json(nuevoProfesor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear profesor' });
  }
};

// Resto del código...


// Actualizar un profesor por ID
exports.updateProfesorById = async (req, res) => {
  const profesorId = req.params.id;

  try {
    const [updatedRows] = await Profesores.update(req.body, {
      where: { id: profesorId },
    });

    if (updatedRows > 0) {
      res.json({ message: 'Profesor actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'Profesor no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar profesor' });
  }
};

// Eliminar un profesor por ID
exports.deleteProfesorById = async (req, res) => {
  const profesorId = req.params.id;

  try {
    const deletedRowCount = await Profesores.destroy({
      where: { id: profesorId },
    });

    if (deletedRowCount > 0) {
      res.json({ message: 'Profesor eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Profesor no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar profesor' });
  }
};
