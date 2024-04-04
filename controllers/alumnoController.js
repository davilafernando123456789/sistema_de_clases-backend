// controllers/alumnosController.js
const Alumnos = require('../models/Alumno');
const Apoderado = require('../models/Apoderado');
// Obtener todos los alumnos
exports.getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumnos.findAll();
    res.json(alumnos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener alumnos' });
  }
};

// Obtener un alumno por ID
exports.getAlumnoById = async (req, res) => {
  const alumnoId = req.params.id;

  try {
    const alumno = await Alumnos.findByPk(alumnoId);
    if (alumno) {
      res.json(alumno);
    } else {
      res.status(404).json({ error: 'Alumno no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener alumno' });
  }
};

// Crear un nuevo alumno

// Crear un nuevo alumno
exports.createAlumno = async (req, res) => {
  try {
    // Obtener el ID del último apoderado creado
    const ultimoApoderado = await Apoderado.findOne({
      order: [['id', 'DESC']],
      attributes: ['id'],
    });

    // Verificar si se encontró el último apoderado
    if (!ultimoApoderado) {
      return res.status(400).json({ error: 'No hay apoderados registrados' });
    }

    // Configurar los valores antes de crear el alumno
    const valoresAlumno = {
      ...req.body,
      Roles_id: 1, // Asignar el valor 1 al campo Roles_id
      Apoderado_id: ultimoApoderado.id, // Asignar el ID del último apoderado al campo Apoderado_id
    };

    // Crear el nuevo alumno
    const nuevoAlumno = await Alumnos.create(valoresAlumno);

    // Enviar la respuesta
    res.status(201).json(nuevoAlumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear alumno' });
  }
};

// Actualizar un alumno por ID
exports.updateAlumnoById = async (req, res) => {
  const alumnoId = req.params.id;

  try {
    const [updatedRows] = await Alumnos.update(req.body, {
      where: { id: alumnoId },
    });

    if (updatedRows > 0) {
      res.json({ message: 'Alumno actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'Alumno no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar alumno' });
  }
};

// Eliminar un alumno por ID
exports.deleteAlumnoById = async (req, res) => {
  const alumnoId = req.params.id;

  try {
    const deletedRowCount = await Alumnos.destroy({
      where: { id: alumnoId },
    });

    if (deletedRowCount > 0) {
      res.json({ message: 'Alumno eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Alumno no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar alumno' });
  }
};
