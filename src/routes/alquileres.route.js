import { Router } from 'express';

import { obtenerAlquileres, obtenerAlquiler, crearAlquiler, modificarAlquiler, borrarAlquiler } from '../controllers/alquiler.controller';

const alquileresRuta = Router();

alquileresRuta.get('/', obtenerAlquileres);

alquileresRuta.get('/:idPersona', obtenerAlquiler);

alquileresRuta.post('/', crearAlquiler);

alquileresRuta.put('/:idPersona', modificarAlquiler);

alquileresRuta.delete('/:idPersona', borrarAlquiler);

export default alquileresRuta;