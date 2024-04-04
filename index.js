const express = require('express');
const conectarDB = require('./config/db');
const config = require('./config/global');
const cors = require('cors');
const horarioRoutes = require('./routes/horario');
const direccionRoutes = require('./routes/direccion');
const antecedentesEducativosRoutes = require('./routes/antecedentesEducativos');
const antecedentesPenalesRoutes = require('./routes/antecedentesPenales');
const usuariosRoutes = require('./routes/usuario');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/profesores', require('./routes/profesor'));
app.use('/api/alumnos', require('./routes/alumno'));
app.use('/api/apoderados', require('./routes/apoderado'));
app.use('/api/horarios', horarioRoutes);
app.use('/api/direccion', direccionRoutes);
app.use('/api/antecedentes_penales', antecedentesEducativosRoutes);
app.use('/api/antecedentes_educativos', antecedentesPenalesRoutes);
app.use('/api/usuarios', usuariosRoutes);

app.listen(config.port, () => {
  console.log(`Corriendo en el puerto ${config.port}`);
});
