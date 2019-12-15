import express from 'express';
import morgan from 'morgan';
import database from './database/database';
import personasRuta from './routes/personas.route';
import alquileresRuta from './routes/alquileres.route';
import propiedadesRuta from './routes/propiedades.route';
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
app.use('/api/personas', personasRuta);
app.use('/api/alquileres', alquileresRuta);
app.use('/api/propiedades', propiedadesRuta);
//sincronizacion con la db
database.sync()
  .then(() => console.log('Base actualizada'));

//exportamos la app
export default app;