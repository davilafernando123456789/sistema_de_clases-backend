const { Usuario } = require('../models/Usuario');
const Profesores = require('../models/Profesor');
const Alumnos = require('../models/Alumno');

exports.autenticarUsuario = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    // Buscar en la tabla Alumnos
    const alumno = await Alumnos.findOne({
      where: { usuario, password },
      attributes: ['id'],
    });

    if (alumno) {
      return res.status(200).json({ mensaje: 'OK', rol: 1 }); // Rol 1 para alumnos
    }

    // Buscar en la tabla Profesores
    const profesor = await Profesores.findOne({
      where: { usuario, password },
      attributes: ['id'],
    });

    if (profesor) {
      return res.status(200).json({ mensaje: 'OK', rol: 2 }); // Rol 2 para profesores
    }

    return res.status(401).json({ mensaje: 'Credenciales incorrectas' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al autenticar usuario' });
  }
};
