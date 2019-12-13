import { Router } from 'express';

import { obtenerPersonas, obtenerPersona, crearPersona, modificarPersona, borrarPersona } from '../controllers/persona.controller';

const personasRuta = Router();

personasRuta.get('/', obtenerPersonas);

personasRuta.get('/:idPersona', obtenerPersona);

personasRuta.post('/', crearPersona);

personasRuta.put('/:idPersona', modificarPersona);

personasRuta.delete('/:idPersona', borrarPersona);

export default personasRuta;