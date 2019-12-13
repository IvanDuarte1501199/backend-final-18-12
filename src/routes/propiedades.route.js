import { Router } from 'express';

import { obtenerPropiedades, obtenerPropiedad, crearPropiedad, modificarPropiedad, borrarPropiedad } from '../controllers/propiedad.controller';

const propiedadesRuta = Router();

propiedadesRuta.get('/', obtenerPropiedades);

propiedadesRuta.get('/:idPersona', obtenerPropiedad);

propiedadesRuta.post('/', crearPropiedad);

propiedadesRuta.put('/:idPersona', modificarPropiedad);

propiedadesRuta.delete('/:idPersona', borrarPropiedad);

export default propiedadesRuta;