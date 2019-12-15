import { Router } from 'express';

import { obtenerAlquileres, obtenerAlquiler, crearAlquiler, modificarAlquiler, borrarAlquiler } from '../controllers/alquiler.controller';

const alquileresRuta = Router();

alquileresRuta.get('/', obtenerAlquileres);

alquileresRuta.get('/:idAlquiler', obtenerAlquiler);

alquileresRuta.post('/', crearAlquiler);

alquileresRuta.put('/:idAlquiler', modificarAlquiler);

alquileresRuta.delete('/:idAlquiler', borrarAlquiler);

export default alquileresRuta;