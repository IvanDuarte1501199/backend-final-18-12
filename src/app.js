import express from 'express';
import morgan from 'morgan';
import database from './database/database';
import alumnosRuta from './routes/alumno.route';
import profesorRuta from './routes/profesor.route';
import cursoRuta from './routes/curso.route';
import cursoalumnoRuta from './routes/curso_alumno.route';




//inicializar express
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*")
  next();
});

//rutas
app.use('/api/alumnos', alumnosRuta);
app.use('/api/profesores', profesorRuta);
app.use('/api/cursos', cursoRuta);
app.use('/api/cursos_alumno', cursoalumnoRuta);

//sincronizacion con la db
database.sync()
  .then(() => console.log('Base actualizada'));

//exportamos la app
export default app;